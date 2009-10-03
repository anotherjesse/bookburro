/*
* Copyright 2005-2009 Jesse Andrews
*
* This file may be used under the terms of of the
* GNU General Public License Version 3 or later (the "GPL"),
* http://www.gnu.org/licenses/gpl.html
*
* Software distributed under the License is distributed on an "AS IS" basis,
* WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
* for the specific language governing rights and limitations under the
* License.
*/

var DEBUG = false;

var EXPORTED_SYMBOLS = ['BBSVC'];

var BBSVC = {};

/************
 * Constants
 */

const Cc = Components.classes;
const Ci = Components.interfaces;

const PREFS = Cc['@mozilla.org/preferences-service;1']
  .getService(Ci.nsIPrefService)
  .getBranch('extensions.bookburro.');

function getSourcePref(name) {
  if (PREFS.getPrefType(name)) {
    return PREFS.getBoolPref(name);
      }
  return false;
};

function loadSubScript(spec) {
  var loader = Cc['@mozilla.org/moz/jssubscript-loader;1']
    .getService(Ci.mozIJSSubScriptLoader);
  var context = {};
  loader.loadSubScript(spec, context);
  return context;
}

function log(str) {
  dump("BB: " + str + "\n");
}

/************
 * Development Mode
 */



var custom = Cc['@mozilla.org/file/directory_service;1']
            .getService(Ci.nsIProperties).get('ProfD', Ci.nsILocalFile);
custom.append('bookburro');

if (!custom.exists()) {
  custom.create(Ci.nsIFile.DIRECTORY_TYPE, 0700);
}

custom.append('custom.js');

function getCustom() {
  if (custom.exists()) {
    return loadSubScript('file://'+custom.path).libraries;
  }
}



/**********
 * Caching
 */

var CACHE = (new function() {
  var _store = {};

  this.get = function(k) {
    var item = _store[k];
    if (item) {
      // only cached for one hour (60*60*1000ms)
      if ((new Date).getTime() - item.cached_at < 3600000) {
        return item.value;
      } else {
        delete _store[k];
      }
    }
  };

  this.set = function(k,v) {
    _store[k] = {value: v, cached_at: (new Date())};
  };

  this.test = function(){
    this.set("works", 42);
    if (CACHE.get("works") == 42) {
      return 'pass';
    }
    else {
      return 'fail';
    }

  }

});

BBSVC.cache = CACHE;

if (DEBUG) {
  log("Testing CACHE: " + CACHE.test());
}

/***************
 * ISBN Helpers
 */

var ISBN = {
  trim: function(isbn) {
    return isbn.toLowerCase().replace(/-/g,'').replace(/\s/g,'');
  },
  checksum10: function(isbn9) {
    var isbn = ISBN.trim(isbn9);

    if (isbn.match(/^\d{9}$/)) {
      var checksum = 0;
      for (var i=0; i<9; i++) {
        checksum += isbn9[i] * (i+1);
      }
      checksum = checksum % 11;
      if (checksum == 10) {
        checksum = 'x';
      }

      return checksum;
    }
  },
  validate10: function(isbn10) {
    var isbn = ISBN.trim(isbn10);

    if (isbn.match(/^\d{9}[0-9x]$/)) {
      if (isbn[9] == ISBN.checksum10(isbn.slice(0,9))) {
        return isbn;
      }
    }
  },
  checksum13: function(isbn12) {
    var isbn = ISBN.trim(isbn12);

    if (isbn.match(/^\d{12}$/)) {
      var checksum = 0;
      for (var i=0; i<12; i++) {
        checksum += isbn[i] * (i%2 == 0 ? 1 : 3);
      }

      return (10 - (checksum % 10)) % 10;
    }
  },
  validate13: function(isbn13) {
    var isbn = ISBN.trim(isbn13);

    if (isbn.match(/^\d{13}$/)) {
      if (isbn13[12] == ISBN.checksum13(isbn.slice(0,12))) {
        return isbn;
      }
    }
  },
  validate: function(isbn) {
    isbn = ISBN.trim(isbn);

    if (isbn.length == 13) {
      return ISBN.validate13(isbn);
    }
    if (isbn.length == 10) {
      return ISBN.validate10(isbn);
    }
  },
  convert: function(isbnIn) {
    var isbn;
    if (isbn = ISBN.validate13(isbnIn)) {
      if (isbn.slice(0,3) != '978') {
        return; // perhaps return the ISBN13 instead of null?
      }

      isbn = isbn.slice(3,12);
      return isbn + ISBN.checksum10(isbn);
    }

    if (isbn = ISBN.validate10(isbnIn)) {
      isbn = '978' + isbn.slice(0,9);
      return isbn + ISBN.checksum13(isbn);
    }
  },
  replace: function(url, isbn) {
    return url.replace('#{ISBN}', isbn.toLowerCase())
      .replace('#{ISBN_UPCASE}', isbn.toUpperCase());
  },
  test: function(isbns) {
    if (!isbns) {
      isbns = ['9992158107','99921-58-10-7','9971502100','9604250590','0943396042','080442957x',
               '097522980x','9780306406157','9780940016736','9780940016613'];
    }
    for (var i=0; i<isbns.length; i++) {
      var isbn = ISBN.validate(isbns[i]);
      if (!isbn) {
        return 'fail validating ' + isbns[i];
      }
      if (isbn.length == 10) {
        if (!ISBN.validate13(ISBN.convert(isbn))) {
          return 'fail converting ' + isbn;
        }
      }
      else {
        if (isbn.slice(0,3) == '978' && !ISBN.validate10(ISBN.convert(isbn))) {
          return 'fail converting ' + isbn;
        }
      }
    }

    return 'pass';
  },

}

