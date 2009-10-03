{
  name: 'bookmooch',
  title: 'Book Mooch',
  link: 'http://bookmooch.com/m/detail/#{ISBN}',
  query: 'http://bookmooch.com/api/moochable?asins=#{ISBN}',
  process: function(req, isbn) {
    if (req.responseText.toLowerCase().match(isbn.toLowerCase())) {
      return 'yes';
    } else {
      return '';
    }
  }
},

http://api.bookmooch.com/api/userbook?asins=1853260916&o=xml&target=wishlist&action=add
target can be 'inventory' or 'wishlist' or 'savelater'
action can be 'add' or 'del'

// asin must already exist - you can do amazon_add api call to add it