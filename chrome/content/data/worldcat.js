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


var BB = BB || {};

BB.worldcat = function(location) {
  var inst = this;

  this.url = function(isbn) {
    return 'http://worldcat.org/wcpa/isbn/'+isbn+'&loc='+location;
  };

  this.check = function(isbn, success, failure, force_query) {
    var cache_key = 'worldcat:' + location + ':' + isbn;

    if (!force_query) {
      var status = BB.cache.get(cache_key);
      if (status !== undefined) {
        success(status);
        return;
      }
    }

    var req = new XMLHttpRequest();
    var url = inst.url(isbn);

    req.open('GET', url);

    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        var status = inst.process(req, isbn);
        BB.cache.set(cache_key, status);
        success(status);
      }
    };

    req.send(null);
  };

  this.process = function(req, isbn) {

    if (req.responseText.match(/we cannot identify the location you entered/)) {
      return '!';
    }
    if (req.responseText.match(/Sorry, no libraries with the specified item were found/)) {
      return '';
    }
    if (req.responseText.match( /Your Find in a Library search found no records./)) {
      return '';
    }
    var text = req.responseText;
    text = text.split(/<table [^>]*class="tableResults"[^>]*>/m)[1];
    text = text.split(/<div class="fin?al-resultsinfo">/m)[0];
    text = text.split(/<table [^>]*class="tableLibrary"[^>]*>/m);
    var results = [];
    for (var i=1; i<text.length; i++) {
      try {
        var result = {};
        var str = text[i].replace(/[\r\n]+/mg, ' ');
        var name = str.match(/<td class="name">(.*?)<\/td>/);
        if (name) {
          result.name = name[1].replace(/<[^>]*>/g, '');
          var href = name[1].match(/href="(.*?)"/);
          if (href) {
            result.href = href[1];
          }
        } else { continue; }
        result.distance = text[i].match(/\d+ miles?/m)[0];
        result.location = text[i].match(/<td class="location">([^<]*)<\/td>/m)[1];
        results.push(result);
      } catch (e) {}
    }
    return results;
  };
};
