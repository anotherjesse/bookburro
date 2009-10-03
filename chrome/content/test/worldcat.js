var $ = function(x) { return document.getElementById(x); };

var isbns = ['0131345559', '0773760261', '032119375X', '1558514848', '0333002776'];
var zipcodes = ['94301', '41311', '46809'];

function go() {

  isbns.forEach(function(isbn) {
    var radio = document.createElement('radio');
    radio.setAttribute('label', isbn);
    radio.setAttribute('value', isbn);
    $('isbns').appendChild(radio);
  });

  zipcodes.forEach(function(zipcode) {
    var radio = document.createElement('radio');
    radio.setAttribute('label', zipcode);
    radio.setAttribute('value', zipcode);
    $('zipcodes').appendChild(radio);
  });
}


function visit() {
  var worldcat = new BB.worldcat($('zipcodes').value);
  var url = worldcat.url($('isbns').value);
  openUILinkIn(url, 'tab');
}

function query() {
  var children = $('rows').childNodes;
  for (var i=children.length-1; i>=0; i--) {
    if (children[i].getAttribute('save') != 'true') {
      $('rows').removeChild(children[i]);
    }
  }

  var worldcat = new BB.worldcat($('zipcodes').value);

  var req = new XMLHttpRequest();

  var isbn = $('isbns').value;

  worldcat.check(isbn, function(status) {
      for (var i=0; i<status.length; i++) {
        var row = document.createElement('row');

        var cell = document.createElement('label');
        cell.setAttribute('value', status[i].name);
        row.appendChild(cell);

        cell = document.createElement('label');
        cell.setAttribute('value', status[i].distance);
        row.appendChild(cell);

        cell = document.createElement('label');
        cell.setAttribute('value', status[i].location);
        row.appendChild(cell);

        cell = document.createElement('label');
        cell.setAttribute('value', status[i].href);
        row.appendChild(cell);

        $('rows').appendChild(row);
      }
    }, function() {
      alert('error');
    });
}

window.onload = go;