BBSVC.isbn = ISBN;

if (DEBUG) {
  log("Testing ISBN: " + ISBN.test());
}


/****************
 * STORE/LIBRARY site wapper
 */

function Site(data) {
  if (!data) return;
  this._data = data;
  this.title = data.title;
  this.name  = data.name;
}

Site.prototype.url =
function site_url(isbn, affiliate) {
  if (affiliate == null) {
    affiliate = !(PREFS.getPrefType('disable_affiliate') &&
                  PREFS.getBoolPref('disable_affiliate'));
  }

  if (affiliate && this._data.affiliate_link) {
    var link = this._data.affiliate_link;
  }
  else {
    var link = this._data.link;
  }

  return ISBN.replace(link, isbn);
};

Site.prototype.active =
function site_active() {
  return getSourcePref(this.kind + '.' + this.name);
};

Site.prototype.check =
function site_check(isbn, successCallback, failureCallback, forceQuery) {
  var cacheKey = this.kind + ':' + this.name + ':' + isbn;

  if (!forceQuery) {
    var status = CACHE.get(cacheKey);
    if (status !== undefined) {
      return successCallback(status);
    }
  }

  var inst = this; // closure
  var source = this._data.query || this._data.link;
  var url = ISBN.replace(source, isbn);
  var req = Cc['@mozilla.org/xmlextras/xmlhttprequest;1']
    .createInstance(Ci.nsIXMLHttpRequest);

  var timeout = setTimeout(req.abort, 10000);

  req.mozBackgroundRequest = true;
  req.open('GET', url, true);

  req.onload = function (aEvent) {
    clearTimeout(timeout);
    var status = inst.process(req, isbn);
    CACHE.set(cacheKey, status);
    successCallback(status);
  };

  // FIXME: onerror

  req.send(null);
};


function Store(data) {
  Site.call(this, data);
  this.kind  = 'book_stores';
}

Store.prototype = new Site;
Store.prototype.constructor = Store;

Store.prototype.process =
function store_process(req, isbn) {
  try {
    if (this._data.match) {
      var results = req.responseText.match(this._data.match);
      if (results) {
        var status = results[1].replace(/^\s*/, '').replace(/\s*$/, '');
        if (status[0] != '$') status = '$' + status;
        if (status.indexOf('.') == -1 ) status = status + '.00';
        if (status.indexOf('.') + 2 == status.length ) status = status + '0';
        return status;
      } else {
        return false;
      }
    }

    return this._data.process(req, isbn);
  } catch (e) {
    return '!'; // XXX - this causes the exception to be cached
  }
};

function Library(data){
  Site.call(this, data);
  this.have  = data.have;
  this.dont  = data.dont;
  this.kind  = 'libraries';
}

Library.prototype = new Site;
Library.prototype.constructor = Library;

Library.prototype.process =
function library_process(req, isbn) {
  if (this._data.match_isbn) {
    var results = req.responseText.toLowerCase().match( isbn.toLowerCase() );
    return !!results;
  }

  if (this._data.found) {
    var regex = new RegExp(this._data.found);
    var results = req.responseText.match( regex );
    return !!results;
  }

  if (this._data.missing) {
    var regex = new RegExp(this._data.missing);
    var results = req.responseText.match( regex );
    return !results;
  }

  // XXX - throw an error
};

// var libraries = function() {
//
// FIXME: attempt to load from ProfD,
// if fail, load from data from extension
//   try {
//     var file = Components.classes['@mozilla.org/file/directory_service;1']
//       .getService(Components.interfaces.nsIProperties)
//       .get('ProfD', Components.interfaces.nsILocalFile);

//     file.append('bookburro');
//     file.append('libraries.js');

//     var ios = Components.classes['@mozilla.org/network/io-service;1']
//       .getService(Components.interfaces.nsIIOService);
//     var fileHandler = ios.getProtocolHandler('file')
//       .QueryInterface(Components.interfaces.nsIFileProtocolHandler);

