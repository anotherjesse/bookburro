{
  name: 'paperbackswap',
  title: 'PaperBackSwap',
  link: 'http://www.paperbackswap.com/book/details/#{ISBN}',
  query: 'http://www.paperbackswap.com/api/v1/index.php?RequestType=ISBNList&ISBN=#{ISBN}',
  process: function(req, isbn) {
    var result = req.responseXML.getElementsByTagName('Available');
    if ((result.length == 1) && (result[0].textContent.match('true'))) {
      return 'yes';
    }
    return '';
  }
},

// V1 API calls

// MemberWishList  	Returns a list of books on a Member's Wish List.  	
// Bookshelf 	Returns a list of books that a particular member has posted into the system. 	
// BooksRead 	Returns a list of books that a particular member as on their Books I've Read List. 	
// TBRPile 	Returns a list of books on a particular Member's TBR Pile. 	

// calls on site:

// document.cookie has the PHPSESSID

// posts:

// http://www.paperbackswap.com/scripts/add_to_tbr_pile.php?PHPSESSID=316fcc2b85dfce34f2d44064fc3cc058&isbn=9780439064873
// http://www.paperbackswap.com/scripts/add_to_reminder_list.php?PHPSESSID=316fcc2b85dfce34f2d44064fc3cc058&isbn=9780439064873
// http://www.paperbackswap.com/scripts/save_item_rating.php?PHPSESSID=316fcc2b85dfce34f2d44064fc3cc058&item_id=9780439064873&rating=8
// http://www.paperbackswap.com/scripts/save_item_rating.php?PHPSESSID=316fcc2b85dfce34f2d44064fc3cc058&item_id=9780439064873&rating=6
