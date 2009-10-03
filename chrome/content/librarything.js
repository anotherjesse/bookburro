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