//     var fileURL = fileHandler.getURLSpecFromFile(file);

//     var loader = Components.classes['@mozilla.org/moz/jssubscript-loader;1']
//       .getService(Components.interfaces.mozIJSSubScriptLoader);
//     var context = {};
//     loader.loadSubScript(fileURL, context);

//     return context.libraries;

//   } catch (e) {}

// there was an error loading libraries from profile
// we will return the list we shipped with

// };

/**************************
 * WORLDCAT for a location
 */

function Worldcat() {};

Worldcat.prototype.title = "Worldcat";

Worldcat.prototype.url =
function worldcat_url(isbn) {
  return 'http://worldcat.org/wcpa/isbn/'+isbn+'&loc='+this.location();
}

Worldcat.prototype.location =
function worldcat_location() {
  if (PREFS.getPrefType('worldcat')) {
    var location = PREFS.getCharPref('worldcat');
    if (location != '') {
      return location;
    }
  }
};

Worldcat.prototype.active =
function worldcat_active() {
  return !!this.location();
};

// Worldcat.prototype.check =
// function worldcat_check(isbn, successCallback, failureCallback, forceQuery) {
//   var inst = this;
//   var cacheKey = 'worldcat:' + this.location() + ':' + isbn;

//   if (!forceQuery) {
//     var status = CACHE.get(cacheKey);
//     if (status !== undefined) {
//       return successCallback(status);
//     }
//   }

//   var req = new XMLHttpRequest();
//   req.open('GET', inst.url(isbn), true);

//   // FIXME: no fallureCallback?
//   req.onreadystatechange = function() {
//     if (req.readyState == 4 && req.status == 200) {
//       var status = inst.process(req, isbn);
//       CACHE.set(cacheKey, status);
//       successCallback(status);
//     }
//   };

//   req.send(null);
// };

// Worldcat.prototype.process =
// function worldcat_process(req, isbn) {
//   var text = req.responseText;
//   if (text.match(/we cannot identify the location you entered/)) {
//     return '!';
//   }
//   if (text.match(/Sorry, no libraries with the specified item were found/)) {
//     return '';
//   }
//   if (text.match(/Your Find in a Library search found no records./)) {
//     return '';
//   }
//   text = text.split(/<table [^>]*class="tableResults"[^>]*>/m)[1];
//   text = text.split(/<div class="fin?al-resultsinfo">/m)[0];
//   text = text.split(/<table [^>]*class="tableLibrary"[^>]*>/m);
//   var results = [];
//   for (var i=1; i<text.length; i++) {
//     try {
//       var result = {};
//       var str = text[i].replace(/[\r\n]+/mg, ' ');
//       var name = str.match(/<td class="name">(.*?)<\/td>/);
//       if (name) {
//         result.name = name[1].replace(/<[^>]*>/g, '');
//         var href = name[1].match(/href="(.*?)"/);
//         if (href) {
//           result.href = href[1];
//         }
//       } else { continue; }
//       result.distance = text[i].match(/\d+ miles?/m)[0];
//       result.location = text[i].match(/<td class="location">([^<]*)<\/td>/m)[1];
//       results.push(result);
//     } catch (e) {}
//   }
//   return results;
// };

BBSVC.worldcat = function() {
  return new Worldcat();
}

/***********************
 * Store enumerator
 */

var stores = loadSubScript('chrome://bookburro/content/data/stores.js').stores;

function active_stores(force) {
  var rval = [];
  for (var i = 0; i < stores.length; i++) {
    var store = new Store(stores[i]);
    if (force || store.active()) {
      rval.push(store);
    }

  }
  return rval;
}

BBSVC.active_stores = active_stores;
BBSVC.stores = function() {
  return active_stores(true);
};

var libraries = loadSubScript('chrome://bookburro/content/data/libraries.js').libraries;

libraries.sort(function(a,b) {
                 return (a.title < b.title) ? -1 : 1;
               });

function active_libraries(force) {
  var rval = [];

  try {
    var custom = getCustom();
    if (custom) {
      for (var i = 0; i < custom.length; i++) {
        rval.push(new Library(custom[i]));
      }
    }
  } catch(e) {
    log("Error loading custom.js: " + e);
  }

  for (var i = 0; i < libraries.length; i++) {
    var library = new Library(libraries[i]);
    if (force || library.active()) {
      rval.push(library);
    }
  }
  return rval;
}

BBSVC.active_libraries = active_libraries;
BBSVC.libraries = function() {
  return active_libraries(true);
};


function setTimeout(callback, ms) {
  var _timer = Cc['@mozilla.org/timer;1']
                 .createInstance(Ci.nsITimer);
  _timer.initWithCallback({notify: callback}, ms, Ci.nsITimer.TYPE_ONE_SHOT);
  return _timer;
}

function clearTimeout(timer) {
  timer.cancel();
}
