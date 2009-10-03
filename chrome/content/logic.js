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

var burro = burro || {};

(function() {

  // If we've not welcomed user to let them know how to use book burro, do so
  var prefService = Cc['@mozilla.org/preferences-service;1']
                      .getService(Ci.nsIPrefService);
  var prefs = prefService.getBranch('extensions.bookburro.');
  var welcomed = prefs.getPrefType('welcomed') && prefs.getBoolPref("welcomed");
  if (!welcomed) {
    setTimeout(function(){ window.openUILinkIn('http://www.bookburro.org?welcome', "tab"); }, 500);
    prefs.setBoolPref("welcomed", true);
  }

  // Flush prefs to desk to be sure we don't open the welcome twice!
  prefService.savePrefFile(null);

  Components.utils.import("resource://bookburro/services.js"); // BBSVC

  burro.contextSearch = function() {
    var text = new XPCNativeWrapper(document.commandDispatcher.focusedWindow,
                                    'document',
                                    'getSelection()')
      .getSelection().toString();

    var isbn = text.replace(/-/g,'').match(/(\d{13}|\d{9}[0-9Xx])/);
    if (isbn) isbn = BBSVC.isbn.validate(isbn[1]);

    if (isbn) {
      var contentWrapper = new XPCNativeWrapper(window._content, 'doc');
      var docWrapper = new XPCNativeWrapper(contentWrapper.document, "top");
      burro.ui.overlay(docWrapper, isbn, true);
    } else {
      alert('Select a ISBN to turn on Book Burro');
    }
  };

  function init() {
    var appcontent = window.document.getElementById("appcontent");
    if (appcontent && !appcontent.bookburro) {
      appcontent.bookburro = true;
      appcontent.addEventListener("DOMContentLoaded", bookburro, false);
    }
  }

  function uninit() {
    var appcontent = window.document.getElementById("appcontent");
    if (appcontent) {
      appcontent.removeEventListener("DOMContentLoaded", bookburro, false);
    }
  }

  window.addEventListener("load", init, false);
  window.addEventListener("unload", uninit, false);

  function bookburro(evt) {
    var win = new XPCNativeWrapper(evt.originalTarget, "top");

    // FIXME: should this only work on the main document
    // if so what do we do about iframes?

    if (!win.body) return;

    // don't show bookburro on windows that are too narrow...
    // eg, small iframes like those on iread on facebook
    if (win.body.clientWidth < 250 || win.body.clientHeight < 200) return;

    try {
      var isbn = find_isbn(win);
      if (isbn) burro.ui.overlay(win, isbn);
    }
    catch (e) {}
  }

  function find_isbn(win) {
    function checkISBN(isbnIn) {
      // prefer 10 digit ISBNs until we have a ISBN object ...
      var isbn = BBSVC.isbn.validate(isbnIn);
      if (isbn) {
        if (isbn.length == 10) {
          return isbn;
        }
        return BBSVC.isbn.convert(isbn) || isbn;
      }
    };

    var href = win.location.href;

    if (href.match('amazon.com') && !href.match('rate-this')) {
      return checkISBN(href.match(/\/(\d{9}[0-9Xx])(\/|\?|$)/)[1]);
    }

    if (href.match('booksamillion.com')) {
      return checkISBN(href.match(/isbn=(\d{9}[0-9Xx])(\&|\?|$)/)[1]);
    }

    if (href.match('barnesandnoble.com')) {
      if (href.toLowerCase().match(/isbn=/)) {
        return checkISBN( href.toLowerCase().match(/isbn=(\d{13}|\d{9}[0-9x])(\&|\?|$)/)[1] );
      }
      if (href.toLowerCase().match(/ean=/)) {
        return checkISBN( href.toLowerCase().match(/ean=(\d{13}|\d{9}[0-9x])(\&|\?|$)/)[1] );
      }
    }

    if (href.match('abebooks.com')) {
      var isbn=false;
      try {
        isbn = checkISBN( win.title.match(/ISBN (\d{13}|\d{9}[0-9Xx])/)[1] );
      } catch (e) {};
      try {
        if (!isbn) isbn = checkISBN( win.body.innerHTML.match(/class="isbn">(\d{13}|\d{9}[0-9Xx])/)[1] );
      } catch (e) {};
      return isbn;
    }

    if (href.match('buy.com')) {
      try {
        return checkISBN( win.title.match(/ISBN (\d{13}|\d{9}[0-9Xx])/)[1] );
      } catch (e) {};
    }

    if (href.match('powells.com')) {
      var dts = win.getElementsByTagName('dt');
      for (i=0; i<dts.length; i++) {
        if (dts[i].innerHTML.match('ISBN:')) {
          return checkISBN(dts[i].nextSibling.firstChild.textContent);
        }
      }
    }

    if (href.match('alibris.com')) {
      var bs = win.getElementsByTagName('b');
      for (i=0; i<bs.length; i++) {
        if (bs[i].innerHTML.match('ISBN:')) {
          return checkISBN(bs[i].nextSibling.nextSibling.textContent);
        }
      }
    }

    if (href.match('half.ebay.com')) {
      var bs = win.getElementsByTagName('b');
      for (i=0; i<bs.length; i++) {
        if (bs[i].innerHTML.match('ISBN-10:')) {
          return checkISBN(bs[i].nextSibling.nextSibling.textContent);
        }
      }
    }

    if (href.match('books.google.com')) {
      return checkISBN( href.match(/vid=ISBN(\d{13}|\d{9}[0-9Xx])/)[1] );
    }

    if (href.match('worldcatlibraries.org')) {
      // return checkISBN( href.match(/isbn\/([0-9Xx]{10})/)[1] );
    }

    if (href.match('bookmooch.com')) {
      return checkISBN( href.match(/detail\/(\d{13}|\d{9}[0-9Xx])/)[1] );
    }

    if (href.match('paperbackswap.com')) {
      return checkISBN( href.match(/details\/(\d{13}|\d{9}[0-9Xx])/)[1] );
    }

    if (href.match('nic.nils.org')) {
      var tds = win.getElementsByTagName('td');
      for (i=0; i<tds.length; i++) {
        if (tds[i].textContent == 'ISBN') {
          // occasionally has ISBN_NUMBER : $32.33
          // or 0803205198 (electronic bk.)
          return checkISBN(tds[i].nextSibling.nextSibling.textContent.match(/(\d{13}|\d{9}[0-9Xx])/)[1]);
        }
      }
    }

    // check for the ISBN microformat
    if (win.getElementsByClassName) {
      var results = win.getElementsByClassName('isbnnumber');
      if (results.length == 1) {
        var text = results[0].textContent;
        return checkISBN(text.match(/(\d{13}|\d{9}[0-9Xx])/)[1]);
      }
    }

    var isbn = href.toLowerCase().match(/isbn=(\d{13}|\d{9}[0-9x])/);
    if (isbn) return checkISBN( isbn[1] );
  }
})();



