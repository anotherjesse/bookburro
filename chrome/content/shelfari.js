{
  name: 'shelfari',
  title: 'Shelfari',
  link: 'http://www.shelfari.com/booksearch.aspx?Adv=True&SearchAmazon=False&Title=&Author=&Isbn=#{ISBN}',
  process: function(req, isbn) {
    if (req.responseText.match('We found 1 book matching')) {
  	  return 'yes';
    }
    return '';
  }
},

// so far their api looks like it is non-existant