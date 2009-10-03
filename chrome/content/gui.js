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

// FIXME: FIRST RUN!!!
// FIXME: add pref listening...

// IDEA: to make the browser feel more responsive we should close
//       the panel when you start to navigate away?
var burro = burro || {};

burro.log = function(msg) {
  Components.classes['@mozilla.org/consoleservice;1']
    .getService(Components.interfaces.nsIConsoleService)
    .logStringMessage(msg);
};

burro.ui = new function() {
  Components.utils.import("resource://bookburro/services.js");

  function build(iframe, isbn, overlay) {
    overlay.style.display = 'none';
    var doc = iframe.contentWindow.document;
    var html = DomBuilder(doc);

    doc.body.appendChild(
      html.LINK({type: 'text/css', rel: 'stylesheet',
                 href: 'chrome://bookburro/skin/panel.css'}));

    var table = html.TABLE({id: 'container'});
    doc.body.appendChild(table);

    table.appendChild(
      html.TR(
        html.TD(
          {colspan: 2},
          html.TABLE(
            {id: 'heading', width:'100%'},
            html.TR(
              html.TD({id:'title', class:'bookImg'}, 'Book Burro'),
              html.TD({class:'icon'}, html.IMG({id: 'setup', src:'chrome://bookburro/skin/clearbits/tools.gif', title:'choose libraries and stores'})),
              html.TD({class:'icon'}, html.IMG({id: 'close', src:'chrome://bookburro/skin/clearbits/close.gif', title:'close panel'}))
            )
          )
        )
      )
    );

    function closer() {
      iframe.parentNode.removeChild(iframe);
      overlay.style.display = 'block';
    }

    doc.getElementById('close').addEventListener('click', closer, false);

    function configure() {
      window.openDialog('chrome://bookburro/content/config.xul', 'bookburroConfig', 'centerscreen,chrome,modal');

    }
    doc.getElementById('setup').addEventListener('click', configure, false);

    function addSite(site, odd) {
      var row = html.TR({'class': 'site '+ (odd ? 'odd' : ''), 'busy': !!site.check});
      row.appendChild(
        html.TH(
          html.A({'title': site.title, 'href': site.url(isbn), 'target': '_top'},
                 site.title)));

      var result = html.TD({class:'price'});
      row.appendChild(result);

      if (site.check) {
        site.check(isbn,
          function(i) {
            row.removeAttribute('busy');
            result.appendChild(doc.createTextNode(i));
          },
          function(i) {
            row.removeAttribute('busy');
            result.appendChild(doc.createTextNode(i));
          });
      }

      table.appendChild(row);
    }

    var odd = false;

    var worldcat = BBSVC.worldcat();
    if (worldcat.active()) {
      odd = !odd;
      addSite(worldcat, odd);
    }

    var stores = BBSVC.active_stores();
    for (var i=0; i<stores.length; i++) {
      odd = !odd;
      addSite(stores[i], odd);
    }
    var libraries = BBSVC.active_libraries();
    for (var i=0; i<libraries.length; i++) {
      odd = !odd;
      addSite(libraries[i], odd);
    }

    iframe.style.height = doc.body.offsetHeight + 'px';
  }


  // FIXME: each calls to overlay on a document adds another span
  this.overlay = function bb_gui(doc, isbn, auto) {
    var overlay = doc.createElement('span');
    overlay.setAttribute('style', "position: fixed !important; top: 0px !important; left: 0px !important; z-index: 2147483646 !important; background: #ffa !important; display:block; line-height: 18px !important; text-align: center !important; width: 120px !important; height: 18px !important; border: 1px solid #888 !important; font-size: 11px !important; font-family: 'Helvetica Neue',Helvetica,Verdana,sans-serif !important; border-top: none !important; border-left: none !important; -moz-border-radius: 0 0 6px 0 !important; font-weight: bold; cursor: pointer !important;");
    overlay.appendChild(doc.createTextNode('Book Burro'));

    function frameit() {
      var iframe = doc.createElement('iframe');
      iframe.setAttribute('style', 'display: fixed !important; position: fixed !important; width: 265px !important; top: 0 !important; left: 0 !important; z-index: 2147483647 !important; border: none !important; height: 100% !important; overflow: hidden');
      doc.body.appendChild(iframe);
      burro.log('about to add listener');
      iframe.addEventListener("load", function() {
        build(iframe, isbn, overlay);
      }, true);
      iframe.setAttribute('src', 'about:blank');
    };

    overlay.addEventListener('click', frameit, false);

    doc.body.appendChild(overlay);

    if (auto) {
      frameit();
    }
  };
};
