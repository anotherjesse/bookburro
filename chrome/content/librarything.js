{
  name: 'librarything',
  title: 'Library Thing',
  link: 'http://www.librarything.com/isbn/#{ISBN}',
  process: function(req, isbn) {
    if (req.responseText.match('No works found')) {
  	  return '';
    }
    return 'yes';
  }
},

// offical API is limited to 1000 calls per day?

* to add a book to your library:

  http://www.librarything.com/response_search_beta.php?form_find=0060557818&libraryChoice=&auto=1
  
    document.getElementsByTagName('h2')[0].textContent will return the most recently added item
  
    // You are not logged in. --- if you aren't logged in

