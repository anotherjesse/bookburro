DomBuilder.apply(window);

Components.utils.import("resource://bookburro/services.js"); // BBSVC

var all_tests = [];

$(function() {

  BBSVC.libraries().forEach(
    function(library) {
      inc('total');
      var title = TD({}, library.title);
      var row = TR({id: library.name}, title);

      var recheck = TD('recheck');
      row.appendChild(recheck);

      var explore = TD('explore');
      row.appendChild(explore);

      explore.onclick = function() {
        var results = document.getElementById('explore');
        results.innerHTML = library.title+": ";

        ['0439786770','0439136350','0590353403','0394839129','032119375x', '0967851009','0882665456','0333010167','0321421922','0321342321'].forEach(
          function(isbn) {
            var element = A({href: library.url(isbn), id: 'isbn-'+isbn, target: '_blank'}, isbn);
            results.appendChild(element);
            results.appendChild(SPAN(' '));
            check({lib: library, isbn: isbn, success: true, element: element});
          });
      };

      var testhave = TD();
      row.appendChild(testhave);


      if (!library.have) {
        library.have = '032119375x';
      }

      if (library.have) {
        testhave.appendChild(A({href: library.url(library.have)}, library.have));
        all_tests.push({lib: library, isbn: library.have, success: true, element: testhave});
      }

      var testdont = TD();
      row.appendChild(testdont);
      if (library.dont) {
        testdont.appendChild(A({href: library.url(library.dont)}, library.dont));
        all_tests.push({lib: library, isbn: library.dont, success: false, element: testdont});
      }

      recheck.onclick = function() {
        if (library.have) {
          check({lib: library, isbn: library.have, success: true, element: testhave});
        }
        if (library.dont) {
          check({lib: library, isbn: library.dont, success: false, element: testdont});
        }
      };


      $('table').append(row);
    });
});

function inc(id) {
  var node = document.getElementById(id);
  node.innerHTML = (parseInt(node.innerHTML) || 0) + 1;
}


function check(test, callback) {

  test.element.style.backgroundColor = '#ccc';

  function success(found) {

    if (test.success == found) {
      inc('pass');
      test.element.style.backgroundColor = '#cfc';
    }
    else {
      inc('fail');
      test.element.style.backgroundColor = '#fcc';
    }

    if (callback) callback();
  }

  function failure() {
    inc('timeout');
    test.element.style.backgroundColor = '#fd0';
    if (callback) callback();
  }

  test.lib.check(test.isbn, success, failure);
}

function testAll(num) {
  num = num || 0;

  if (num < all_tests.length) {
    check(all_tests[num], function() { testAll(num+1); });
  }
}
