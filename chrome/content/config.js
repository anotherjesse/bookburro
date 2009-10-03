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

Components.utils.import("resource://bookburro/services.js"); // BBSVC

function updateSearch() {
  var words = document.getElementById('library-search').value.toLowerCase().split(" ");
  var nodes = document.getElementById('libraries-list').childNodes;
  for (var i=0; i<nodes.length; i++) {
    var libtext = nodes[i].getAttribute('label').toLowerCase();

    var hide = false;
    for (var j=0; j<words.length; j++) {
      hide = hide || !libtext.match(words[j]);
    }
    nodes[i].hidden = hide;
  }
}

var bbConfig = {
  onLoad: function() {
    this.prefs = Components.classes['@mozilla.org/preferences-service;1']
      .getService(Components.interfaces.nsIPrefService).getBranch('extensions.bookburro.');

    try {
      var wc_loc = bbConfig.prefs.getCharPref('worldcat');
      document.getElementById('worldcat-location').value = wc_loc;
    } catch (e) {}

    try {
      var disable_affiliate = bbConfig.prefs.getBoolPref('disable_affiliate');
      document.getElementById('disable-affiliate').checked = disable_affiliate;
    } catch (e) {}

    bbConfig.prefs.setBoolPref( 'setup', true );

    this.updateDetails( 'book_stores', BBSVC.stores() );
  },
  loadLibs: function() {
    this.updateDetails( 'libraries', BBSVC.libraries() );
    this.loadLibs = function() {};
    document.getElementById('library-meter').hidden = true;
  },
  saveWorldCat: function() {
    this.prefs.setCharPref('worldcat', document.getElementById('worldcat-location').value );
  },
  saveAffiliate: function() {
    this.prefs.setBoolPref('disable_affiliate', document.getElementById('disable-affiliate').checked );
  },
  prefs: null,
  doChecked: function(checkbox) {
    if (checkbox.checked) {
      bbConfig.prefs.setBoolPref( checkbox.id, true );
    } else {
      bbConfig.prefs.setBoolPref( checkbox.id, false );
    }
  },
  updateDetails: function(sectionName, sources) {
    var sectionList = document.getElementById( sectionName + '-list' );
    if (sources.selectedCount != 0) {
      for (var i=0; i<sources.length; i++) {
        var source = sources[i];
        var checkbox = document.createElement('checkbox');
        checkbox.setAttribute( 'label', source.title);
        checkbox.setAttribute( 'id', sectionName + '.' + source.name);
        checkbox.setAttribute( 'oncommand', 'bbConfig.doChecked(this)' );
        checkbox.setAttribute('checked', source.active());
        sectionList.appendChild( checkbox );
      }
    }
  }
};

window.onload = function() { bbConfig.onLoad(); };
