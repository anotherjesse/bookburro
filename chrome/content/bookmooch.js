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
