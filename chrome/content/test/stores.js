DomBuilder.apply(window);

var isbns = ['0596101996', '0545010225', '1565631609', '0156439611', '0596101651', '0671729411'];

var all_tests = [];

$(function() {

  var stores = {};
  var header = $('#header');

  isbns.forEach(function(isbn) {
      header.append(TH(isbn));
    });

  BB.stores.forEach(function(store) {
          store   = new Store(store);
          var row = TR({id: store.name},
                        TD({}, store.title)
          );
          stores[store.name] = row;
          $('table').append(row);
        });

  isbns.forEach(function(isbn) {
                  BB.stores.forEach(function(store) {
                                      store = new Store(store);
                                      var td = TD();
                                      var results = SPAN('');
                                      td.appendChild(results);
                                      var reg = store.url(isbn, false);
                                      var aff = store.url(isbn, true);
                                      td.appendChild(A({
                                                         href: reg,
                                                         target: '_blank'
                                                       }, 'R'));
                                      if (aff != reg) {
                                        td.appendChild(A({
                                                           href: store.url(isbn, true),
                                                           target: '_blank'
                                                         }, '$'));
                                      }

                                      stores[store.name].appendChild(td);
                                      all_tests.push({site: store, isbn: isbn, element: results});
                                    });
                });

});

function check(test, callback) {

  test.element.parentNode.style.backgroundColor = '#ccc';

  function success(status) {
    test.element.parentNode.style.backgroundColor = '#cfc';
    test.element.innerHTML = status;
    if (callback) callback();
  }

  function failure() {
    test.element.parentNode.style.backgroundColor = '#fd0';
    if (callback) callback();
  }

  test.site.check(test.isbn, success, failure);
}

function testAll(num) {
  num = num || 0;

  if (num < all_tests.length) {
    check(all_tests[num], function() { testAll(num+1); });
  }

}
