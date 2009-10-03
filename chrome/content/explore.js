var $ = function(x) { return document.getElementById(x); }

libraries.forEach(function(library) {
  var menuitem = document.createElement('menuitem');
  menuitem.setAttribute('label', library.title);
  menuitem.setAttribute('id', library.name);
  $('libraries').appendChild(menuitem);
})

book_stores.forEach(function(store) {
  var menuitem = document.createElement('menuitem');
  menuitem.setAttribute('label', store.title);
  menuitem.setAttribute('id', store.name);
  $('stores').appendChild(menuitem);
})


var isbns = {
  '0882665456': 'Horse Sense',
  '0321412486': 'Retouching photos in Photoshop Elements 4',
  '032119375x': 'Adobe Photoshop CS',
  '0321342321': 'Eleanor Roosevelt: a personal and public life',
  '0323016863': 'Introduction to neurogenic communication disorders',
  '0333023188': 'Origins of West African nationalism',
  '0333010167': 'Freud: modern judgements.',
  '0321421922': 'Sitting Bull and the paradox of Lakota nationhood',
  '0321337220': 'The art of the short story'
}

for (var isbn in isbns) {
  var menuitem = document.createElement('menuitem');
  menuitem.setAttribute('label', isbns[isbn]);
  menuitem.setAttribute('id', isbn);
  $('isbns').appendChild(menuitem);
}  


var source = {
  current: null,
  find: function(sources, id) {
    for (var i=0; i<sources.length; i++) {
      if (sources[i].name == id) {
        source.load(sources[i]);
        return;
      }
    }    
  },
  load: function(src) {
    source.current = src;
    $('title').setAttribute('value', src.title);
    $('code').setAttribute('value', src.match || src.process);
  },
  view: function() {
    var isbn = $('isbn').value;

    var url = source.current.link;
    url = url.replace('#{ISBN}', isbn).replace('#{ISBN_UPCASE}', isbn.toUpperCase());
    openUILinkIn(url, 'tab')
  },
  test: function() {
    var isbn = $('isbn').value;

    var req = new XMLHttpRequest();
    req.isbn = isbn;
    var url;
    var src = source.current.query || source.current.link;

    if (typeof(src)=='string') {
      url = src.replace('#{ISBN}', isbn).replace('#{ISBN_UPCASE}', isbn.toUpperCase());
    }
    else {
      url = src(isbn);
    }

    req.open('GET', url);

    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {

        $('responseText').value = req.responseText;

        var status = '';

        if (source.current.match) {
          var results = req.responseText.match(source.current.match);
          if (results) {
            status = results[1].replace(/^\s*/, '').replace(/\s*$/, '');
            if (status[0] != '$') status = '$' + status;
            if (status.indexOf('.') == -1 ) status = status + '.00';
            if (status.indexOf('.') + 2 == status.length ) status = status + '0';
          } else {
            status = '';
          }
        } else {
          status = source.current.process( req );
        }

        // TODO: show exceptions on the explore screen

        $('status').value = status;
      }
    }

    req.send(null);
  }
}

function loadIsbn(id) {
  $('isbn').value = id;
}
