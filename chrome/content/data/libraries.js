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

var libraries = [
{
name: 'us.il.chicago_public_library',
title: 'IL - Chicago Public Library',
link: 'http://www.chipublib.org/search/results?isbn=#{ISBN}&advancedSearch=submitted',
dont: '0967865204',
have: '0439136350',
missing: 'Your search did not produce any results'
},
{
name: 'us.ct.westport_public_library',
title: 'CT - Westport Public Library',
link: 'http://catalog.westportlibrary.org/ipac20/ipac.jsp?index=ISBNEX&term=#{ISBN}',
dont: '0967865204',
have: '0439136350',
missing: 'could not find anything matching'
},
{
name: 'us.oh.cuyahoga_county',
title: 'OH - Cuyahoga County',
link: 'https://sciron.cuyahoga.lib.oh.us/search/?searchtype=i&availlim=1&searcharg=#{ISBN}',
dont: '0321279670',
have: '0439136350',
missing: 'No available matches found'
},
{
name: 'us.tx.san_antonio_library_all',
title: 'TX - San Antonio Public Library - All',
link: 'http://sapl.sat.lib.tx.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=1',
dont: '0321279670',
have: '0941936562',
missing: 'No matches found'
},
{
name: 'us.or.coastal_resource_sharing_network_all',
title: 'OR - Coastal Resource Sharing Network',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALLSEARCH',
dont: '0967865204',
have: '0439136350',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_driftwood',
title: 'OR - Driftwood',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DRIFTWD',
dont: '0967865204',
have: '0439136350',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_newport',
title: 'OR - Newport',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NPSEARCH',
dont: '0967865204',
have: '0439136350',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_lincoln_county',
title: 'OR - Lincoln County',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LCLDSEARCH',
dont: '0967865204',
have: '067164436X',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_oregon_coast_cc',
title: 'OR - Oregon Coast CC',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OCCCSEARCH',
dont: '0967865204',
have: '0439786770',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_siletz',
title: 'OR - Siletz',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SZSEARCH',
dont: '0967865204',
have: '0439136350',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_toledo',
title: 'OR - Toledo',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TDSEARCH',
dont: '0967865204',
have: '0439136350',
missing: ' we couldn\'t find what you were looking for'
},
{
name: 'us.or.coastal_resource_sharing_network_waldport',
title: 'OR - Waldport',
link: 'http://www.beachbooks.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WPSEARCH',
dont: '0967865204',
have: '0439136350',
missing: ' we couldn\'t find what you were looking for'
},

{
name: 'us.va.fairfax_county_library_all',
title: 'VA - Fairfax County Library',
link: 'http://fcplcat.fairfaxcounty.gov/uhtbin/cgisirsi/x/0/0/5?user_id=GUEST&password=1111&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wa.tacoma_public_library',
title: 'WA - Tacoma Public Library',
link: 'http://topcat.tacomapubliclibrary.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name:'us.ut.salt_lake_city_libraries_all',
title: 'UT - Salt Lake City Libraries - All',
link: 'http://catalog.slcpl.org/search/?searchtype=i&searcharg=#{ISBN}',
have: '0545010225',
dont: '0767913469',
missing: 'No matches found'
},
{
name:'us.ut.salt_lake_county_libraries_all',
title: 'UT - Salt Lake County Libraries - All',
link: 'http://ipac.slco.lib.ut.us/ipac20/ipac.jsp?index=ISBNEX&term=#{ISBN}',
have: '0156012197',
dont: '0201558025',
missing: 'Sorry, could not find anything matching'
},
{
name: 'us.ks.lawrence_pub_library',
title: 'KS - Lawrence Public Library',
link: 'http://catalog.lawrence.lib.ks.us/search/i?SEARCH=#{ISBN}',
have: '0439786770',
dont: '0967865204',
missing: 'No matches found'
},
{
name: 'us.ks.topeka_pub_library',
title: 'KS - Topeka Public Library',
link: 'http://catalog.tscpl.org/ipac20/ipac.jsp?index=ISBNEX&term=#{ISBN}',
have: '0439786770',
dont: '0967865204',
missing: 'Sorry, could not find anything matching'
},
{
name: 'us.mo.kansas_city_libraries',
title: 'MO - Kansas City Libraries',
link: 'http://kcmo.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
have: '0439786770',
dont: '0967865204',
missing: 'found no matches'
},
{
name: 'us.oh.hamilton_county_all',
title: 'OH - Hamilton - ALL',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_east_branches',
title: 'OH - Hamilton - East Branches',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EAST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_main_and_central_branches',
title: 'OH - Hamilton - Main and Central Branches',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CENTRAL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_northeast_branches',
title: 'OH - Hamilton - Northeast Branches',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHEAST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_northwest_branches',
title: 'OH - Hamilton - Northwest Branches',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHWEST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_west_branches',
title: 'OH - Hamilton - West Branches',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WEST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_anderson',
title: 'OH - Hamilton - Anderson',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ANDERSON',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_avondale',
title: 'OH - Hamilton - Avondale',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=AVONDALE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_blue_ash',
title: 'OH - Hamilton - Blue Ash',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BLUE_ASH',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_bond_hill',
title: 'OH - Hamilton - Bond Hill',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BOND_HILL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_cheviot',
title: 'OH - Hamilton - Cheviot',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CHEVIOT',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_clifton',
title: 'OH - Hamilton - Clifton',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CLIFTON',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_college_hill',
title: 'OH - Hamilton - College Hill',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COLL_HILL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_corryville',
title: 'OH - Hamilton - Corryville',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CORRYVILLE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_covedale',
title: 'OH - Hamilton - Covedale',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COVEDALE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_deer_park',
title: 'OH - Hamilton - Deer Park',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DEER_PARK',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_delhi_township',
title: 'OH - Hamilton - Delhi Township',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DELHI_TWP',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_elmwood_place',
title: 'OH - Hamilton - Elmwood Place',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ELMWOOD_PL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_forest_park',
title: 'OH - Hamilton - Forest Park',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FOREST_PRK',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_green_township',
title: 'OH - Hamilton - Green Township',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GREEN_TWP',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_greenhills',
title: 'OH - Hamilton - Greenhills',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GRNHILLS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_groesbeck',
title: 'OH - Hamilton - Groesbeck',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GROESBECK',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_harrison',
title: 'OH - Hamilton - Harrison',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HARRISON',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_hyde_park',
title: 'OH - Hamilton - Hyde Park',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HYDE_PARK',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_loveland',
title: 'OH - Hamilton - Loveland',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LOVELAND',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_madeira',
title: 'OH - Hamilton - Madeira',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MADEIRA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_madisonville',
title: 'OH - Hamilton - Madisonville',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MDISONVLLE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_main_library',
title: 'OH - Hamilton - Main Library',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MAIN',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_mariemont',
title: 'OH - Hamilton - Mariemont',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MARIEMONT',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_miami_township',
title: 'OH - Hamilton - Miami Township',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MIAMI_TWP',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_monfort_heights',
title: 'OH - Hamilton - Monfort Heights',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MONFRT_HTS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_mt._healthy',
title: 'OH - Hamilton - Mt. Healthy',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MTHEALTHY',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_mt._washington',
title: 'OH - Hamilton - Mt. Washington',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MTWASHNGTN',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_north_central',
title: 'OH - Hamilton - North Central',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NRCENTRAL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_northside',
title: 'OH - Hamilton - Northside',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NRSIDE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_norwood',
title: 'OH - Hamilton - Norwood',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORWOOD',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_oakley',
title: 'OH - Hamilton - Oakley',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OAKLEY',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_pleasant_ridge',
title: 'OH - Hamilton - Pleasant Ridge',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PLSNT_RDGE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_price_hill',
title: 'OH - Hamilton - Price Hill',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PRICE_HILL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_reading',
title: 'OH - Hamilton - Reading',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=READING',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_roselawn',
title: 'OH - Hamilton - Roselawn',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ROSELAWN',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_sharonville',
title: 'OH - Hamilton - Sharonville',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SHARONVLLE',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_st._bernard',
title: 'OH - Hamilton - St. Bernard',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=STBERNARD',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_symmes_township',
title: 'OH - Hamilton - Symmes Township',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SYMMES_TWP',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_walnut_hills',
title: 'OH - Hamilton - Walnut Hills',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WALNUT_HLS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_west_end',
title: 'OH - Hamilton - West End',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WEST_END',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_westwood',
title: 'OH - Hamilton - Westwood',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WSTWOOD',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.oh.hamilton_county_wyoming',
title: 'OH - Hamilton - Wyoming',
link: 'http://catalog.cincinnatilibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WYOMING',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches',
},
{
name: 'us.wi.waukesha_county',
title: 'WI - Waukesha County',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_big_bend_library',
title: 'WI - Waukesha County - Big Bend',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BIGBEND^LIBR',
dont: '0967865204',
have: '0394839129',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_brookfield_public_library',
title: 'WI - Waukesha County - Brookfield',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BROOKFIELD^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_butler_public_library',
title: 'WI - Waukesha County - Butler',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BUTLER^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_delafield_public_library',
title: 'WI - Waukesha County - Delafield',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DELAFIELD^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_eagle_public_library',
title: 'WI - Waukesha County - Eagle',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EAGLE^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_elm_grove_public_library',
title: 'WI - Waukesha County - Elm Grove',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ELM_GROVE^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_hartland_public_library',
title: 'WI - Waukesha County - Hartland',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HARTLAND^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_mukwonago_public_library',
title: 'WI - Waukesha County - Mukwonago',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MUKWONAGO^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_muskego_public_library',
title: 'WI - Waukesha County - Muskego',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MUSKEGO^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_oconomowoc_public_library',
title: 'WI - Waukesha County - Oconomowoc',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OCONOMOWOC^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_pewaukee_public_library',
title: 'WI - Waukesha County - Pewaukee',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PEWAUKEE^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_sussex_public_library',
title: 'WI - Waukesha County - Sussex',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SUSSEX^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_merton_public_library',
title: 'WI - Waukesha County - Merton',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MERTON^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.wi.waukesha_county_waukesha_public_library',
title: 'WI - Waukesha County - Waukesha',
link: 'http://www.cafelibraries.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WAUKESHA^LIBR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},

{
name: 'us.ny.cuny_libraries',
title: 'NY - CUNY Union Catalog',
link: 'http://apps.appl.cuny.edu:83/F?func=scan&local_base=U-CUN01&scan_code=ISBN&scan_start=#{ISBN}',
dont: '1929862253',
have: '0814775845',
missing: 'would have appeared here'
},
{
name: 'us.ia.carnegie_stout_public_library',
title: 'IA - Carnegie-Stout Public Library',
link: 'http://hip.dubuque.lib.ia.us:8080/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}',
have: '068482793X',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ny.suffolk_county',
title: 'NY - Suffolk County',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=83',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_amityville',
title: 'NY - Suffolk County - Amityville',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=1',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_babylon',
title: 'NY - Suffolk County - Babylon',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=3',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_bayport_blue_point',
title: 'NY - Suffolk County - Bayport Blue Point',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=5',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_brentwood',
title: 'NY - Suffolk County - Brentwood',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=6',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_brookhaven',
title: 'NY - Suffolk County - Brookhaven',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=7',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_center_moriches',
title: 'NY - Suffolk County - Center Moriches',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=8',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_central_islip',
title: 'NY - Suffolk County - Central Islip',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=10',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_cold_spring_harbor',
title: 'NY - Suffolk County - Cold Spring Harbor',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=12',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_commack',
title: 'NY - Suffolk County - Commack',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=13',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_comsewogue',
title: 'NY - Suffolk County - Comsewogue',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=14',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_cutchogue',
title: 'NY - Suffolk County - Cutchogue',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=17',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_deer_park',
title: 'NY - Suffolk County - Deer Park',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=18',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_east_islip',
title: 'NY - Suffolk County - East Islip',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=20',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_east_hampton_library',
title: 'NY - Suffolk County - East Hampton Library',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=76',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_elwood',
title: 'NY - Suffolk County - Elwood',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=16',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_floyd_memorial',
title: 'NY - Suffolk County - Floyd Memorial',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=53',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_half_hollow_hills',
title: 'NY - Suffolk County - Half Hollow Hills',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=23',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_hampton_bays',
title: 'NY - Suffolk County - Hampton Bays',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=26',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_hampton_library',
title: 'NY - Suffolk County - Hampton Library',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=27',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_harborfields',
title: 'NY - Suffolk County - Harborfields',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=28',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_hauppauge',
title: 'NY - Suffolk County - Hauppauge',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=29',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_huntington',
title: 'NY - Suffolk County - Huntington',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=30',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_huntington_main',
title: 'NY - Suffolk County - Huntington-Main',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=31',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_huntington_station',
title: 'NY - Suffolk County - Huntington-Station',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=32',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_islip',
title: 'NY - Suffolk County - Islip',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=33',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_john_jermain',
title: 'NY - Suffolk County - John Jermain',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=34',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_lindenhurst',
title: 'NY - Suffolk County - Lindenhurst',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=35',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_longwood',
title: 'NY - Suffolk County - Longwood',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=36',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_mastics_moriches_shirley',
title: 'NY - Suffolk County - Mastics-Moriches-Shirley',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=37',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_mattituck_laurel',
title: 'NY - Suffolk County - Mattituck-Laurel',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=78',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_montauk',
title: 'NY - Suffolk County - Montauk',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=39',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_north_babylon',
title: 'NY - Suffolk County - North Babylon',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=40',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_north_shore',
title: 'NY - Suffolk County - North Shore',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=41',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_northport_e_northport',
title: 'NY - Suffolk County - Northport-E Northport',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=43',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_patchogue_medford',
title: 'NY - Suffolk County - Patchogue-Medford',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=46',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_port_jefferson',
title: 'NY - Suffolk County - Port Jefferson',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=50',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_quogue',
title: 'NY - Suffolk County - Quogue',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=79',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_riverhead',
title: 'NY - Suffolk County - Riverhead',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=52',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_rogers_memorial',
title: 'NY - Suffolk County - Rogers Memorial',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=80',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_sachem',
title: 'NY - Suffolk County - Sachem',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=54',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_sayville',
title: 'NY - Suffolk County - Sayville',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=58',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_shelter_island_library',
title: 'NY - Suffolk County - Shelter Island Library',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=82',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_smithtown',
title: 'NY - Suffolk County - Smithtown',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=62',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_south_country',
title: 'NY - Suffolk County - South Country',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=64',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_south_huntington',
title: 'NY - Suffolk County - South Huntington',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=65',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_southold',
title: 'NY - Suffolk County - Southold',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=66',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_west_babylon',
title: 'NY - Suffolk County - West Babylon',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=67',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_west_islip',
title: 'NY - Suffolk County - West Islip',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=70',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_westhampton',
title: 'NY - Suffolk County - Westhampton',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=71',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.suffolk_county_wyandanch',
title: 'NY - Suffolk County - Wyandanch',
link: 'http://alpha2.suffolk.lib.ny.us/search/?searchtype=i&searcharg=#{ISBN}&searchscope=72',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ak.fairbanks_north_star_borough',
title: 'AK - Fairbanks North Star Borough',
link: 'http://catalog.fnsb.lib.ak.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.fl.miami_dade_county_public_library',
title: 'FL - Miami-Dade County',
link: 'http://webcatalog.mdpls.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_central',
title: 'CA - Sonoma County Library - Central',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=cent',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_cloverdale',
title: 'CA - Sonoma County Library - Cloverdale',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=clov',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_coast_community',
title: 'CA - Sonoma County Library - Coast Community',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=coas',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_forestville',
title: 'CA - Sonoma County Library - Forestville',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=fore',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_fort_bragg',
title: 'CA - Sonoma County Library - Fort Bragg',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=fort',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_guerneville',
title: 'CA - Sonoma County Library - Guerneville',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=guer',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_healdsburg',
title: 'CA - Sonoma County Library - Healdsburg',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=heal',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_lakeport',
title: 'CA - Sonoma County Library - Lakeport',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=lake',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_mendocino_bookmobile',
title: 'CA - Sonoma County Library - Mendocino Bookmobile',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=mbkm',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_middletown',
title: 'CA - Sonoma County Library - Middletown',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=midd',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_northwest',
title: 'CA - Sonoma County Library - Northwest',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=nort',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_occidental',
title: 'CA - Sonoma County Library - Occidental',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=occi',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_petaluma',
title: 'CA - Sonoma County Library - Petaluma',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=peta',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_redbud',
title: 'CA - Sonoma County Library - Redbud',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=redb',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_rincon_valley',
title: 'CA - Sonoma County Library - Rincon Valley',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=rinc',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_rohnert_park',
title: 'CA - Sonoma County Library - Rohnert Park',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=rohn',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_sebastopol',
title: 'CA - Sonoma County Library - Sebastopol',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=seba',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_sonoma',
title: 'CA - Sonoma County Library - Sonoma',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=sono',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_ukiah',
title: 'CA - Sonoma County Library - Ukiah',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=ukia',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_upper_lake',
title: 'CA - Sonoma County Library - Upper Lake',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=uppe',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_willits',
title: 'CA - Sonoma County Library - Willits',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=will',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_windsor',
title: 'CA - Sonoma County Library - Windsor',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&LO01=wind',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},
{
name: 'us.ca.sonoma_county_library_wine_library',
title: 'CA - Sonoma County Library - Wine',
link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}&CO01=co_wl',
have: '0545010225',
dont: '0967865204',
missing: 'could not find anything matching'
},

{
name: 'us.ca.los_angeles_public_library_alma_reaves_woods_watts_branch',
title: 'CA - Los Angeles Public Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_alma_reaves_woods_watts_branch',
title: 'CA - LA Public - Alma Reaves Woods Watts Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WATTSL',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_angeles_mesa_branch',
title: 'CA - LA Public - Angeles Mesa Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=ANGMSA',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_arroyo_seco_regional_branch',
title: 'CA - LA Public - Arroyo Seco Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=AYOSCO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_ascot_branch',
title: 'CA - LA Public - Ascot Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=ASCOTT',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_atwater_village_branch',
title: 'CA - LA Public - Atwater Village Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=ATWATR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_baldwin_hills_branch',
title: 'CA - LA Public - Baldwin Hills Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=BLDHLS',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_benjamin_franklin_branch',
title: 'CA - LA Public - Benjamin Franklin Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=BNFRNK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_cahuenga_branch',
title: 'CA - LA Public - Cahuenga Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=CAHUNG',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_canoga_park_branch',
title: 'CA - LA Public - Canoga Park Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=CNGOPK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_chatsworth_branch',
title: 'CA - LA Public - Chatsworth Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=CTSWRT',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_chinatown_branch',
title: 'CA - LA Public - Chinatown Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=CWTOWN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_cypress_park_branch',
title: 'CA - LA Public - Cypress Park Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=CYPPRK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_donald_bruce_kaufman_brentwood_branch',
title: 'CA - LA Public - Donald Bruce Kaufman Brentwood Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=BRNTWD',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_eagle_rock_branch',
title: 'CA - LA Public - Eagle Rock Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=EAGLRK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_echo_park_branch',
title: 'CA - LA Public - Echo Park Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=ECHOPK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_edendale_branch_library',
title: 'CA - LA Public - Edendale Branch Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=EDEN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_el_sereno_branch',
title: 'CA - LA Public - El Sereno Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=ELSRNO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_encino-tarzana_branch',
title: 'CA - LA Public - Encino-Tarzana Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=ENCTAR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_exposition_park_bethune_regional_branch',
title: 'CA - LA Public - Exposition Park Bethune Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=EXPOPK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_fairfax_branch',
title: 'CA - LA Public - Fairfax Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=FAIRFX',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_felipe_de_neve_branch',
title: 'CA - LA Public - Felipe De Neve Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=FELIPE',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_goldwyn_hollywood_regional_branch',
title: 'CA - LA Public - Goldwyn Hollywood Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=HOLYWD',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_granada_hills_branch',
title: 'CA - LA Public - Granada Hills Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=GRNHLS',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_harbor_city_-_harbor_gateway_branch',
title: 'CA - LA Public - Harbor City - Harbor Gateway Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=HARBOR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_hyde_park_-_miriam_matthews_branch',
title: 'CA - LA Public - Hyde Park - Miriam Matthews Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=HYDEPK',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_jefferson_branch',
title: 'CA - LA Public - Jefferson Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=JFRSON',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_john_c._fremont_branch',
title: 'CA - LA Public - John C. Fremont Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=JCFRMT',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_john_muir_branch',
title: 'CA - LA Public - John Muir Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=JNMUIR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_junipero_serra_branch',
title: 'CA - LA Public - Junipero Serra Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=JSERRA',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_lake_view_terrace_branch',
title: 'CA - LA Public - Lake View Terrace Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=LKVIEW',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_lincoln_heights_branch',
title: 'CA - LA Public - Lincoln Heights Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=LCNHTS',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_little_tokyo_branch',
title: 'CA - LA Public - Little Tokyo Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=LTOKYO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_los_feliz_branch',
title: 'CA - LA Public - Los Feliz Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=LFELIZ',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_malabar_branch',
title: 'CA - LA Public - Malabar Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=MLABAR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_mar_vista_branch',
title: 'CA - LA Public - Mar Vista Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=MRVSTA',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_mark_twain_branch',
title: 'CA - LA Public - Mark Twain Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=MTWAIN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_memorial_branch',
title: 'CA - LA Public - Memorial Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=MMRIAL',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_mid_valley_regional_branch',
title: 'CA - LA Public - Mid Valley Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=MIDVAL',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_north_hollywood_regional_branch',
title: 'CA - LA Public - North Hollywood Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=NOHLWD',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_northridge_branch',
title: 'CA - LA Public - Northridge Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=NRTHRG',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_pacoima_branch',
title: 'CA - LA Public - Pacoima Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PCOIMA',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_palisades_branch',
title: 'CA - LA Public - Palisades Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PALSDS',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_palms-rancho_park_branch',
title: 'CA - LA Public - Palms-Rancho Park Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PRNCHO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_panorama_city_branch',
title: 'CA - LA Public - Panorama City Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PNORAM',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_pico_union_branch_library',
title: 'CA - LA Public - Pico Union Branch Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PUNION',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_pio_pico_koreatown_branch',
title: 'CA - LA Public - Pio Pico Koreatown Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PIOKOR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_platt_branch',
title: 'CA - LA Public - Platt Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PLATT',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_playa_vista_branch_library',
title: 'CA - LA Public - Playa Vista Branch Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PVISTA',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_porter_ranch_branch',
title: 'CA - LA Public - Porter Ranch Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=PTRRAN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_r.l._stevenson_branch',
title: 'CA - LA Public - R.L. Stevenson Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=RLSTVN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_robertson_branch',
title: 'CA - LA Public - Robertson Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=RBRTSN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_san_pedro_regional_branch',
title: 'CA - LA Public - San Pedro Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=SPEDRO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_sherman_oaks_branch_library',
title: 'CA - LA Public - Sherman Oaks Branch Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=SHRMNO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_silver_lake_branch_library',
title: 'CA - LA Public - Silver Lake Branch Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=SILVER',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_studio_city_branch',
title: 'CA - LA Public - Studio City Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=STUDIO',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_sun_valley_branch',
title: 'CA - LA Public - Sun Valley Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=SUNVAL',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_sunland-tujunga_branch',
title: 'CA - LA Public - Sunland-Tujunga Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=SNLNDT',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_sylmar_branch_library',
title: 'CA - LA Public - Sylmar Branch Library',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=SYLMAR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_valley_plaza_branch',
title: 'CA - LA Public - Valley Plaza Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=VALPLZ',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_van_nuys_branch',
title: 'CA - LA Public - Van Nuys Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=VNNUYS',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_venice_abbot_kinney_memorial_branch',
title: 'CA - LA Public - Venice Abbot Kinney Memorial Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=VENICE',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_vermont_square_branch',
title: 'CA - LA Public - Vermont Square Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=VMTSQR',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_vernon_branch',
title: 'CA - LA Public - Vernon Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=VRNONL',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_washington_irving_branch',
title: 'CA - LA Public - Washington Irving Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WIRVNG',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_west_los_angeles_regional_branch',
title: 'CA - LA Public - West Los Angeles Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WESTLA',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_west_valley_regional_branch',
title: 'CA - LA Public - West Valley Regional Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WVALLY',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_westchester-loyola_village',
title: 'CA - LA Public - Westchester-Loyola Village',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WSTCHS',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_westwood_branch',
title: 'CA - LA Public - Westwood Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WWOOD',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_will_&_ariel_durant_branch',
title: 'CA - LA Public - Will & Ariel Durant Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=DURANT',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_wilmington_branch',
title: 'CA - LA Public - Wilmington Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WMNGTN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_wilshire_branch',
title: 'CA - LA Public - Wilshire Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WLSHRE',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},
{
name: 'us.ca.los_angeles_public_library_woodland_hills_branch',
title: 'CA - LA Public - Woodland Hills Branch',
link: 'http://catalog.lapl.org/carlweb/jsp/DoSearch?databaseID=965&index=I&terms=#{ISBN}&bralimit=WOODLN',
dont: '0967865204',
have: '0439136350',
missing: 'nohits.jsp',
},

{
name: 'us.ga.cobb_county_library_all',
title: 'GA - Cobb County Library - ALL',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_marietta_area_libraries',
title: 'GA - Cobb County Library - Marietta Area Libraries',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MARIETTA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_northeast_cobb_county_libraries',
title: 'GA - Cobb County Library - Northeast Cobb County Libraries',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHEAST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_northwest_cobb_county_libraries',
title: 'GA - Cobb County Library - Northwest Cobb County Libraries',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHWEST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_south_cobb_county_libraries',
title: 'GA - Cobb County Library - South Cobb County Libraries',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOUTH',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_southeast_cobb_county_libraries',
title: 'GA - Cobb County Library - Southeast Cobb County Libraries',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOUTHEAST',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_acworth_library',
title: 'GA - Cobb County Library - Acworth Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ACWORTH',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_acworth_library',
title: 'GA - Cobb County Library - Central Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CENTRAL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_east_marietta_library',
title: 'GA - Cobb County Library - East Marietta Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EASTMTTA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_gritters_library',
title: 'GA - Cobb County Library - Gritters Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GRITTERS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_hattie_g_wilson_library',
title: 'GA - Cobb County Library - Hattie G. Wilson Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HGWILSON',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_kemp_memorial_library',
title: 'GA - Cobb County Library - Kemp Memorial Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KEMP',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_kennesaw_library',
title: 'GA - Cobb County Library - Kennesaw Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KENNESAW',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_lewis_a_ray_library',
title: 'GA - Cobb County Library - Lewis A. Ray Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LARAY',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_merchants_walk_library',
title: 'GA - Cobb County Library - Merchants Walk Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MERCHANTS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_mountain_view_regional_library',
title: 'GA - Cobb County Library - Mountain View Regional Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MTNVIEW',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_powder_springs_library',
title: 'GA - Cobb County Library - Powder Springs Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=POWSPRINGS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_sibley_library',
title: 'GA - Cobb County Library - Sibley Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SIBLEY',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_south_cobb_regional_library',
title: 'GA - Cobb County Library - South Cobb Regional Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOUTHCOBB',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_stratton_library',
title: 'GA - Cobb County Library - Stratton Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=STRATTON',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_sweetwater_valley_library',
title: 'GA - Cobb County Library - Sweetwater Valley Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SWEETWATER',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_system_reserves',
title: 'GA - Cobb County Library - System Reserves',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RESERVES',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_vinings_library',
title: 'GA - Cobb County Library - Vinings Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=VININGS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ga.cobb_county_library_west_cobb_regional_library',
title: 'GA - Cobb County Library - West Cobb Regional Library',
link: 'http://cbpl.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WESTCOBB',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'de.de-ni.bibliothek_der_fachhochschule_hannover',
title: 'DE - Bibliothek der Fachhochschule Hannover',
link: 'http://opac.tib.uni-hannover.de/DB=4/SET=1/TTL=1/CLK?IKT=1007&TRM=#{ISBN}',
have: '3800635240',
dont: '0967865204',
missing: 'Sie einen Suchbegriff und klicken Sie auf <strong>absenden</strong>, oder klicken Sie direkt auf einen Suchbegriff'
},
{
name: 'us.ny.ithaca_college_library',
title: 'NY - Ithaca College Library',
link: 'http://icarus.ithaca.edu/cgi-bin/Pwebrecon.cgi?SAB1=#{ISBN}&FLD1=ISBN+%28ISBN%29&CNT=10&HIST=1',
dont: '0151012237',
have: '0439136350',
missing: 'Your search resulted in no hits'
},
{
name: 'us.wa.olympic_college',
title: 'WA - Olympic College',
link: 'http://olympic.library.ctc.edu/vwebv/search?searchArg1=#{ISBN}&argType1=any&searchCode1=ISBN&searchType=2',
have: '067976402X',
dont: '0967865204',
missing: 'Search resulted in no hits'
},
{
name: 'us.mn.dakota_county_library',
title: 'MN - Dakota County Library',
link: 'http://ipac.dakota.lib.mn.us/ipac20/ipac.jsp?&profile=ctw&index=ISBNEX&term=#{ISBN}',
have: '0394839129',
dont: '0967865204',
missing: 'Sorry, could not find anything matching'
},
{
name: 'us.or.multnomah_county_library',
title: 'OR - Multnomah County Library',
link: 'http://catalog.multcolib.org/search/i?SEARCH=#{ISBN}',
have: '0881929506',
dont: '0967865204',
missing: 'No matches found'
},
{
name: 'us.nc.charlotte_mecklenburg_library',
title: 'NC - Charlotte Mecklenburg Library',
link: 'http://catalog.plcmc.org/accessible.ashx?q=isbn%3A#{ISBN}&cmd=find',
dont: '0967865204',
have: '0439136350',
missing: 'No results found'
},
{
name: 'us.ca.san_diego_public_all',
title: 'San Diego Public - ALL',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_allied_gardens/benjamin',
title: 'San Diego Public - Allied Gardens/Benjamin',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALLIEDG_BJ',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_balboa',
title: 'San Diego Public - Balboa',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BALBOA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_carmel_mountain_ranch',
title: 'San Diego Public - Carmel Mountain Ranch',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CARMEL_MTN',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_carmel_valley',
title: 'San Diego Public - Carmel Valley',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CARMEL_VLY',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_central_library',
title: 'San Diego Public - Central Library',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CENTRAL',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_city_heights/weingart',
title: 'San Diego Public - City Heights/Weingart',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CITY_HTS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_clairemont',
title: 'San Diego Public - Clairemont',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CLAIREMONT',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_college_rolando',
title: 'San Diego Public - College-Rolando',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COLL-RNDO',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_kensington_normal_heights',
title: 'San Diego Public - Kensington-Normal Heights',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KEN-NH',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_la_jolla/riford',
title: 'San Diego Public - La Jolla/Riford',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LA_JOLLA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_linda_vista',
title: 'San Diego Public - Linda Vista',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LINDA_VSTA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_logan_heights',
title: 'San Diego Public - Logan Heights',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LOGAN_HTS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_mira_mesa',
title: 'San Diego Public - Mira Mesa',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MIRA_MESA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_mission_hills',
title: 'San Diego Public - Mission Hills',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MISN_HILLS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_mission_valley',
title: 'San Diego Public - Mission Valley',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MISSN_VLY',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_mountain_view/beckwourth',
title: 'San Diego Public - Mountain View/Beckwourth',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MTN_VW_BW',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_north_clairemont',
title: 'San Diego Public - North Clairemont',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=N_CLARMONT',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_north_park',
title: 'San Diego Public - North Park',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=N_PARK',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_north_university_community',
title: 'San Diego Public - North University Community',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=N_UNIV_COM',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_oak_park',
title: 'San Diego Public - Oak Park',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OAK_PARK',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_ocean_beach',
title: 'San Diego Public - Ocean Beach',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OCEAN_B',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_otay_mesa_nestor',
title: 'San Diego Public - Otay Mesa-Nestor',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OTAYNESTOR',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_pacific_beach/taylor',
title: 'San Diego Public - Pacific Beach/Taylor',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PACIFIC_B',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_paradise_hills',
title: 'San Diego Public - Paradise Hills',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PAR_HILLS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_point_loma/hervey',
title: 'San Diego Public - Point Loma/Hervey',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PT_LOMA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_rancho_bernardo',
title: 'San Diego Public - Rancho Bernardo',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RCHO_BRNDO',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_rancho_penasquitos',
title: 'San Diego Public - Rancho Penasquitos',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RCHO_PQ',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_san_carlos',
title: 'San Diego Public - San Carlos',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SAN_CARLOS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_san_diego_public_library',
title: 'San Diego Public - San Diego Public Library',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SDPL',
dont: '0967865204',
have: '0439786770',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_san_ysidro',
title: 'San Diego Public - San Ysidro',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SAN_YSIDRO',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_scripps_miramar_ranch',
title: 'San Diego Public - Scripps Miramar Ranch',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SCRIPPSRCH',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_serra_mesa_kearny_mesa',
title: 'San Diego Public - Serra Mesa-Kearny Mesa',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SM-KMESA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_skyline_hills',
title: 'San Diego Public - Skyline Hills',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SKYL_HILLS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_tierrasanta',
title: 'San Diego Public - Tierrasanta',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TIERRASNTA',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_university_community',
title: 'San Diego Public - University Community',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=UNIV_COM',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},
{
name: 'us.ca.san_diego_public_university_heights',
title: 'San Diego Public - University Heights',
link: 'https://sddp.sirsi.net/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=UNIV_HTS',
dont: '0967865204',
have: '0439136350',
missing: 'found no matches'
},

{
     name: 'us.az.cottonwood_public_library',
     title: 'AZ - Cottonwood Public Library',
     link: 'http://ylnpac.yln.info:8080/ipac20/ipac.jsp?&profile=ctw&index=ISBN&term=#{ISBN}',
     have: '0394839129',
     dont: '0967865204',
     missing: 'Sorry, could not find anything matching'
},
{
	name:'us.tx.austin_public_library_history_center',
	title: 'TX - Austin - History Center',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HC',
	dont: '0967865204',
	have: '058527889X',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_carver_branch',
	title: 'TX - Austin - Carver Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CB',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_cepeda_branch',
	title: 'TX - Austin - Cepeda Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CP',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_faulk_central_library',
	title: 'TX - Austin - Faulk Central Library',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CE',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_little_walnut_creek_branch',
	title: 'TX - Austin - Little Walnut Creek Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LW',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_manchaca_road_branch',
	title: 'TX - Austin - Manchaca Road Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MR',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_milwood_branch',
	title: 'TX - Austin - Milwood Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MI',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_north_village_branch',
	title: 'TX - Austin - North Village Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NV',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_oak_springs_branch',
	title: 'TX - Austin - Oak Springs Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OS',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_old_quarry_branch',
	title: 'TX - Austin - Old Quarry Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OQ',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_pleasant_hill_branch',
	title: 'TX - Austin - Pleasant Hill Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PH',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_ruiz_branch',
	title: 'TX - Austin - Ruiz Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RZ',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_southeast_austin_community_branch',
	title: 'TX - Austin - SE Austin Community Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SE',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_spicewood_springs_branch',
	title: 'TX - Austin - Spicewood Springs Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SR',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_st_john_branch',
	title: 'TX - Austin - St. John Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SJ',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_terrazas_branch',
	title: 'TX - Austin - Terrazas Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TB',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_twin_oaks_branch',
	title: 'TX - Austin - Twin Oaks Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TO',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_university_hills_branch',
	title: 'TX - Austin - University Hills Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=UH',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_windsor_park_branch',
	title: 'TX - Austin - Windsor Park Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WP',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_yarborough_branch',
	title: 'TX - Austin - Yarborough Branch',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=YB',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_central_austin_branches',
	title: 'TX - Austin - Central Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CENTRAL',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_east_austin_branches',
	title: 'TX - Austin - East Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EAST',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_north_austin_branches',
	title: 'TX - Austin - North Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTH',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_northeast_austin_branches',
	title: 'TX - Austin - Northeast Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHEAST',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_northwest_austin_branches',
	title: 'TX - Austin - Northwest Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHWEST',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_south_austin_branches',
	title: 'TX - Austin - South Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOUTH',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_southeast_austin_branches',
	title: 'TX - Austin - Southeast Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOUTHEAST',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_southwest_austin_branches',
	title: 'TX - Austin - Southwest Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOUTHWEST',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library_west_austin_branches',
	title: 'TX - Austin - West Austin Branches',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WEST',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},
{
	name:'us.tx.austin_public_library',
	title: 'TX - Austin Public Library',
	link: 'https://www.ci.austin.tx.us/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
	dont: '0967865204',
	have: '0590353403',
	missing: 'found no matches'
},

{
     name: 'us.mo.municipal_library_consortium_of_st_louis',
     title: 'St. L Muni Lib Consortium',
     link: 'http://catalog.mlc.lib.mo.us/ipac20/ipac.jsp?profile=uc&index=ISBNEX&term=#{ISBN}',
     have: '0394839129',
     dont: '0967865204',
     missing: 'Sorry, could not find anything matching'
},
{
     name: 'us.mo.st_louis_county_library',
     title: 'St. Louis County Library',
     link: 'http://webpac.slcl.org/search/i=#{ISBN}&searchscope=32',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found;'
},
{
     name: 'us.mo.washington_university_in_st_louis',
     title: 'Washington University in St. L',
     link: 'http://catalog.wustl.edu/search~S2/?searchtype=i&searcharg=#{ISBN}',
     have: '0262031418',
     dont: '0967865204',
     missing: 'No matches found;'
},
{
     name: 'us.mo.university_of_missouri_st_louis',
     title: 'University of Missouri, St. L',
     link: 'http://laurel.lso.missouri.edu/search~S6/?searchtype=i&searcharg=#{ISBN}&searchscope=6',
     have: '0262031418',
     dont: '0967865204',
     missing: 'No matches found;'
},
{
     name: 'us.mo.st_louis_community_colleges_entire_collection',
     title: 'St. L Community Colleges',
     link: 'http://archway.missouri.edu/search~/Y?searchtype=i&searcharg=#{ISBN}&searchscope=12',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found;'
},
{
     name: 'us.mo.university_of_missouri_libraries_all_merlin',
     title: 'University of Missouri - All',
     link: 'http://laurel.lso.missouri.edu/search~S8/?searchtype=i&searcharg=#{ISBN}&searchscope=8',
     have: '0262031418',
     dont: '0967865204',
     missing: 'No matches found;'
},
{
     name: 'us.mo.St_louis_university_libraries',
     title: 'St. Louis University',
     link: 'http://libcat.slu.edu/search~S5/?searchtype=i&searcharg=#{ISBN}+&searchscope=5',
     have: '0262031418',
     dont: '0967865204',
     missing: 'No matches found;'
},
{
	name:'us.ca.glendale_public_library',
	title: 'CA - Glendale Public Library',
	link: 'http://catalog.glendalepubliclibrary.org/ipac20/ipac.jsp?menu=search&term=#{ISBN}&index=ISBNEX',
	dont: '0967865204',
	have: '1569245134',
	missing: 'Sorry, could not find anything matching'
},
{
	name:'us.ca.pasadena_public_library',
	title: 'CA - Pasadena Public Library',
	link: 'http://catalog.pasadenapubliclibrary.net/ipac20/ipac.jsp?menu=search&term=#{ISBN}&index=ISBNEX',
	dont: '0967865204',
	have: '1569245134',
	missing: 'Sorry, could not find anything matching'
},
{
	name:'us.ks.johnson_county_library',
	title: 'KS - Johnson County Library',
	link: 'http://ibistro3.jocolibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
	dont: '0967865204',
	have: '0312851820',
	missing: 'found no matches'
},
{
	name:'us.va.prince_william_public_library_system',
	title: 'VA - Prince William Public Library System',
	link: 'http://librarycatalog.pwcgov.org/ipac20/ipac.jsp?menu=search&term=#{ISBN}&index=ISBNEX',
	dont: '0967865204',
	have: '1569245134',
	missing: 'Sorry, could not find anything matching'
},
{
name:'us.il.chicago_all_swan_libraries',
title: 'IL - Chicago All SWAN Libraries',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=1',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_acorn',
title: 'IL - Chicago Acorn',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=2',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_acorn_juvenile',
title: 'IL - Chicago Acorn Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=3',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_alsip_merrionette_park',
title: 'IL - Chicago Alsip-Merrionette Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=4',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_alsip_merrionette_park_juvenile',
title: 'IL - Chicago Alsip-Merrionette Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=5',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_bedford_park',
title: 'IL - Chicago Bedford Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=8',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_bedford_park_juvenile',
title: 'IL - Chicago Bedford Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=9',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_beecher',
title: 'IL - Chicago Beecher',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=10',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_beecher_juvenile',
title: 'IL - Chicago Beecher Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=11',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_bellwood',
title: 'IL - Chicago Bellwood',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=12',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_bellwood_juvenile',
title: 'IL - Chicago Bellwood Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=13',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_berkeley',
title: 'IL - Chicago Berkeley',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=14',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_berkeley_juvenile',
title: 'IL - Chicago Berkeley Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=15',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_berwyn',
title: 'IL - Chicago Berwyn',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=16',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_berwyn_juvenile',
title: 'IL - Chicago Berwyn Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=17',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_blue_island',
title: 'IL - Chicago Blue Island',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=18',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_blue_island_juvenile',
title: 'IL - Chicago Blue Island Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=19',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_bridgeview',
title: 'IL - Chicago Bridgeview',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=110',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_bridgeview_juvenile',
title: 'IL - Chicago Bridgeview Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=120',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_broadview',
title: 'IL - Chicago Broadview',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=20',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_broadview_juvenile',
title: 'IL - Chicago Broadview Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=21',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_brookfieldpl',
title: 'IL - Chicago BrookfieldPL',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=89',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_brookfieldpl_juvenile',
title: 'IL - Chicago BrookfieldPL Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=90',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_brookfield_zoo',
title: 'IL - Chicago Brookfield Zoo',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=22',
dont: '0967865204',
have: '0394831284',
missing: 'No matches found'
},
{
name:'us.il.chicago_brookfield_zoo_education',
title: 'IL - Chicago Brookfield Zoo Education',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=23',
dont: '0967865204',
have: '043940875X',
missing: 'No matches found'
},
{
name:'us.il.chicago_calumet_city',
title: 'IL - Chicago Calumet City',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=24',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_calumet_city_juvenile',
title: 'IL - Chicago Calumet City Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=25',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_calumet_park',
title: 'IL - Chicago Calumet Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=26',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_calumet_park_juvenile',
title: 'IL - Chicago Calumet Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=27',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_chicago_heights',
title: 'IL - Chicago Chicago Heights',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=28',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_chicago_heights_juvenile',
title: 'IL - Chicago Chicago Heights Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=29',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_chicago_ridge',
title: 'IL - Chicago Chicago Ridge',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=30',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_chicago_ridge_juvenile',
title: 'IL - Chicago Chicago Ridge Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=31',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_cicero',
title: 'IL - Chicago Cicero',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=32',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_cicero_branch',
title: 'IL - Chicago Cicero Branch',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=34',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_cicero_branch_juvenile',
title: 'IL - Chicago Cicero Branch Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=35',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_cicero_juvenile',
title: 'IL - Chicago Cicero Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=33',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_clarendon_hills',
title: 'IL - Chicago Clarendon Hills',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=36',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_clarendon_hills_juvenile',
title: 'IL - Chicago Clarendon Hills Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=37',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_crestwood',
title: 'IL - Chicago Crestwood',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=38',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_crestwood_juvenile',
title: 'IL - Chicago Crestwood Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=39',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_crete',
title: 'IL - Chicago Crete',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=40',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_crete_juvenile',
title: 'IL - Chicago Crete Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=41',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_dolton',
title: 'IL - Chicago Dolton',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=42',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_dolton_juvenile',
title: 'IL - Chicago Dolton Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=43',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_downers_grove',
title: 'IL - Chicago Downers Grove',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=44',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_downers_grove_juvenile',
title: 'IL - Chicago Downers Grove Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=45',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_eisenhower',
title: 'IL - Chicago Eisenhower',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=46',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_eisenhower_juvenile',
title: 'IL - Chicago Eisenhower Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=47',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_elmhurst',
title: 'IL - Chicago Elmhurst',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=48',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_elmhurst_juvenile',
title: 'IL - Chicago Elmhurst Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=49',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_elmwood_park',
title: 'IL - Chicago Elmwood Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=50',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_elmwood_park_juvenile',
title: 'IL - Chicago Elmwood Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=51',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_evergreen_park',
title: 'IL - Chicago Evergreen Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=52',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_evergreen_park_juvenile',
title: 'IL - Chicago Evergreen Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=53',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_flossmoor',
title: 'IL - Chicago Flossmoor',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=54',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_flossmoor_juvenile',
title: 'IL - Chicago Flossmoor Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=55',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_forest_park',
title: 'IL - Chicago Forest Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=56',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_forest_park_juvenile',
title: 'IL - Chicago Forest Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=57',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_frankfort',
title: 'IL - Chicago Frankfort',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=58',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_frankfort_bookmobile',
title: 'IL - Chicago Frankfort Bookmobile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=60',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_frankfort_juvenile',
title: 'IL - Chicago Frankfort Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=59',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_glenwood_lynwood',
title: 'IL - Chicago Glenwood-Lynwood',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=61',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_glenwood_lynwood_juvenile',
title: 'IL - Chicago Glenwood-Lynwood Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=62',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_glenwood_bookmobile',
title: 'IL - Chicago Glenwood Bookmobile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=161',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_grande_prairie',
title: 'IL - Chicago Grande Prairie',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=63',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_grande_prairie_juvenile',
title: 'IL - Chicago Grande Prairie Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=64',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_harvey',
title: 'IL - Chicago Harvey',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=65',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_harvey_juvenile',
title: 'IL - Chicago Harvey Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=66',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_hillside',
title: 'IL - Chicago Hillside',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=67',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_hillside_juvenile',
title: 'IL - Chicago Hillside Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=68',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_hinsdale',
title: 'IL - Chicago Hinsdale',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=69',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_hinsdale_juvenile',
title: 'IL - Chicago Hinsdale Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=70',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_hodgkins',
title: 'IL - Chicago Hodgkins',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=71',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_hodgkins_juvenile',
title: 'IL - Chicago Hodgkins Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=72',
dont: '0967865204',
have: '0394839129',
missing: 'No matches found'
},
{
name:'us.il.chicago_homewood',
title: 'IL - Chicago Homewood',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=73',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_homewood_juvenile',
title: 'IL - Chicago Homewood Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=74',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_indian_prairie',
title: 'IL - Chicago Indian Prairie',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=75',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_indian_prairie_juvenile',
title: 'IL - Chicago Indian Prairie Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=76',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_justice',
title: 'IL - Chicago Justice',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=77',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_justice_juvenile',
title: 'IL - Chicago Justice Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=78',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_la_grange',
title: 'IL - Chicago La Grange',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=79',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_la_grange_juvenile',
title: 'IL - Chicago La Grange Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=80',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_la_grange_park',
title: 'IL - Chicago La Grange Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=81',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_la_grange_park_juvenile',
title: 'IL - Chicago La Grange Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=82',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_lyons',
title: 'IL - Chicago Lyons',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=83',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_lyons_juvenile',
title: 'IL - Chicago Lyons Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=84',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_matteson',
title: 'IL - Chicago Matteson',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=85',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_matteson_juvenile',
title: 'IL - Chicago Matteson Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=86',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_maywood',
title: 'IL - Chicago Maywood',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=87',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_maywood_juvenile',
title: 'IL - Chicago Maywood Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=88',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_markham',
title: 'IL - Chicago Markham',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=6',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_markham_bookmobile',
title: 'IL - Chicago Markham Bookmobile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=7',
dont: '0967865204',
have: '0590058967',
missing: 'No matches found'
},
{
name:'us.il.chicago_mcconathy',
title: 'IL - Chicago McConathy',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=91',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_mcconathy_juvenile',
title: 'IL - Chicago McConathy Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=92',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_mccook',
title: 'IL - Chicago McCook',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=93',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_mccook_juvenile',
title: 'IL - Chicago McCook Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=94',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_melrose_park',
title: 'IL - Chicago Melrose Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=95',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_melrose_park_juvenile',
title: 'IL - Chicago Melrose Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=96',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_metropolitan_lib_system',
title: 'IL - Chicago Metropolitan Lib System',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=133',
dont: '0967865204',
have: '0426200675',
missing: 'No matches found'
},
{
name:'us.il.chicago_midlothian',
title: 'IL - Chicago Midlothian',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=97',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_midlothian_juvenile',
title: 'IL - Chicago Midlothian Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=98',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_morton_arboretum',
title: 'IL - Chicago Morton Arboretum',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=99',
dont: '0967865204',
have: '0435612611',
missing: 'No matches found'
},
{
name:'us.il.chicago_morton_college',
title: 'IL - Chicago Morton College',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=101',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_north_riverside',
title: 'IL - Chicago North Riverside',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=102',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_north_riverside_juvenile',
title: 'IL - Chicago North Riverside Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=103',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_northlake',
title: 'IL - Chicago Northlake',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=104',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_northlake_juvenile',
title: 'IL - Chicago Northlake Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=105',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_oak_lawn',
title: 'IL - Chicago Oak Lawn',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=106',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_oak_lawn_juvenile',
title: 'IL - Chicago Oak Lawn Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=107',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_orland_park',
title: 'IL - Chicago Orland Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=108',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_orland_park_juvenile',
title: 'IL - Chicago Orland Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=109',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_palos_heights',
title: 'IL - Chicago Palos Heights',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=111',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_palos_heights_juvenile',
title: 'IL - Chicago Palos Heights Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=112',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_palos_park',
title: 'IL - Chicago Palos Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=113',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_palos_park_juvenile',
title: 'IL - Chicago Palos Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=114',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_park_forest',
title: 'IL - Chicago Park Forest',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=115',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_park_forest_juvenile',
title: 'IL - Chicago Park Forest Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=116',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_prairie_state_college',
title: 'IL - Chicago Prairie State College',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=117',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name:'us.il.chicago_prairie_trails',
title: 'IL - Chicago Prairie Trails',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=118',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_prairie_trails_juvenile',
title: 'IL - Chicago Prairie Trails Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=119',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_richton_park',
title: 'IL - Chicago Richton Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=121',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_richton_park_juvenile',
title: 'IL - Chicago Richton Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=122',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_river_forest',
title: 'IL - Chicago River Forest',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=123',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_river_forest_juvenile',
title: 'IL - Chicago River Forest Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=124',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_river_grove',
title: 'IL - Chicago River Grove',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=125',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_river_grove_juvenile',
title: 'IL - Chicago River Grove Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=126',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name:'us.il.chicago_riverdale',
title: 'IL - Chicago Riverdale',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=127',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_riverdale_juvenile',
title: 'IL - Chicago Riverdale Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=128',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_riverside',
title: 'IL - Chicago Riverside',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=129',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_riverside_juvenile',
title: 'IL - Chicago Riverside Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=130',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_schiller_park',
title: 'IL - Chicago Schiller Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=131',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_schiller_park_juvenile',
title: 'IL - Chicago Schiller Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=132',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_sls_reference',
title: 'IL - Chicago SLS Reference',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=134',
dont: '0967865204',
have: '058547026X',
missing: 'No matches found'
},
{
name:'us.il.chicago_south_holland',
title: 'IL - Chicago South Holland',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=135',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_south_holland_juvenile',
title: 'IL - Chicago South Holland Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=136',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_south_suburban_college',
title: 'IL - Chicago South Suburban College',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=137',
dont: '0967865204',
have: '0435905406',
missing: 'No matches found'
},
{
name:'us.il.chicago_steger_south_chicago',
title: 'IL - Chicago Steger-South Chicago',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=138',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_steger_south_chicago_juvenile',
title: 'IL - Chicago Steger-South Chicago Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=139',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_stickney_forest_view',
title: 'IL - Chicago Stickney-Forest View',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=140',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_stickney_forest_view_juvenile',
title: 'IL - Chicago Stickney-Forest View Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=141',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_summit',
title: 'IL - Chicago Summit',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=142',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_summit_juvenile',
title: 'IL - Chicago Summit Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=143',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_thomas_ford',
title: 'IL - Chicago Thomas Ford',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=144',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_thomas_ford_juvenile',
title: 'IL - Chicago Thomas Ford Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=145',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_thornton',
title: 'IL - Chicago Thornton',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=162',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_thornton_juvenile',
title: 'IL - Chicago Thornton Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=163',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_tinley_park',
title: 'IL - Chicago Tinley Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=146',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_tinley_park_bookmobile',
title: 'IL - Chicago Tinley Park Bookmobile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=148',
dont: '0967865204',
have: '0439135206',
missing: 'No matches found'
},
{
name:'us.il.chicago_tinley_park_juvenile',
title: 'IL - Chicago Tinley Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=147',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_university_park',
title: 'IL - Chicago University Park',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=149',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_university_park_juvenile',
title: 'IL - Chicago University Park Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=150',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_westchester',
title: 'IL - Chicago Westchester',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=151',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_westchester_juvenile',
title: 'IL - Chicago Westchester Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=152',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_westmont',
title: 'IL - Chicago Westmont',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=153',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_westmont_juvenile',
title: 'IL - Chicago Westmont Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=154',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_william_leonard',
title: 'IL - Chicago William Leonard',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=155',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_william_leonard_juvenile',
title: 'IL - Chicago William Leonard Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=156',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_woodridge',
title: 'IL - Chicago Woodridge',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=157',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_woodridge_juvenile',
title: 'IL - Chicago Woodridge Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=158',
dont: '0967865204',
have: '0590353403',
missing: 'No matches found'
},
{
name:'us.il.chicago_worth',
title: 'IL - Chicago Worth',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=159',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name:'us.il.chicago_worth_juvenile',
title: 'IL - Chicago Worth Juvenile',
link: 'http://swan.mls.lib.il.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=160',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
	name:'us.ca.el_dorado_county_library',
	title: 'CA - El Dorado County Library',
	link: 'http://ibistro.eldoradolibrary.org/uhtbin/cgisirsi.exe/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
	dont: '0967865204',
	have: '0140366792',
	missing: 'found no matches'
},
{
	name:'us.ca.folsom_public_library',
	title: 'CA - Folsom Public Library',
	link: 'http://www.saclibrarycatalog.org/search~S51/a?searchtype=i&searchscope=50&searcharg=#{ISBN}&Submit=Search',
	dont: '0967865204',
	have: '014132256X',
	missing: 'No matches found'
},
{
	name:'us.ca.sonoma_county',
	title: 'CA - Sonoma County',
	link: 'http://catalog.sonomalibrary.org/ipac20/ipac.jsp?menu=search&term=#{ISBN}&index=ISBNEX',
	dont: '0967865204',
	have: '0439136350',
	missing: 'Sorry, could not find anything matching'
},
{
	name:'us.co.jefferson_county_public_library',
	title: 'CO - Jefferson County Public Library',
	link: 'http://sable.jefferson.lib.co.us/search/?searchtype=i&searcharg=#{ISBN}&SORT=D&searchscope=9',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.il.homewood_public_library',
	title: 'IL - Homewood Public Library',
	link: 'http://swan.mls.lib.il.us/search/i?SEARCH=#{ISBN}&sortdropdown=-&searchscope=1',
	dont: '0967865204',
	have: '0394839129',
	missing: 'No matches found'
},
{
name: 'us.oh.columbus_metropolitan_library',
title: 'OH - Columbus Metropolitan Library',
link: 'http://catalog.columbuslibrary.org/result.ashx?q=#{ISBN}',
have: '0394839129',
dont: '0967865204',
missing: 'No results found'
},
{
name: 'us.wi.madison_public_library',
title: 'WI - South Central Library System',
link: 'http://www.linkcat.info/ipac20/ipac.jsp?menu=search&term=#{ISBN}&index=CISBN',
have: '0394839129',
dont: '0967865204',
missing: 'Sorry, could not find anything matching'
},
{
   name: 'us.oh.columbus_metropolitan_library',
   title: 'OH - Columbus Metropolitan Library',
   link: 'http://catalog.columbuslibrary.org/result.ashx?q=#{ISBN}',
   have: '0394839129',
   dont: '0967865204',
   missing: 'No results found'
 },
{
	name:'us.az.phoenix_public_library',
	title: 'AZ - Phoenix Public Library',
	link: 'http://www.phoenixpubliclibrary.org/advsearch.jsp?view=full&N=0&ISBN=#{ISBN}',
	dont: '0967865204',
	have: '0306817438',
	missing: 'No results were found'
},
{
	name:'us.az.scottsdale_public_library',
	title: 'AZ - Scottsdale Public Library',
	link: 'http://encore.scottsdaleaz.gov/iii/encore/search?formids=target&lang=eng&suite=def&reservedids=lang%2Csuite&submitmode=&submitname=&target=#{ISBN}',
	dont: '0967865204',
	have: '0590353403',
	missing: 'no results found'
},
{
	name:'us.az.tempe_public_library',
	title: 'AZ - Tempe Public Library',
	link: 'http://catalog.tempe.gov/search/i?#{ISBN}',
	dont: '0967865204',
	have: '0306817438',
	missing: 'No matches found'
},
{
	name:'us.az.city_of_mesa_library',
	title: 'AZ - City of Mesa Library',
	link: 'http://cat.mesalibrary.org:8080/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}',
	dont: '0967865204',
	have: '0306817438',
	missing: 'Sorry, could not find anything matching'
},
{
	name:'us.az.glendale_public_library',
	title: 'AZ - Glendale Public Library',
	link: 'http://www.glendalelibrary.org/ipac20/ipac.jsp?menu=search&index=ISBNEX&term=#{ISBN}',
	dont: '0967865204',
	have: '0306817438',
	missing: 'Sorry, could not find anything matching'
},
{
	name:'us.va.prince_william_library',
	title: 'VA - Prince William Library',
	link: 'http://librarycatalog.pwcgov.org/ipac20/ipac.jsp?menu=search&x=0&y=0&aspect=subtab13&index=ISBNEX&term=#{ISBN}',
	dont: '0967865204',
	have: '0439136350',
	missing: 'Sorry, could not find anything matching'
},
{
	name:'us.fl.orange_county_all',
	title: 'FL - Orange County Public Library - All',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=1',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_main',
	title: 'FL - Orange County Public Library - Main Library',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=2',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_alafaya',
	title: 'FL - Orange County Public Library - Alafaya',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=3',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_edgewater',
	title: 'FL - Orange County Public Library - Edgewater',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=4',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_herndon',
	title: 'FL - Orange County Public Library - Herndon',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=5',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_hiawassee',
	title: 'FL - Orange County Public Library - Hiawassee',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=6',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_north_orange',
	title: 'FL - Orange County Public Library - North Orange',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=7',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_south_trail',
	title: 'FL - Orange County Public Library - South Trail',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=8',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_southeast',
	title: 'FL - Orange County Public Library - Southeast',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=9',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_southwest',
	title: 'FL - Orange County Public Library - Southwest',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=10',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_south_creek',
	title: 'FL - Orange County Public Library - South Creek',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=11',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_washington_park',
	title: 'FL - Orange County Public Library - Washington Park',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=12',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_west_oaks',
	title: 'FL - Orange County Public Library - West Oaks',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=14',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_windermere',
	title: 'FL - Orange County Public Library - Windermere',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=15',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_winter_garden',
	title: 'FL - Orange County Public Library - Winter Garden',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=13',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.fl.orange_county_eatonville',
	title: 'FL - Orange County Public Library - Eatonville',
	link: 'http://iii.ocls.info/search/a?a&searchtype=i&searcharg=#{ISBN}&searchscope=17',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.ca.monterey_public_library',
	title: 'CA - Monterey Public Library - All',
	link: 'http://montn.ci.monterey.ca.us/search/i?SEARCH=#{ISBN}&sortdropdown=-&searchscope=9',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.ca.monterey_public_library_monterey',
	title: 'CA - Monterey Public Library - Monterey',
	link: 'http://montn.ci.monterey.ca.us/search/i?SEARCH=#{ISBN}&sortdropdown=-&searchscope=1',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.ca.monterey_public_library_pacific_grove',
	title: 'CA - Monterey Public Library - Pacific Grove',
	link: 'http://montn.ci.monterey.ca.us/search/i?SEARCH=#{ISBN}&sortdropdown=-&searchscope=2',
	dont: '0967865204',
	have: '0439136350',
	missing: 'No matches found'
},
{
	name:'us.sc.charleston_county_public_library',
	title: 'SC - Charleston County Public Library - All',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_cooper_river',
	title: 'SC - Charleston County Public Library - Cooper River',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COOPER_RIV',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_dorchester_road',
	title: 'SC - Charleston County Public Library - Dorchester Road',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DORCHESTER',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_edisto',
	title: 'SC - Charleston County Public Library - Edisto',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EDISTO',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_folly_beach',
	title: 'SC - Charleston County Public Library - Folly Beach',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FOLLY',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_james_island',
	title: 'SC - Charleston County Public Library - James Island',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JAMES_IS',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_john_l_dart',
	title: 'SC - Charleston County Public Library - John L. Dart Library',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DART',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_johns_island',
	title: 'SC - Charleston County Public Library - John\'s Island',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JOHNS_IS',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_main',
	title: 'SC - Charleston County Public Library - Main',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MAIN',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_mcClellanville',
	title: 'SC - Charleston County Public Library - McClellanville',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MCC_VILLE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_mt_pleasant',
	title: 'SC - Charleston County Public Library - Mt. Pleasant',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MT_PLEASNT',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_otranto_road',
	title: 'SC - Charleston County Public Library - Otranto Road',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OTRANTO',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_poe_branch',
	title: 'SC - Charleston County Public Library - Poe Branch',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=POE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_st_andrews',
	title: 'SC - Charleston County Public Library - St. Andrews',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ST_ANDREWS',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_st_pauls_hollywood',
	title: 'SC - Charleston County Public Library - St. Paul\'s / Hollywood',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ST_PAULS',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_village',
	title: 'SC - Charleston County Public Library - Village',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=VILLAGE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.sc.charleston_county_public_library_west_ashley ',
	title: 'SC - Charleston County Public Library - West Ashley',
	link: 'http://192.152.249.232/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WST_ASHLEY',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_all',
	title: 'MD - Montgomery County Public Library- All',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=ALL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_aspen_hill',
	title: 'MD - Montgomery County Public Library- Aspen Hill',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=ASPEN_HILL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_bethesda',
	title: 'MD - Montgomery County Public Library- Bethesda',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=BETHESDA',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_chevy_chase',
	title: 'MD - Montgomery County Public Library- Chevy Chase',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=CHEVYCHASE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_chevy_chase',
	title: 'MD - Montgomery County Public Library- Chevy Chase',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=CHEVYCHASE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_damascus',
	title: 'MD - Montgomery County Public Library- Damascus',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=DAMASCUS',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_davis',
	title: 'MD - Montgomery County Public Library- Davis',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=DAVIS',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_gaithersburg',
	title: 'MD - Montgomery County Public Library- Gaithersburg',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=GAITHERSBG',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_germantown',
	title: 'MD - Montgomery County Public Library- Germantown',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=GERMANTOWN',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_kensington_park',
	title: 'MD - Montgomery County Public Library- Kensington Park',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=KENSINGTON',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_little_falls',
	title: 'MD - Montgomery County Public Library- Little Falls',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=LITTLEFALL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_long_branch',
	title: 'MD - Montgomery County Public Library- Long Branch',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=LONGBRANCH',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_marilyn_j_praisner_fairland',
	title: 'MD - Montgomery County Public Library- Marilyn J. Praisner (Fairland)',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=PRAISNER',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_noyes',
	title: 'MD - Montgomery County Public Library- Noyes',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=NOYES',
	dont: '0967865204',
	have: '0394839129',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_olney',
	title: 'MD - Montgomery County Public Library- Olney',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=OLNEY',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_poolesville',
	title: 'MD - Montgomery County Public Library- Poolesville',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=POOLESVILL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_potomac',
	title: 'MD - Montgomery County Public Library- Potomac',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=POTOMAC',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_quince_orchard',
	title: 'MD - Montgomery County Public Library- Quince Orchard',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=QUINCEORCH',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_rockville',
	title: 'MD - Montgomery County Public Library- Rockville',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=ROCKVILLE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_silver_spring',
	title: 'MD - Montgomery County Public Library- Silver Spring',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=SILVER_SPR',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_twinbrook',
	title: 'MD - Montgomery County Public Library- Twinbrook',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=TWINBROOK',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_wheaton',
	title: 'MD - Montgomery County Public Library- Wheaton',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=WHEATON',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.md.montgomery_county_public_libraries_white_oak',
	title: 'MD - Montgomery County Public Library- White Oak',
	link: 'http://webcat.montgomerylibrary.org/uhtbin/cgisirsi/x/0/0/5?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&user_id=webserver&password=&library=WHITE_OAK',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ut.davis_county_library_system_all',
	title: 'UT - Davis County Library System - All',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ut.davis_county_library_system_centerville_branch',
	title: 'UT - Davis County Library System - Centerville Branch',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CTV',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ut.davis_county_library_system_central_branch_layton',
	title: 'UT - Davis County Library System - Central Branch/Layton',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CE',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{	
	name:'us.ut.davis_county_library_system_headquarters_farmington',
	title: 'UT - Davis County Library System - Headquarters/Farmington',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HD',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{	
	name:'us.ut.davis_county_library_system_kaysville_branch',
	title: 'UT - Davis County Library System - Kaysville Branch',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KYV',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{	
	name:'us.ut.davis_county_library_system_north_branch_clearfield',
	title: 'UT - Davis County Library System - North Branch/Clearfield',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NOD',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{	
	name:'us.ut.davis_county_library_system_northwest_branch_syracuse',
	title: 'UT - Davis County Library System - Northwest Branch/Syracuse',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SYR',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ut.davis_county_library_system_south_branch_bountiful',
	title: 'UT - Davis County Library System- South Branch/Bountiful',
	link: 'http://168.180.199.11/uhtbin/cgisirsi.exe/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SOD',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ca.burbank_public_library_all',
	title: 'CA - Burbank Public Library - All',
	link: 'http://66.77.127.97/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ca.burbank_public_library_buena_vista_branch',
	title: 'CA - Burbank Public Library - Buena Vista Branch',
	link: 'http://66.77.127.97/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BUENAVISTA',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ca.burbank_public_library_central_library',
	title: 'CA - Burbank Public Library - Central Library',
	link: 'http://66.77.127.97/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CENTRAL',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
	name:'us.ca.burbank_public_library_northwest_branch',
	title: 'CA - Burbank Public Library - Northwest Branch',
	link: 'http://66.77.127.97/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NORTHWEST',
	dont: '0967865204',
	have: '0439136350',
	missing: 'found no matches'
},
{
name: 'us.ca.humboldt_county_library',
title: 'CA - Humboldt County Library',
link: 'http://libcat.co.humboldt.ca.us/search/?SORT=D&searchscope=13&searchtype=i&searcharg=#{ISBN}',
dont: '0967865204',
have: '0439136350',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.entire_collection',
title: 'NYPL - Entire Collection',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=1',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.58th_street',
title: 'NYPL - 58th Street',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=2',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.67th_street',
title: 'NYPL - 67th Street',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=3',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.96th_street',
title: 'NYPL - 96th Street',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=4',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.115th_street',
title: 'NYPL - 115th Street',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=5',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.125th_street',
title: 'NYPL - 125th Street',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=6',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.aguilar',
title: 'NYPL - Aguilar',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=7',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.allerton',
title: 'NYPL - Allerton',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=8',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.andrew_heiskell',
title: 'NYPL - Andrew Heiskell',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=9',
dont: '0967865204',
have: '0439784549',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.baychester',
title: 'NYPL - Baychester',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=11',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.belmont',
title: 'NYPL - Belmont',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=12',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.bloomingdale',
title: 'NYPL - Bloomingdale',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=13',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.bronx_library_center',
title: 'NYPL - Bronx Library Center',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=14',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.castle_hill',
title: 'NYPL - Castle Hill',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=15',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.chatham_square',
title: 'NYPL - Chatham Square',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=16',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.city_island',
title: 'NYPL - City Island',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=17',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.clason\'s_point',
title: 'NYPL - Clason\'s Point',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=18',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.columbus',
title: 'NYPL - Columbus',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=19',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.countee_cullen',
title: 'NYPL - Countee Cullen',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=20',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.dongan_hills',
title: 'NYPL - Dongan Hills',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=21',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.eastchester',
title: 'NYPL - Eastchester',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=23',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.edenwald',
title: 'NYPL - Edenwald',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=24',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.epiphany',
title: 'NYPL - Epiphany',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=25',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.fort_washington',
title: 'NYPL - Fort Washington',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=26',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.francis_martin',
title: 'NYPL - Francis Martin',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=27',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.george_bruce',
title: 'NYPL - George Bruce',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=28',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.grand_central',
title: 'NYPL - Grand Central',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=29',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.grand_concourse',
title: 'NYPL - Grand Concourse',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=30',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.great_kills',
title: 'NYPL - Great Kills',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=31',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.hamilton_fish_park',
title: 'NYPL - Hamilton Fish Park',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=32',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.hamilton_grange',
title: 'NYPL - Hamilton Grange',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=33',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.harlem',
title: 'NYPL - Harlem',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=34',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.hudson_park',
title: 'NYPL - Hudson Park',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=36',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.huguenot_park',
title: 'NYPL - Huguenot Park',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=37',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.hunt\'s_point',
title: 'NYPL - Hunt\'s Point',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=39',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.inwood',
title: 'NYPL - Inwood',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=40',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.jefferson_market',
title: 'NYPL - Jefferson Market',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=41',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.jerome_park',
title: 'NYPL - Jerome Park',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=42',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.kingsbridge',
title: 'NYPL - Kingsbridge',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=43',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.kips_bay',
title: 'NYPL - Kips Bay',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=44',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.macomb\'s_bridge',
title: 'NYPL - Macomb\'s Bridge',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=45',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.melrose',
title: 'NYPL - Melrose',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=47',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.mid-manhattan',
title: 'NYPL - Mid-Manhattan',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=48',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.morningside_heights',
title: 'NYPL - Morningside Heights',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=49',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.morris_park',
title: 'NYPL - Morris Park',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=50',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.morrisania',
title: 'NYPL - Morrisania',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=51',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.mosholu',
title: 'NYPL - Mosholu',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=52',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.mott_haven',
title: 'NYPL - Mott Haven',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=53',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.muhlenberg',
title: 'NYPL - Muhlenberg',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=54',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.mulberry_street',
title: 'NYPL - Mulberry Street',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=55',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.new_amsterdam',
title: 'NYPL - New Amsterdam',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=56',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.new_dorp',
title: 'NYPL - New Dorp',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=57',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.ottendorfer',
title: 'NYPL - Ottendorfer',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=58',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.parkchester',
title: 'NYPL - Parkchester',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=59',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.pelham_bay',
title: 'NYPL - Pelham Bay',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=60',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.performing_arts',
title: 'NYPL - Performing Arts',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=61',
dont: '0967865204',
have: '0321015770',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.port_richmond',
title: 'NYPL - Port Richmond',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=62',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.richmondtown',
title: 'NYPL - Richmondtown',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=63',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.riverdale',
title: 'NYPL - Riverdale',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=64',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.riverside',
title: 'NYPL - Riverside',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=65',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.roosevelt_island',
title: 'NYPL - Roosevelt Island',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=66',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.schomburg_center',
title: 'NYPL - Schomburg Center',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=67',
dont: '0967865204',
have: '0439129710',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.sedgwick',
title: 'NYPL - Sedgwick',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=69',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.seward_park',
title: 'NYPL - Seward Park',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=70',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.sibl',
title: 'NYPL - SIBL',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=68',
dont: '0967865204',
have: '0321168828',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.soundview',
title: 'NYPL - Soundview',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=71',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.south_beach',
title: 'NYPL - South Beach',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=72',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.spuyten_duyvil',
title: 'NYPL - Spuyten Duyvil',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=73',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.st._george',
title: 'NYPL - St. George',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=75',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.stapleton',
title: 'NYPL - Stapleton',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=76',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.stephen_a._schwarzman_building',
title: 'NYPL - Stephen A. Schwarzman Building',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=38',
dont: '0967865204',
have: '0439786770',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.terence_cardinal_cooke-cathedral',
title: 'NYPL - Terence Cardinal Cooke-Cathedral',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=77',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.throgs_neck',
title: 'NYPL - Throgs Neck',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=78',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.todt_hill-westerleigh',
title: 'NYPL - Todt Hill-Westerleigh',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=79',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.tompkins_square',
title: 'NYPL - Tompkins Square',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=80',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.tottenville',
title: 'NYPL - Tottenville',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=81',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.tremont',
title: 'NYPL - Tremont',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=82',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.van_cortlandt',
title: 'NYPL - Van Cortlandt',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=83',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.van_nest',
title: 'NYPL - Van Nest',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=84',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.wakefield',
title: 'NYPL - Wakefield',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=85',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.washington_heights',
title: 'NYPL - Washington Heights',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=86',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.webster',
title: 'NYPL - Webster',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=87',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.west_farms',
title: 'NYPL - West Farms',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=88',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.west_new_brighton',
title: 'NYPL - West New Brighton',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=89',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.westchester_square',
title: 'NYPL - Westchester Square',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=90',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.woodlawn_heights',
title: 'NYPL - Woodlawn Heights',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=91',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.woodstock',
title: 'NYPL - Woodstock',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=92',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.yorkville',
title: 'NYPL - Yorkville',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=93',
dont: '0967865204',
have: '0545139708',
missing: 'No matches found'
},
{
name: 'us.ny.nypl.dance_research_collection',
title: 'NYPL - Dance Research Collection',
link: 'http://catalog.nypl.org/search/i?SEARCH=#{ISBN},&sortdropdown=-&searchscope=99',
dont: '0967865204',
have: '0439309158',
missing: 'No matches found'
},

{
     name: 'us.ma.minuteman_library_network',
     title: 'MA - Minuteman Library Network',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=1',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.acton_memorial',
     title: 'MA - Acton Memorial Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=3',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.arlington_robbins',
     title: 'MA - Arlington\'s Robbins Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=4',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.ashland_public',
     title: 'MA - Ashland Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=5',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},

{
     name: 'us.ma.bedford_public',
     title: 'MA - Bedford Free Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=6',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.belmont_public',
     title: 'MA - Belmont Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=7',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.brookline_public',
     title: 'MA - Brookline\'s Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=8',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.cambridge_public',
     title: 'MA - Cambridge Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=9',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.concord_public',
     title: 'MA - Concord Free Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=10',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.dean_college_anderson',
     title: 'MA - Dean College - Anderson Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=11',
     have: '0060528427',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.dedham_public',
     title: 'MA - Dedham Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=12',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.dover_town',
     title: 'MA - Dover Town Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=13',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.framingham_public',
     title: 'MA - Framingham Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=14',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.framingham_state_whittemore',
     title: 'MA - Framingham State College - Whittemore Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=15',
     have: '038551445X',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.franklin_public_library',
     title: 'MA - Franklin Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=16',
     have: '0394900014',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.holliston_public',
     title: 'MA - Holliston Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=17',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.lasell_college_brennan',
     title: 'MA - Lasell College - Brennan Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=18',
     have: '0060838655',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.lexington_cary',
     title: 'MA - Lexington - Cary Memorial',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=19',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.lincoln_public',
     title: 'MA - Lincoln Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=20',
     have: '038551445X',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.massbay_community_perkins',
     title: 'MA - MassBay Community College - Perkins Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=21',
     have: '0060194480',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.maynard_public',
     title: 'MA - Maynard Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=22',
     have: '038551445X',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.medfield_public',
     title: 'MA - Medfield Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=23',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.medford_public',
     title: 'MA - Medford Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=24',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.medway_public',
     title: 'MA - Medway Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=25',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.millis_public',
     title: 'MA - Millis Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=26',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.mountidacollege_wadsworth',
     title: 'MA - Mount Ida College - Wadsworth Learnning Resource Center',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=27',
     have: '0394900014',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.natick_morse',
     title: 'MA - Natick\'s Morse Institute Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=28',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.needham_public',
     title: 'MA - Needham Free Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=29',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.newbury_college',
     title: 'MA - Newbury College Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=30',
     have: '0060907924',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.newton_free',
     title: 'MA - Newton Free Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=31',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.norwood_morrill',
     title: 'MA - Norwood\'s Morrill Memorial Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=32',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.pinemanorcollege_annenberg',
     title: 'MA - Pine Manor College - Annenberg Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=44',
     have: '0060926430',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.somerville_public',
     title: 'MA - Somerville Public',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=33',
     have: '0394900014',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.stow_randall',
     title: 'MA - Stow\'s Randall Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=34',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.sudbury_goodnow',
     title: 'MA - Sudbury\'s Goodnow Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=35',
     have: '0394900014',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.waltham_public',
     title: 'MA - Waltham Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=36',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.watertown_public',
     title: 'MA - Watertown Free Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=37',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.wayland_public',
     title: 'MA - Wayland Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=38',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.wellesley_free',
     title: 'MA - Wellesley Free Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=39',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.weston_public',
     title: 'MA - Weston Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=40',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.westwood_public',
     title: 'MA - Westwood Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=41',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.winchester_public',
     title: 'MA - Winchester Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=42',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ma.woburn_public',
     title: 'MA - Woburn Public Library',
     link: 'http://library.minlib.net/search/i?SEARCH=#{ISBN}&searchscope=43',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
},
{
     name: 'us.ca.humboldt_state_university',
     title: 'CA - Humboldt State University',
     link: 'http://voyager.humboldt.edu/vwebv/search?searchArg1=#{ISBN}&argType1=any&searchCode1=ISBN&searchType=2',
     have: '0826410715',
     dont: '0966556453',
     missing: 'Search resulted in no hits.'
  },
{
     name: 'us.mn.stpaul_public_library',
     title: 'MN - St. Paul Public Library',
     link: 'http://alpha.stpaul.lib.mn.us/search/i?SEARCH=#{ISBN}&sortdropdown=-&searchscope=16',
     have: '0394839129',
     dont: '0967865204',
     missing: 'No matches found'
  },
  {
     name: 'us.mn.hennepin_county_library',
     title: 'NM - Hennepin County Library',
     link: 'https://catalog.hclib.org/ipac20/ipac.jsp?menu=search&index=ISBN&term=#{ISBN}',
     have: '0394839129',
     dont: '0967865204',
     missing: 'could not find anything matching'
  },{
     name: 'us.mn.ramsey_county_library',
     title: 'MN - Ramsey County Library',
     link: 'http://ipac.ramsey.lib.mn.us/ipac20/ipac.jsp?menu=search&x=13&index=ISBNE&term=#{ISBN}',
     have: '0394839129',
     dont: '0967865204',
     missing: 'could not find anything matching'
  },
{
	name: 'us.ca.nv.link_plus_library',
	title: 'CA - Link+ Libraries',
	link: 'https://csul.iii.com/search/i?SEARCH=#{ISBN}',
	have: '0060254920',
	dont: '9562391418',
	missing: 'No matches found'
},
{
	name: 'us.ca.claremontcollegeslibrary',
	title: 'CA - Claremont Colleges Library',
	link: 'http://blais.claremont.edu/search/i?SEARCH=#{ISBN}',
	have: '0394831292',
	dont: '0967865204',
	missing: 'No matches found'
},
{
     name: 'us.ks.wichita_public_library',
     title: 'KS - Wichita Public Library',
     link: 'http://catalog.wichita.lib.ks.us/polaris/search/searchresults.aspx?ctx=1.1033.0.0.4&type=Advanced&term=#{ISBN}&by=ISBN&bool1=And&sort=RELEVANCE&page=0',
     dont: '0967865204',
     have: '0374299102',
     missing: 'Check your search text'
},
{
     name: 'us.ks.wichita_state_university_libraries',
     title: 'KS - Wichita State University Libraries',
     link: 'http://libcat.wichita.edu/cgi-bin/Pwebrecon.cgi?SAB1=#{ISBN}&FLD1=ISBN+%28ISBN%29&CNT=10&HIST=1',
     dont: '0151012237',
     have: '0374153892',
     missing: 'Your search resulted in no hits'
},
{
     name: 'us.al.florence_lauderdale_public_library',
     title: 'AL - Florence-Lauderdale Public Library',
     link: 'http://catalog.flpl.lib.al.us/polaris/search/searchresults.aspx?type=Default&by=ISBN&term=#{ISBN}',
     dont: '0967865204',
     have: '0373880065',
     missing: 'No titles found'
},
{
     name: 'us.al.austin_high_school',
     title: 'AL - Austin High School',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=5',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.courtland',
     title: 'AL - Courtland',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=10',
     dont: '0373872704',
     have: '0439786770',
     missing: 'No matches found'
},
{
     name: 'us.al.courtland_juvenile',
     title: 'AL - Courtland Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=11',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.decatur_high_school',
     title: 'AL - Courtland Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=27',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.deKalb_county',
     title: 'AL - DeKalb County',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=30',
     dont: '0373872704',
     have: '039450030X',
     missing: 'No matches found'
},
{
     name: 'us.al.deKalb_county_juvenile',
     title: 'AL - DeKalb County Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=31',
     dont: '0373872704',
     have: '0385903812',
     missing: 'No matches found'
},
{
     name: 'us.al.gadsden_state_all_libraries',
     title: 'AL - Gadsden State, All Libraries',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=36',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.gadsden_state_gadsden',
     title: 'AL - Gadsden State-Gadsden',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=37',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.gadsden_state_ayers',
     title: 'AL - Gadsden State-Ayers',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=39',
     dont: '0373872704',
     have: '0394839129',
     missing: 'No matches found'
},
{
     name: 'us.al.gadsden_state_cherokee',
     title: 'AL - Gadsden State-Cherokee',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=40',
     dont: '0373872704',
     have: '0534004695',
     missing: 'No matches found'
},
{
     name: 'us.al.gadsden_state_mcclellan',
     title: 'AL - Gadsden State-McClellan',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=38',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.gadsden_state_valley_st',
     title: 'AL - Gadsden State-Valley St',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=35',
     dont: '0373872704',
     have: '0511073941',
     missing: 'No matches found'
},
{
     name: 'us.al.helen_keller',
     title: 'AL - Helen Keller',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=41',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.helen_keller_juvenile',
     title: 'AL - Helen Keller Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=42',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.muscle_shoals',
     title: 'AL - Muscle Shoals',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=43',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.muscle_shoals_juvenile',
     title: 'AL - Muscle Shoals Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=44',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.northeast_alabama',
     title: 'AL - Northeast Alabama',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=45',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.northwest_phil_campbell',
     title: 'AL - Northwest-Phil Campbell',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=48',
     dont: '0373872704',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.al.northwest_shoals',
     title: 'AL - Northwest Shoals',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=47',
     dont: '0373872704',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.al.northwest_shoals_all',
     title: 'AL - Northwest Shoals, All',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=46',
     dont: '0373872704',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.al.scottsboro',
     title: 'AL - Scottsboro',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=52',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.scottsboro_juvenile',
     title: 'AL - Scottsboro Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=53',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.sheffield',
     title: 'AL - Sheffield',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=54',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.sheffield_juvenile',
     title: 'AL - Sheffield Juvenile',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=55',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.shoals_area_libraries',
     title: 'AL - Shoals Area Libraries',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=56',
     dont: '0882665456',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.al.snead',
     title: 'AL - Snead',
     link: 'http://www.lmn.lib.al.us/search/i?#{ISBN}&searchscope=57',
     dont: '0373872704',
     have: '0439136350',
     missing: 'No matches found'
},

{
     name: 'us.va.adams_elementary_library',
     title: 'VA - Adams Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ADAMS',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.arthur_ashe_elementary_library',
     title: 'VA - Arthur Ashe Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ARTHURASHE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.brookland_middle_library',
     title: 'VA - Brookland Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BRKLAND-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.byrd_middle_library',
     title: 'VA - Byrd Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BYRD-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.carver_elementary_library',
     title: 'VA - Carver Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CARVER',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.chamberlayne_elementary_library',
     title: 'VA - Chamberlayne Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CHAMBERLNE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.colonial_trail_elementary_school',
     title: 'VA - Colonial Trail Elementary School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CTES',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.crestview_elementary_library',
     title: 'VA - Crestview Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CRESTVIEW',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.davis_elementary_library',
     title: 'VA - Davis Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DAVIS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.deep_run_high_school',
     title: 'VA - Deep Run High School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DRHS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.donahoe_elementary_library',
     title: 'VA - Donahoe Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DONAHOE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.dumbarton_elementary_library',
     title: 'VA - Dumbarton Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DUMBARTON',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.echo_lake_elementary_library',
     title: 'VA - Echo Lake Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ECHO-LAKE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.elko_middle_school',
     title: 'VA - Elko Middle School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ELKO',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.fair_oaks_elementary_library',
     title: 'VA - Fair Oaks Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FAIR-OAKS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.fairfield_middle_library',
     title: 'VA - Fairfield Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FRFIELD-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.freeman_high_library',
     title: 'VA - Freeman High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FREEMAN-HS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.gayton_elementary_library',
     title: 'VA - Gayton Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GAYTON',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.glen_allen_elementary_library',
     title: 'VA - Glen Allen Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GLEN-ALLEN',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.glen_lea_elementary_library',
     title: 'VA - Glen Lea Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GLEN-LEA',
     dont: '0967865204',
     have: '0152020934',
     missing: 'found no matches'
},
{
     name: 'us.va.godwin_high_library',
     title: 'VA - Godwin High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GODWIN-HS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.greenwood_elementary_school',
     title: 'VA - Greenwood Elementary School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GREENWOOD',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.harvie_elementary_school',
     title: 'VA - Harvie Elementary School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HARVIE-ES',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.henrico_high_library',
     title: 'VA - Henrico High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HENRICO-HS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.hermitage_high_library',
     title: 'VA - Hermitage High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HERM-HS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.hermitage_technical_center_library',
     title: 'VA - Hermitage Technical Center Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HERM-TC',
     dont: '0967865204',
     have: '1566091780',
     missing: 'found no matches'
},
{
     name: 'us.va.highland_springs_elementary_library',
     title: 'VA - Highland Springs Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HSES',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.highland_springs_high_library',
     title: 'VA - Highland Springs High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HSHS',
     dont: '0967865204',
     have: '0525475060',
     missing: 'found no matches'
},
{
     name: 'us.va.highland_springs_technical_center_library',
     title: 'VA - Highland Springs Technical Center Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HSTC',
     dont: '0967865204',
     have: '0966463331',
     missing: 'found no matches'
},
{
     name: 'us.va.holladay_elementary_library',
     title: 'VA - Holladay Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HOLLADAY',
     dont: '0967865204',
     have: '1604531193',
     missing: 'found no matches'
},
{
     name: 'us.va.hungary_creek_middle_school',
     title: 'VA - Hungary Creek Middle School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HUNGRYCRK',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.johnson_elementary_library',
     title: 'VA - Johnson Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JOHNSON',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.laburnum_elementary_library',
     title: 'VA - Laburnum Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LABURNUM',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.lakeside_elementary_library',
     title: 'VA - Lakeside Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LAKESIDE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.longan_elementary_library',
     title: 'VA - Longan Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LONGAN',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.longdale_elementary_library',
     title: 'VA - Longdale Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LONGDALE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.maybeury_elementary_library',
     title: 'VA - Maybeury Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MAYBEURY',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.mehfoud_elementary_library',
     title: 'VA - Mehfoud Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MEHFOUD',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.montrose_elementary_library',
     title: 'VA - Montrose Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MONTROSE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.moody_middle_library',
     title: 'VA - Moody Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MOODY-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.mt_vernon_middle_library',
     title: 'VA - Mt Vernon Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MT-VERN-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.new_bridge_library',
     title: 'VA - New Bridge Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NEWBRIDGE',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.nuckols_farm_elementary_library',
     title: 'VA - Nuckols Farm Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NUCKOLS-FM',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.pemberton_elementary_library',
     title: 'VA - Pemberton Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PEMBERTON',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.pinchbeck_elementary_library',
     title: 'VA - Pinchbeck Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PINCHBECK',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.pocahontas_middle_library',
     title: 'VA - Pocahontas Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=POCAHON-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.ratcliffe_elementary_library',
     title: 'VA - Ratcliffe Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RATCLIFFE',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.ridge_elementary_library',
     title: 'VA - Ridge Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIDGE',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.rivers_edge_elementary_school',
     title: 'VA - Rivers Edge Elementary School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIVERSEDGE',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.rolfe_middle_library',
     title: 'VA - Rolfe Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ROLFE-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.sandston_elementary_library',
     title: 'VA - Sandston Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SANDSTON',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.seven_pines_elementary_library',
     title: 'VA - Seven Pines Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SEVENPINES',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.shady_grove_elementary_library',
     title: 'VA - Shady Grove Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SHADY-GROV',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.short_pump_elementary_library',
     title: 'VA - Short Pump Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SH-PUMP-ES',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.short_pump_middle_library',
     title: 'VA - Short Pump Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SH-PUMP-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.skipwith_elementary_library',
     title: 'VA - Skipwith Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SKIPWITH',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.springfield_park_elementary_library',
     title: 'VA - Springfield Park Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SPRING-PAR',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.three_chopt_elementary_library',
     title: 'VA - Three Chopt Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=THREE-CHOP',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.trevvett_elementary_library',
     title: 'VA - Trevvett Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TREVVETT',
     dont: '0967865204',
     have: '0394839129',
     missing: 'found no matches'
},
{
     name: 'us.va.tuckahoe_elementary_library',
     title: 'VA - Tuckahoe Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TUCKAHO-ES',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.tuckahoe_middle_library',
     title: 'VA - Tuckahoe Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TUCKAHO-MS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.tucker_high_library',
     title: 'VA - Tucker High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TUCKER-HS',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.twin_hickory_elementary_school',
     title: 'VA - Twin Hickory Elementary School',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TWINHICKRY',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.varina_elementary_library',
     title: 'VA - Varina Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=VARINA',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.varina_high_library',
     title: 'VA - Varina High Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=VARINA-HS',
     dont: '0967865204',
     have: '0313330018',
     missing: 'found no matches'
},
{
     name: 'us.va.virginia_randolph_community_library',
     title: 'VA - Virginia Randolph Community Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=VARANDOLPH',
     dont: '0967865204',
     have: '0743451406',
     missing: 'found no matches'
},
{
     name: 'us.va.ward_elementary_library',
     title: 'VA - Ward Elementary Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WARD',
     dont: '0967865204',
     have: '0590353403',
     missing: 'found no matches'
},
{
     name: 'us.va.wilder_middle_library',
     title: 'VA - Wilder Middle Library',
     link: 'http://catalog.henrico.k12.va.us/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WILDER-MS',
     dont: '0967865204',
     have: '0791018598',
     missing: 'found no matches'
},
{
     name: 'us.mi.addison_township_library',
     title: 'MI - Addison Township Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ADDISON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.allen_park_public_lib_(wayne_co_library)',
     title: 'MI - Allen Park Public Lib. (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ALLENPK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.auburn_hills_public_library',
     title: 'MI - Auburn Hills Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-AUBRNHLS',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.belleville_fred_c_fischer_public_lib_(wayne_co_lib)',
     title: 'MI - Belleville-Fred C. Fischer Public Lib. (Wayne Co. Lib.)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-BELLEVIL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.berkley_public_library',
     title: 'MI - Berkley Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-BERKLEY',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.brandon_township_library',
     title: 'MI - Brandon Township Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-BRANDON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.brighton_district_library',
     title: 'MI - Brighton District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-BRIGHTON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.chelsea_district_library',
     title: 'MI - Chelsea District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-CHELSEA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.clawson_blair_memorial_library',
     title: 'MI - Clawson--Blair Memorial Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-CLAWSON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.commerce_township_community_library',
     title: 'MI - Commerce Township Community Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-COMMERCE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.dearborn_heights_city_libraries',
     title: 'MI - Dearborn Heights City Libraries',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-DRBNHTS',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.dearborn_hts_north_caroline_kennedy_library',
     title: 'MI - Dearborn Hts. North--Caroline Kennedy Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-DEARBRNN',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.dearborn_hts_south_jfk_jr_library',
     title: 'MI - Dearborn Hts. South--JFK, Jr. Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-DEARBNS',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.dexter_district_library',
     title: 'MI - Dexter District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-DEXTER',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.ecorse_public_library_(wayne_co_library)',
     title: 'MI - Ecorse Public Library (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ECORSE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.ferndale_public_library',
     title: 'MI - Ferndale Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-FERNDALE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.flat_rock_public_library',
     title: 'MI - Flat Rock Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-FLATROCK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.franklin_public_library',
     title: 'MI - Franklin Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-FRANKLIN',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.garden_city_public_library',
     title: 'MI - Garden City Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-GARDEN',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.hamtramck_public_library',
     title: 'MI - Hamtramck Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-HAMTRAMC',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.hazel_park_memorial_library',
     title: 'MI - Hazel Park Memorial Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-HAZELPK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.highland_township_public_library',
     title: 'MI - Highland Township Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-HIGHLAND',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.huntington_woods_public_library',
     title: 'MI - Huntington Woods Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-HUNTING',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.inkster_leanna_hicks_public_lib_(wayne_co_lib)',
     title: 'MI - Inkster--Leanna Hicks Public Lib. (Wayne Co. Lib.)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-INKSTER',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.lincoln_park_public_library_(wayne_co_library)',
     title: 'MI - Lincoln Park Public Library (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-LINCOLN',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.livonia_public_library_all_branches',
     title: 'MI - Livonia Public Library  All Branches',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-LIVONIA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.livonia_public_library_alfred_noble_branch',
     title: 'MI - Livonia Public Library Alfred Noble Branch',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-LIVONBL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.livonia_public_library_carl_sandburg_branch',
     title: 'MI - Livonia Public Library Carl Sandburg Branch',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-LIVONSND',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.livonia_public_library_civic_center',
     title: 'MI - Livonia Public Library Civic Center',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-LIVONCC',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.lyon_township_public_library',
     title: 'MI - Lyon Township Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-LYON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.madison_heights_public_library',
     title: 'MI - Madison Heights Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-MADISON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.manchester_district_library',
     title: 'MI - Manchester District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-MANCHEST',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.melvindale_public_library_(wayne_co_library)',
     title: 'MI - Melvindale Public Library (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-MELVINDA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.milford_public_library',
     title: 'MI - Milford Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-MILFORD',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.northville_district_library',
     title: 'MI - Northville District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-NORTHVIL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.novi_public_library',
     title: 'MI - Novi Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-NOVI',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.oak_park_public_library',
     title: 'MI - Oak Park Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-OAKPARK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.oxford_public_library',
     title: 'MI - Oxford Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-OXFORD',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.pontiac_public_library',
     title: 'MI - Pontiac Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-PONTIAC',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.redford_township_district_library',
     title: 'MI - Redford Township District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-REDFORD',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches'
},
{
     name: 'us.mi.river_rouge_public_library_(wayne_co_library)',
     title: 'MI - River Rouge Public Library (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-RIVERROU',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.riverview_public_library',
     title: 'MI - Riverview Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-RIVERVIE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.romulus_public_library_(wayne_co_library)',
     title: 'MI - Romulus Public Library (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ROMULUS',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.royal_oak_public_library',
     title: 'MI - Royal Oak Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ROYALOAK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.royal_oak_township_public_library',
     title: 'MI - Royal Oak Township Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ROYALOTP',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.salem_south_lyon_district_library',
     title: 'MI - Salem-South Lyon District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-SALEMSL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.southgate_veterans_memorial_lib_(wayne_co_lib)',
     title: 'MI - Southgate Veterans Memorial Lib. (Wayne Co. Lib.)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-SOUTHGAT',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.springfield_township_library',
     title: 'MI - Springfield Township Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-SPRINGFL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.taylor_community_library_(wayne_co_library)',
     title: 'MI - Taylor Community Library (Wayne Co. Library)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-TAYLOR',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.the_library_network',
     title: 'MI - The Library Network',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-TLN',
     dont: '0967865204',
     have: '0413774929',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.trenton_veterans_memorial_lib_(wayne_co_lib)',
     title: 'MI - Trenton Veterans Memorial Lib. (Wayne Co. Lib.)',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-TRENTON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.walled_lake_city_library',
     title: 'MI - Walled Lake City Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WALLEDLK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.waterford_library_leggett_branch',
     title: 'MI - Waterford Library - Leggett Branch',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WATERFBR',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.waterford_township_library',
     title: 'MI - Waterford Township Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WATERFRD',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.waterford_township_public_library_all_branches',
     title: 'MI - Waterford Township Public Library All Branches',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-ALLWATE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.wayne_public_library',
     title: 'MI - Wayne Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WAYNE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.white_lake_township_library',
     title: 'MI - White Lake Township Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WHITELK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.wixom_public_library',
     title: 'MI - Wixom Public Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WIXOM',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.mi.wyandotte_bacon_memorial_district_library',
     title: 'MI - Wyandotte Bacon Memorial District Library',
     link: 'http://ibistro.tln.lib.mi.us/uhtbin/cgisirsi/x/0/0/123?user_id=GUEST&password=1234&searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=S-WYANDOTT',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.aliso_viejo_library',
     title: 'Orange Co. - Aliso Viejo Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALISOVIEJO',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.brea_library',
     title: 'Orange Co. - Brea Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BREA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.costa_mesa_library',
     title: 'Orange Co. - Costa Mesa Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COSTAMESA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.costa_mesa_technology_library',
     title: 'Orange Co. - Costa Mesa Technology Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CMTECH',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.costa_mesa/mesa_verde_library',
     title: 'Orange Co. - Costa Mesa/Mesa Verde Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CMMESAVERD',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.cypress_library',
     title: 'Orange Co. - Cypress Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CYPRESS',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.dana_point_library',
     title: 'Orange Co. - Dana Point Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DANAPOINT',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.el_toro_library',
     title: 'Orange Co. - El Toro Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ELTORO',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.foothill_ranch_library',
     title: 'Orange Co. - Foothill Ranch Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FOOTHILLR',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.fountain_valley_library',
     title: 'Orange Co. - Fountain Valley Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FOUNTAINV',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.garden_grove_chapman_library',
     title: 'Orange Co. - Garden Grove Chapman Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GGCHAPMAN',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.garden_grove_regional_library',
     title: 'Orange Co. - Garden Grove Regional Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GGREGIONAL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.garden_grove_west_library',
     title: 'Orange Co. - Garden Grove West Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GGWEST',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.irvine_heritage_park_regional_library',
     title: 'Orange Co. - Irvine Heritage Park Regional Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=IRVINEHP',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.irvine_university_park_library',
     title: 'Orange Co. - Irvine University Park Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=IRVINEUP',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.irvine_wheeler_library',
     title: 'Orange Co. - Irvine Wheeler Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WHEELER',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.la_habra_library',
     title: 'Orange Co. - La Habra Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LAHABRA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.la_palma_library',
     title: 'Orange Co. - La Palma Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LAPALMA',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.ladera_ranch_library',
     title: 'Orange Co. - Ladera Ranch Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LADERARNCH',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.laguna_beach_library',
     title: 'Orange Co. - Laguna Beach Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LAGUNABCH',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.laguna_hills_technology_library',
     title: 'Orange Co. - Laguna Hills Technology Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LHTECH',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.laguna_niguel_library',
     title: 'Orange Co. - Laguna Niguel Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LAGUNANIGL',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.laguna_woods_library',
     title: 'Orange Co. - Laguna Woods Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LAGUNAWOOD',
     dont: '0967865204',
     have: '0788877097',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.los_alamitos/rossmoor_library',
     title: 'Orange Co. - Los Alamitos/Rossmoor Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LOSAL_ROSS',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.orange_county_public_library',
     title: 'Orange Co. - Orange County Public Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OCPLHQ',
     dont: '0967865204',
     have: '0316119482',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.orangewood_childrens_home_library',
     title: 'Orange Co. - Orangewood Childrens Home Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ORANGEWOOD',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.rancho_santa_margarita_library',
     title: 'Orange Co. - Rancho Santa Margarita Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RANCHOSTAM',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.san_clemente_library',
     title: 'Orange Co. - San Clemente Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SCLEMENTE',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.san_juan_capistrano_regional_library',
     title: 'Orange Co. - San Juan Capistrano Regional Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SANJUANCAP',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.seal_beach/mary_wilson_library',
     title: 'Orange Co. - Seal Beach/Mary Wilson Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SBMARYW',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.silverado_library',
     title: 'Orange Co. - Silverado Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SILVERADO',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.stanton_library',
     title: 'Orange Co. - Stanton Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=STANTON',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.tustin_library',
     title: 'Orange Co. - Tustin Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TUSTIN',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.villa_park_library',
     title: 'Orange Co. - Villa Park Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=VILLAPARK',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.oc.westminster_library',
     title: 'Orange Co. - Westminster Library',
     link: 'http://orca.ocpl.org/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WESTMINSTR',
     dont: '0967865204',
     have: '0439786770',
     missing: 'found no matches in the library you searched'
},
{
     name: 'us.ca.sandiego.4s_ranch',
     title: 'San Diego -  4S Ranch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=1',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.alpine_branch',
     title: 'San Diego -  Alpine Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=2',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.bonita_branch',
     title: 'San Diego -  Bonita Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=3',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.borrego_branch',
     title: 'San Diego -  Borrego Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=4',
     dont: '0967865204',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.campo_branch',
     title: 'San Diego -  Campo Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=5',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.cardiff_branch',
     title: 'San Diego -  Cardiff Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=6',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.casa_branch',
     title: 'San Diego -  Casa Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=7',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.crest_branch',
     title: 'San Diego -  Crest Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=8',
     dont: '0967865204',
     have: '0394839129',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.del_mar_branch',
     title: 'San Diego -  Del Mar Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=9',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.descanso_branch',
     title: 'San Diego -  Descanso Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=10',
     dont: '0967865204',
     have: '0394839129',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.east_mobile_library',
     title: 'San Diego -  East Mobile Library',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=11',
     dont: '0967865204',
     have: '0882665456',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.el_cajon_branch',
     title: 'San Diego -  El Cajon Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=13',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.encinitas_branch',
     title: 'San Diego -  Encinitas Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=14',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.fallbrook_branch',
     title: 'San Diego -  Fallbrook Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=15',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.fletcher_hills_branch',
     title: 'San Diego -  Fletcher Hills Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=16',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.imperial_beach_branch',
     title: 'San Diego -  Imperial Beach Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=17',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.jacumba_branch',
     title: 'San Diego -  Jacumba Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=18',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.julian_branch',
     title: 'San Diego -  Julian Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=19',
     dont: '0967865204',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.kids_online',
     title: 'San Diego -  Kids Online',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=20',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.la_mesa_branch',
     title: 'San Diego -  La Mesa Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=21',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.lakeside_branch',
     title: 'San Diego -  Lakeside Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=22',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.lemon_grove_branch',
     title: 'San Diego -  Lemon Grove Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=23',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.lincoln_acres_branch',
     title: 'San Diego -  Lincoln Acres Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=24',
     dont: '0967865204',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.north_mobile_library',
     title: 'San Diego -  North Mobile Library',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=25',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.pine_valley_branch',
     title: 'San Diego -  Pine Valley Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=26',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.potrero_branch',
     title: 'San Diego -  Potrero Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=27',
     dont: '0967865204',
     have: '0590353403',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.poway_branch',
     title: 'San Diego -  Poway Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=28',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.ramona_branch',
     title: 'San Diego -  Ramona Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=29',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.rancho_san_diego_branch',
     title: 'San Diego -  Rancho San Diego Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=30',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.rancho_santa_fe_branch',
     title: 'San Diego -  Rancho Santa Fe Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=31',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.san_marcos_branch',
     title: 'San Diego -  San Marcos Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=32',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.santee_branch',
     title: 'San Diego -  Santee Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=33',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.solana_beach_branch',
     title: 'San Diego -  Solana Beach Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=34',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.spring_valley_branch',
     title: 'San Diego -  Spring Valley Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=35',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.valley_center_branch',
     title: 'San Diego -  Valley Center Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=36',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},
{
     name: 'us.ca.sandiego.vista_branch',
     title: 'San Diego -  Vista Branch',
     link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=37',
     dont: '0967865204',
     have: '0439136350',
     missing: 'No matches found'
},

  { name: 'us.boston_public',
      title: 'Boston Public Library',
      dont: '032119375x',
      have: "0882665456",
      link: 'http://catalog.mbln.org/ipac20/ipac.jsp?profile=bpl1&index=.BN&term=#{ISBN}',
      missing: 'Sorry, could not find anything matching'
    },
    { name: 'us.san_diego_county',
      title: 'San Diego County Library',
      link: 'http://dbpcosdcsgt.co.san-diego.ca.us/search/i?SEARCH=#{ISBN}&searchscope=38',
      dont: '0967865204',
      have: '0967851009',
      missing: 'No matches found; nearby ISBN/ISSN are'
    },
    { name: 'us.seattle_public',
      title: 'Seattle Public Library',
      link: 'http://catalog.spl.org/ipac20/ipac.jsp?index=ISBNEX&term=#{ISBN}',
      dont: '0967865204',
      have: '032119375x',
      missing: 'We could not find results in the catalog for'
    },
    { name: 'us.ancilla_college',
      title: 'Ancilla College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnacp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321342321',
      match_isbn: true
    },
    { name: 'us.associated_mennonite_biblical_seminary',
      title: 'Associated Mennonite Biblical Seminary',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnamp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0333638921',
      match_isbn: true
    },
    { name: 'us.butler_university',
      title: 'Butler University',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnbup&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0323016863',
      match_isbn: true
    },
    { name: 'us.christian_theological_seminary',
      title: 'Christian Theological Seminary',
      have: '0333023188',
      dont: '032119375X',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnctp&scan_start=#{ISBN}",
      match_isbn: true
    },
    { name: 'us.concordia_theological_seminary',
      title: 'Concordia Theological Seminary',
      link: "http://hickory.palni.edu:4505/F?func=find-b&PLIB=co&find_code=ISBN&request=#{ISBN}",
      dont: '0967865204',
      have: '0333010167',
      missing: "The requested record is not in the database."
    },
    { name: 'us.depauw_university',
      title: 'Depauw University',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plndup&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321421922',
      match_isbn: true
    },
    { name: 'us.earlham_college',
      title: 'Earlham College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnecp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321337220',
      match_isbn: true
    },
    { name: 'us.franklin_college',
      title: 'Franklin College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnfcp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321198689',
      match_isbn: true
    },
    { name: 'us.goshen_college',
      title: 'Goshen College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plngop&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0323011276',
      match_isbn: true
    },
    { name: 'us.grace_college',
      title: 'Grace College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plngrp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321267222',
      match_isbn: true
    },
    { name: 'us.hanover_college',
      title: 'Hanover College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnhap&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0325000301',
      match_isbn: true
    },
    { name: 'us.huntington_university',
      title: 'Huntington University',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnhup&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0323020283',
      match_isbn: true
    },
    { name: 'us.manchester_college',
      title: 'Manchester College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnmap&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321241509',
      match_isbn: true
    },
    { name: 'us.marian_college',
      title: 'Marian College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnmcp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0323003052',
      match_isbn: true
    },
    { name: 'us.oakland_city_university',
      title: 'Oakland City University',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnocp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0324007248',
      match_isbn: true
    },
    { name: 'us.university_of_st_francis',
      title: 'University of St. Francis',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnsfp&scan_start=#{ISBN}",
      dont: '0967865204',
      have: '0321278917',
      match_isbn: true
    },
    { name: 'us.saint_josephs_college',
      title: "Saint Joseph's College",
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnsjp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0325000301',
      match_isbn: true
    },
    { name: 'us.saint_meinrad_school_of_theology',
      title: 'Saint Meinrad School of Theology',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnsmp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0330293168',
      match_isbn: true
    },
    { name: 'us.taylor_university',
      title: 'Taylor University',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plntup&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0324001029',
      match_isbn: true
    },
    { name: 'us.tri-state_university',
      title: 'Tri-State University',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plntsp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321250478',
      match_isbn: true
    },
    { name: 'us.university_of_indianapolis',
      title: 'University of Indianapolis',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnuip&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0321277228',
      match_isbn: true
    },
    { name: 'us.wabash_college',
      title: 'Wabash College',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=plnwcp&scan_start=#{ISBN}",
      dont: '032119375X',
      have: '0325000301',
      match_isbn: true
    },
    { name: 'us.palni',
      title: 'PALNI Network',
      link: "http://hickory.palni.edu:4505/F/?func=scan&scan_code=ISBN&local_base=pln01pub&scan_start=#{ISBN}",
      dont: '0967865204',
      have: '0321198131',
      match_isbn: true
    },
    { name: 'us.wmars',
      title: 'Western Mass. Public',
      link: "http://wmars.cwmars.org/search~/i?SEARCH=#{ISBN}",
      dont: '0967865204',
      have: '0321193628',
      missing: "No matches found; nearby ISN'S are:"
    },
    { name: 'us.cmars',
      title: 'Central Mass. Public',
      link: "http://cmars.cwmars.org/search~/i?SEARCH=#{ISBN}",
      dont: '0967865204',
      have: '032119375X',
      missing: "No matches found; nearby ISN'S are:"
    },
    { name: 'us.simmons',
      title: 'Simmons College',
      link: 'http://library.simmons.edu/search/i?SEARCH=#{ISBN}',
      dont: '0486236277',
      have: '032119375X',
      missing: "No matches found; nearby ISN'S are:"
    },
    { name: 'us.pals.belvidere_ida_public_library',
      title: 'Belvidere/Ida Public Library',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=1&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316989126',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.cherry_valley_library',
      title: 'Cherry Valley Library',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=2&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316989126',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.cortland_community_library',
       title: 'Cortland Community Library',
       link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COLY&sort_by=ANY%27',
      dont: '0967865204',
      have: '0316989126',
      missing: 'found no matches in the library you searched'
    },
    { 
	name: 'us.pals.dekalb_public_library',
	title: 'DeKalb Public Library',
	link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DKLY&sort_by=ANY%27',
	dont: '0967865204',
	have: '0316989126',
	missing: 'found no matches in the library you searched'
    },
    { name: 'us.pals.h_colman_rockford_college',
      title: 'H Colman/Rockford College',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=5&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0321015258',
      missing: "No available matches found; nearby available ISN'S are:"
    },    
    { name: 'us.pals.harvard_diggins_library',
      title: 'Harvard Diggins Library',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=6&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316969443',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.highland_community_college',
      title: 'Highland Community College',
      link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&sort_by=ANY%27&library=HCCY',
      dont: '0967865204',
      have: '0375422625',
      missing: 'found no matches in the library you searched'
    },
    { name: 'us.pals.julia_hull_meridian_all_locations',
      title: 'Julia Hull/Meridian All Locations',
      link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&sort_by=ANY%27&library=JHLY',
      dont: '0967865204',
      have: '0689859376',
      missing: 'found no matches in the library you searched'
    },
    { name: 'us.pals.julia_hull_stillman_val_hs',
      title: 'Julia Hull/Stillman Val HS',
      link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&sort_by=ANY%27&library=SP2Y',
      dont: '0967865204',
      have: '081606315X',
      missing: 'found no matches in the library you searched'
    },
    { name: 'us.pals.maple_park_library',
      title: 'Maple Park Library',
      link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&sort_by=ANY%27&library=MPLY',
      dont: '0967865204',
      have: '0689859376',
      missing: 'found no matches in the library you searched'
    },
    { name: 'us.pals.nippersink_library_richmond',
      title: 'Nippersink Library/Richmond',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=10&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316988898',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.north_suburban_all_locations',
      title: 'North Suburban All Locations',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=11&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316987689',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.north_suburban_loves_park',
      title: 'North Suburban/Loves Park',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=12&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316985643',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.north_suburban_roscoe',
      title: 'North Suburban/Roscoe',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=13&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316969214',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.talcott_free_public_library',
      title: 'Talcott Free Public Library',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=17&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316968870',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.woodstock_public_library',
      title: 'Woodstock Public Library',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=18&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316955256',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.pals.all_pals_libraries',
      title: 'All PALS Libraries',
      link: 'http://www.niclibraries.org/search~S1/?searchtype=i&searcharg=#{ISBN}&searchscope=21&SORT=D&availlim=1&searchorigarg=i#{ISBN}',
      dont: '0967865204',
      have: '0316985643',
      missing: "No available matches found; nearby available ISN'S are:"
    },
    { name: 'us.purdue_university',
      title: 'Purdue University',
      link: 'https://www1.lib.purdue.edu/cgi-bin/Pwebrecon.cgi?SAB1=#{ISBN}&BOOL1=any+of+these&FLD1=ISBN+%28ISBN%29&CNT=50',
      dont: '032119375x',
      have: '0439785960',
      missing: 'Your search resulted in no hits'
    },
    { name: 'us.noble.beverly',
      title: "NOBLE Beverly",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=1',
      dont: '0967865204',
      have: '0439785340',
      missing: 'No matches found;'
    },
    { name: 'us.noble.board_of_library_commissioners',
      title: "NOBLE Board of Library Commissioners",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=3',
      dont: '0967865204',
      have: '0379002655',
      missing: 'No matches found;'
    },
    { name: 'us.noble.danvers',
      title: "NOBLE Danvers",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=4',
      dont: '0967865204',
      have: '0321112229',
      missing: 'No matches found;'
    },
    { name: 'us.noble.everett',
      title: "NOBLE Everett",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=6',
      dont: '0967865204',
      have: '0321130073',
      missing: 'No matches found;'
    },
    { name: 'us.noble.gloucester',
      title: "NOBLE Gloucester",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=8',
      dont: '0967865204',
      have: '0321168895',
      missing: 'No matches found;'
    },
    { name: 'us.noble.lynn',
      title: "NOBLE Lynn",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=10',
      dont: '0967865204',
      have: '0321118030',
      missing: 'No matches found;'
    },
    { name: 'us.noble.lynnfield',
      title: "NOBLE Lynnfield",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=12',
      dont: '0967865204',
      have: '0321193903',
      missing: 'No matches found;'
    },
    { name: 'us.noble.marblehead',
      title: "NOBLE Marblehead",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=14',
      dont: '0967865204',
      have: '0321159985',
      missing: 'No matches found;'
    },
    { name: 'us.noble.melrose',
      title: "NOBLE Melrose",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=16',
      dont: '0967865204',
      have: '0321012445',
      missing: 'No matches found;'
    },
    { name: 'us.noble.peabody',
      title: "NOBLE Peabody",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=18',
      dont: '0967865204',
      have: '0321219198',
      missing: 'No matches found;'
    },
    { name: 'us.noble.reading',
      title: "NOBLE Reading",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=20',
      dont: '0967865204',
      have: '0321012631',
      missing: 'No matches found;'
    },
    { name: 'us.noble.revere',
      title: "NOBLE Revere",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=22',
      dont: '0967865204',
      have: '0333035666',
      missing: 'No matches found;'
    },
    { name: 'us.noble.salem',
      title: "NOBLE Salem",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=24',
      dont: '0967865204',
      have: '0321180887',
      missing: 'No matches found;'
    },
    { name: 'us.noble.saugus',
      title: "NOBLE Saugus",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=26',
      dont: '0967865204',
      have: '0321168895',
      missing: 'No matches found;'
    },
    { name: 'us.noble.stoneham',
      title: "NOBLE Stoneham",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=28',
      dont: '0967865204',
      have: '0324184840',
      missing: 'No matches found;'
    },
    { name: 'us.noble.swampscott',
      title: "NOBLE Swampscott",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=30',
      dont: '0967865204',
      have: '0321130073',
      missing: 'No matches found;'
    },
    { name: 'us.noble.wakefield',
      title: "NOBLE Wakefield",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=32',
      dont: '0967865204',
      have: '0321213394',
      missing: 'No matches found;'
    },
    { name: 'us.noble.winthrop',
      title: "NOBLE Winthrop",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=34',
      dont: '0967865204',
      have: '0321158016',
      missing: 'No matches found;'
    },
    { name: 'us.noble.phillips_academy',
      title: "NOBLE Phillips Academy",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=36',
      dont: '0967865204',
      have: '0321227166',
      missing: 'No matches found;'
    },
    { name: 'us.noble.bunker_hill_community_college',
      title: "NOBLE Bunker Hill Community College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=37',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.endicott_college',
      title: "NOBLE Endicott College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=38',
      dont: '0967865204',
      have: '0440007089',
      missing: 'No matches found;'
    },
    { name: 'us.noble.gordon_college',
      title: "NOBLE Gordon College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=39',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.merrimack_college',
      title: "NOBLE Merrimack College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=40',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.middlesex_community_college',
      title: "NOBLE Middlesex Community College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=41',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.montserrat_college_of_art',
      title: "NOBLE Montserrat College of Art",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=42',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.north_shore_community_college',
      title: "NOBLE North Shore Community College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=43',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.northern_essex_community_college',
      title: "NOBLE Northern Essex Community College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=44',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.salem_state_college',
      title: "NOBLE Salem State College",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=45',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.salem_state_education_resources',
      title: "NOBLE Salem State Education Resources",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=46',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.public_libraries',
      title: "NOBLE Public Libraries",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=48',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.college_libraries',
      title: "NOBLE College Libraries",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=49',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.noble.entire_collection',
      title: "NOBLE Entire Collection",
      link: 'http://catalog.noblenet.org/search/?searchtype=i&searcharg=#{ISBN}&searchscope=50',
      dont: '0967865204',
      have: '0439786770',
      missing: 'No matches found;'
    },
    { name: 'us.san_francisco_public_library',
      title: 'San Francisco Public Library',
      link: 'http://sflib1.sfpl.org/search/i?SEARCH=#{ISBN}',
      missing: 'No matches found;',
      dont: '0967865204',
      have: '0333002776'
    },
    { name: 'us.ma.curry_college',
      title: 'Curry College',
      link: 'http://artemis.curry.edu/search/i?#{ISBN}',
      missing: 'No matches found;',
      dont: '074254463x',
      have: '0742544338'
    },
    { name: 'us.wa.king_county_library_system',
      title: 'King County Library System',
      link: 'http://catalog.kcls.org/search/i?#{ISBN}&searchscope=1&SORT=D',
      missing: 'No matches found;',
      dont: '074254463x',
      have: '0742543870'
    },
    { name: 'us.ny.syracuse_university',
      title: 'Syracuse University',
      link: 'http://summit.syr.edu/cgi-bin/Pwebrecon.cgi?FLD1=ISBN+%28ISBN%29&CNT=1&SAB1=#{ISBN}',
      missing: 'Your search resulted in no hits.',
      dont: '1558514843',
      have: '1558514848'
    },
    { name: 'ca.ma.winnipeg_public_library',
      title: 'Winnipeg Public Library',
      link: 'http://wpl-pac.winnipeg.ca/ipac20/ipac.jsp?menu=search&profile=wpl&index=ISBNEX&term=#{ISBN}',
      missing: 'Sorry, could not find anything matching',
      dont: '032119375X',
      have: '0773760261'
    },
    {
      name: 'us.il.skokie_public_library',
      title: 'Skokie Public Library',
      link: 'http://catalog.skokielibrary.info/search~S4/i?SEARCH=#{ISBN}',
      have: '0446578746',
      dont: '1558514843',
      missing: 'No matches found'
    },
    { 
    name: 'us.wy.all',
      title: 'All WYLD Libraries',
      link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=albyweb&library=ALL&searchdata1=#{ISBN}',
      have: '0439786770',
      dont: '0967865204',
      missing: 'found no matches' 
    },
    { 
    name: 'us.wy.albylibs',
      title: 'Albany Co. Libraries',
      link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=albyweb&library=ALBYLIBS&searchdata1=#{ISBN}',
      have: '0439786770',
      dont: '0967865204',
      missing: 'found no matches' 
    },
    { 
	name: 'us.wy.larmlibs',
	title: 'Laramie County Library System',
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=larmweb&library=LARMLIBS&searchdata1=#{ISBN}',
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.bhnlibs',
	title: 'Big Horn County Libraries',
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=bhnweb&library=BHNLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.camplibs', 
	title: 'Campbell County Library System', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=campweb&library=CAMPLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carblibs', 
	title: 'Carbon County Library System', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carbweb&library=CARBLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.convlibs', 
	title: 'Converse County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=convweb&library=CONVLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crklibs', 
	title: 'Crook County Public Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crkweb&library=CRKLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.fremlibs', 
	title: 'Fremont County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=fremweb&library=FREMLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.johnlibs', 
	title: 'Johnson County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=johnweb&library=JOHNLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linclibs', 
	title: 'Lincoln County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=lincweb&library=LINCLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.natrlibs', 
	title: 'Natrona County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=natrweb&library=NATRLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.parklibs', 
	title: 'Park County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=parkweb&library=PARKLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.platlibs', 
	title: 'Platte County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=platweb&library=PLATLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.sherlibs', 
	title: 'Sheridan County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sherweb&library=SHERLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.subllibs', 
	title: 'Sublette County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sublweb&library=SUBLLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtrlibs', 
	title: 'Sweetwater County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtrweb&library=SWTRLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.tetnlibs', 
	title: 'Teton County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=tetnweb&library=TETNLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.uintlibs', 
	title: 'Uinta County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=uintweb&library=UINTLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.washlibs', 
	title: 'Washakie County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=washweb&library=WASHLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.westlibs', 
	title: 'Weston County Libraries', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=westweb&library=WESTLIBS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.alby-cent', 
	title: 'Albany Co. - Centennial Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=alby-centweb&library=ALBY-CENT&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.alby-rock', 
	title: 'Albany Co. - Rock River Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=alby-rockweb&library=ALBY-ROCK&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.alby', 
	title: 'Albany Co. Public Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=albyweb&library=ALBY&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.bhn-grey', 
	title: 'Big Horn Co. - Greybull Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=bhn-greyweb&library=BHN-GREY&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.bhn-lovl', 
	title: 'Big Horn Co. - Lovell Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=bhn-lovlweb&library=BHN-LOVL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.bhn', 
	title: 'Big Horn Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=bhnweb&library=BHN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.camp-wrig', 
	title: 'Campbell Co. - Wright Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=camp-wrigweb&library=CAMP-WRIG&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.camp', 
	title: 'Campbell Co. Public Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=campweb&library=CAMP&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-enc', 
	title: 'Carbon Co. - Encampment - Riverside Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-encweb&library=CARB-ENC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-hanna', 
	title: 'Carbon Co. - Hanna Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-hannaweb&library=CARB-HANNA&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-lsriv', 
	title: 'Carbon Co. - Little Snake River Valley', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-lsrivweb&library=CARB-LSRIV&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-mbow', 
	title: 'Carbon Co. - Medicine Bow Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-mbowweb&library=CARB-MBOW&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-sart', 
	title: 'Carbon Co. - Saratoga Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-sartweb&library=CARB-SART&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-sinc', 
	title: 'Carbon Co. - Sinclair Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-sincweb&library=CARB-SINC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb-elkmt', 
	title: 'Carbon Co. Elk Mtn Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carb-elkmtweb&library=CARB-ELKMT&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.carb', 
	title: 'Carbon Co. Library System', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=carbweb&library=CARB&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-elel', 
	title: 'Carbon Co. SD2 - Elk Mtn Elem School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-elelweb&library=CCSD-ELEL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-ensc', 
	title: 'Carbon Co. SD2 - Encampment School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-enscweb&library=CCSD-ENSC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-hael', 
	title: 'Carbon Co. SD2 - Hanna Elem School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-haelweb&library=CCSD-HAEL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-hahs', 
	title: 'Carbon Co. SD2 - Hanna-Elk Mtn - High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-hahsweb&library=CCSD-HAHS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-medb', 
	title: 'Carbon Co. SD2 - Medicine Bow Elem School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-medbweb&library=CCSD-MEDB&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-sael', 
	title: 'Carbon Co. SD2 - Saratoga Elem School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-saelweb&library=CCSD-SAEL&searchdata1=#{ISBN}', 
	have: '0394839129',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccsd-sahs', 
	title: 'Carbon Co. SD2 - Saratoga High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccsd-sahsweb&library=CCSD-SAHS&searchdata1=#{ISBN}', 
	have: '0590353403',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.cspc', 
	title: 'Casper College Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=cspcweb&library=CSPC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ccwhc', 
	title: 'Casper College Western History', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ccwhcweb&library=CCWHC&searchdata1=#{ISBN}', 
	have: '0890134359',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.cwc', 
	title: 'Central Wyoming College Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=cwcweb&library=CWC&searchdata1=#{ISBN}', 
	have: '0439136350',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.cchs', 
	title: 'Cheyenne Central High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=cchsweb&library=CCHS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.cehs', 
	title: 'Cheyenne East High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=cehsweb&library=CEHS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.chva', 
	title: 'Cheyenne VA Medical Center', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=chvaweb&library=CHVA&searchdata1=#{ISBN}', 
	have: '0071435263',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.conv-glen', 
	title: 'Converse Co. - Glenrock Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=conv-glenweb&library=CONV-GLEN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.conv', 
	title: 'Converse Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=convweb&library=CONV&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crk-hule', 
	title: 'Crook Co. - Hulett Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crk-huleweb&library=CRK-HULE&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crk-moor', 
	title: 'Crook Co. - Moorcroft Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crk-moorweb&library=CRK-MOOR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crk', 
	title: 'Crook Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crkweb&library=CRK&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crksd-hubr', 
	title: 'Crook Co. SD1 - Hulett School Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crksd-hubrweb&library=CRKSD-HUBR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crksd-moel', 
	title: 'Crook Co. SD1 - Moorcroft Elem School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crksd-moelweb&library=CRKSD-MOEL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crksd-mohs', 
	title: 'Crook Co. SD1 - Moorcroft High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crksd-mohsweb&library=CRKSD-MOHS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 	
	name: 'us.wy.crksd-suel', 
	title: 'Crook Co. SD1 - Sundance Elem School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crksd-suelweb&library=CRKSD-SUEL&searchdata1=#{ISBN}', 
	have: '0439136350',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.crksd-suhs', 
	title: 'Crook Co. SD1 - Sundance High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=crksd-suhsweb&library=CRKSD-SUHS&searchdata1=#{ISBN}', 
	have: '0590353403',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.ewc', 
	title: 'Eastern Wyoming College Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=ewcweb&library=EWC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.frem-dubo', 
	title: 'Fremont Co. - Dubois Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=frem-duboweb&library=FREM-DUBO&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.frem', 
	title: 'Fremont Co. - Lander Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=fremweb&library=FREM&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.frem-rivt', 
	title: 'Fremont Co. - Riverton Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=frem-rivtweb&library=FREM-RIVT&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.gosh', 
	title: 'Goshen Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=goshweb&library=GOSH&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.hspg', 
	title: 'Hot Springs Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=hspgweb&library=HSPG&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.john-kayc', 
	title: 'Johnson Co. - Kaycee Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=john-kaycweb&library=JOHN-KAYC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.john', 
	title: 'Johnson Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=johnweb&library=JOHN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.larm-burn', 
	title: 'Laramie Co. Library - Burns', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=larm-burnweb&library=LARM-BURN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.lccc-acc', 
	title: 'Laramie Co. Community College - Albany Campus', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=lccc-accweb&library=LCCC-ACC&searchdata1=#{ISBN}', 
	have: '0803251882',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.larm-gen', 
	title: 'Laramie Co. Library - Genealogy', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=larm-genweb&library=LARM-GEN&searchdata1=#{ISBN}', 
	have: '1558563318',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.larm-pine', 
	title: 'Laramie Co. Library - Pine Bluffs', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=larm-pineweb&library=LARM-PINE&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.larm-bkmbl', 
	title: 'Laramie Co. Library - Bookmobile', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=larm-bkmblweb&library=LARM-BKMBL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.larm', 
	title: 'Laramie Co. Library - Cheyenne', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=larmweb&library=LARM&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.lccc', 
	title: 'Laramie County Community College', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=lcccweb&library=LCCC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.grandlodge', 
	title: 'Library of the Grand Lodge of Wyoming A.F. & A.M.', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=grandlodgeweb&library=GRANDLODGE&searchdata1=#{ISBN}', 
	have: '0880530855',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linc-alpi', 
	title: 'Lincoln Co. - Alpine Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=linc-alpiweb&library=LINC-ALPI&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linc-coke', 
	title: 'Lincoln Co. - Cokeville Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=linc-cokeweb&library=LINC-COKE&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linc-lbar', 
	title: 'Lincoln Co. - LaBarge Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=linc-lbarweb&library=LINC-LBAR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linc-star', 
	title: 'Lincoln Co. - Star Valley Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=linc-starweb&library=LINC-STAR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linc-thay', 
	title: 'Lincoln Co. - Thayne Branch Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=linc-thayweb&library=LINC-THAY&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.linc', 
	title: 'Lincoln Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=lincweb&library=LINC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.bbhc', 
	title: 'McCracken Research Library - BBHC', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=bbhcweb&library=BBHC&searchdata1=#{ISBN}', 
	have: '0812861000',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.nmwa', 
	title: 'National Museum of Wildlife Art Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=nmwaweb&library=NMWA&searchdata1=#{ISBN}', 
	have: '0679426272',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.natr-edge', 
	title: 'Natrona Co. - Edgerton Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=natr-edgeweb&library=NATR-EDGE&searchdata1=#{ISBN}', 
	have: '0439136350',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.natr-mills', 
	title: 'Natrona Co. - Mills Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=natr-millsweb&library=NATR-MILLS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.natr', 
	title: 'Natrona Co. Public Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=natrweb&library=NATR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },

    { 
	name: 'us.wy.nehs', 
	title: 'Newcastle High School', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=nehsweb&library=NEHS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.niob', 
	title: 'Niobrara Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=niobweb&library=NIOB&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.nwc', 
	title: 'Northwest College - Hinckley Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=nwcweb&library=NWC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.park-meet', 
	title: 'Park Co. - Meeteetse Branch Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=park-meetweb&library=PARK-MEET&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.park-powl', 
	title: 'Park Co. - Powell Branch Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=park-powlweb&library=PARK-POWL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.park', 
	title: 'Park Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=parkweb&library=PARK&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.plat-guer', 
	title: 'Platte Co. - Guernsey Branch Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=plat-guerweb&library=PLAT-GUER&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.plat', 
	title: 'Platte Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=platweb&library=PLAT&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.sher-clear', 
	title: 'Sheridan Co. - Clearmont Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sher-clearweb&library=SHER-CLEAR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.sher-stor', 
	title: 'Sheridan Co. - Story Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sher-storweb&library=SHER-STOR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.sher-triv', 
	title: 'Sheridan Co. - Tongue River Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sher-trivweb&library=SHER-TRIV&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.sher', 
	title: 'Sheridan Co. Fulmer Public Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sherweb&library=SHER&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.shrc-gilc', 
	title: 'Sheridan College - Gillette Campus Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=shrc-gilcweb&library=SHRC-GILC&searchdata1=#{ISBN}', 
	have: '0517580306',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.shrc', 
	title: 'Sheridan College Griffith Mem Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=shrcweb&library=SHRC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.shva', 
	title: 'Sheridan VA Medical Center', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=shvaweb&library=SHVA&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.subl-bigp', 
	title: 'Sublette Co. - Big Piney Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=subl-bigpweb&library=SUBL-BIGP&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.subl', 
	title: 'Sublette Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=sublweb&library=SUBL&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-bair', 
	title: 'Sweetwater Co. - Bairoil Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-bairweb&library=SWTR-BAIR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-gran', 
	title: 'Sweetwater Co. - Granger Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-granweb&library=SWTR-GRAN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-reli', 
	title: 'Sweetwater Co. - Reliance Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-reliweb&library=SWTR-RELI&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-rksp', 
	title: 'Sweetwater Co. - Rock Springs Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-rkspweb&library=SWTR-RKSP&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-super', 
	title: 'Sweetwater Co. - Superior Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-superweb&library=SWTR-SUPER&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-wams', 
	title: 'Sweetwater Co. - Wamsutter Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-wamsweb&library=SWTR-WAMS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr-wmtn', 
	title: 'Sweetwater Co. - White Mtn Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtr-wmtnweb&library=SWTR-WMTN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.swtr', 
	title: 'Sweetwater Co. Library - Green River', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=swtrweb&library=SWTR&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.tetn-alta', 
	title: 'Teton Co. - Alta Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=tetn-altaweb&library=TETN-ALTA&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.tetn-hist', 
	title: 'Teton Co. - Historical Soc Museum', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=tetn-histweb&library=TETN-HIST&searchdata1=#{ISBN}', 
	have: '0930410831',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.tetn', 
	title: 'Teton Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=tetnweb&library=TETN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.uint-lyman', 
	title: 'Uinta Co. - Lyman Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=uint-lymanweb&library=UINT-LYMAN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.uint-mtvw', 
	title: 'Uinta Co. - Mtn View Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=uint-mtvwweb&library=UINT-MTVW&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.uint', 
	title: 'Uinta Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=uintweb&library=UINT&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.wash-tens', 
	title: 'Washakie Co. - Ten Sleep Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=wash-tensweb&library=WASH-TENS&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.wash', 
	title: 'Washakie Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=washweb&library=WASH&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.wsl-wrds', 
	title: 'Water Resources Data System', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=wsl-wrdsweb&library=WSL-WRDS&searchdata1=#{ISBN}', 
	have: '1933115343',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.wwcc', 
	title: 'Western Wy Community College - Hay Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=wwccweb&library=WWCC&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.west-uptn', 
	title: 'Weston Co. - Upton Branch', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=west-uptnweb&library=WEST-UPTN&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.west', 
	title: 'Weston Co. Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=westweb&library=WEST&searchdata1=#{ISBN}', 
	have: '0439786770',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.wsl-law', 
	title: 'Wyoming State Law Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=wsl-lawweb&library=WSL-LAW&searchdata1=#{ISBN}', 
	have: '141330897X',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.wsl', 
	title: 'Wyoming State Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=wslweb&library=WSL&searchdata1=#{ISBN}', 
	have: '0792282965',
	dont: '0967865204',
	missing: 'found no matches' 
    },
    { 
	name: 'us.wy.yrl', 
	title: 'Yellowstone Research Library', 
	link: 'http://wyld.state.wy.us/uhtbin/cgisirsi/x/0/0/57/5?user_id=yrlweb&library=YRL&searchdata1=#{ISBN}', 
	have: '0961454741',
	dont: '0967865204',
	missing: 'found no matches' 
    },
	{
	     name: 'us.pals.byron_area_libraries',
	     title: 'Byron Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BYLYGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.coal_city_braidwood_wilmington',
	     title: 'Coal City, Braidwood, Wilmington',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FRBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.colona_area_public_libraries',
	     title: 'Colona Area Public Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CLNGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cortland_area_libraries',
	     title: 'Cortland Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CTPYGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.davenport_public_libraries',
	     title: 'Davenport Public Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DPLGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_county_libraries',
	     title: 'DeKalb County Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DEKALBCNTY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.des_plaines_valley_public_library_district',
	     title: 'Des Plaines Valley Public Library District',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LKBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.eastern_libraries',
	     title: 'Eastern Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SWSBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.eastern_public_libraries',
	     title: 'Eastern Public Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SWSBGRP02&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fountaindale_public_library',
	     title: 'Fountaindale Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BBBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.highland_district_libraries',
	     title: 'Highland District Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HCCYGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.joliet_public_libraries',
	     title: 'Joliet Public Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JPBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.joliet_township_high_schools',
	     title: 'Joliet Township High Schools',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JCHBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.julia_hull_and_stillman_valley',
	     title: 'Julia Hull and Stillman Valley',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JHLYGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.kankakee_area_libraries',
	     title: 'Kankakee Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KANKANAREA&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.libraries_around_flagg_rochelle_public_library',
	     title: 'Libraries around Flagg-Rochelle Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FRPYGRP02&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.manhattans_neighboring_libraries',
	     title: 'Manhattans Neighboring Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MTBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mazon_verona_kinsman_schools',
	     title: 'Mazon, Verona, Kinsman Schools',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MVKGRP&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.moline_public_libraries',
	     title: 'Moline Public Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MPLGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.morris_area_libraries',
	     title: 'Morris Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MRBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.muscatine_area_libraries',
	     title: 'Muscatine Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MUSGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.northern_libraries',
	     title: 'Northern Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RFSYAREA01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.peotones_neighboring_libraries',
	     title: 'Peotones Neighboring Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PEBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plainfield_area_libraries',
	     title: 'Plainfield Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PLBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_area_libraries',
	     title: 'Plano Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PLANOAREA&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_schools',
	     title: 'Plano Schools',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PHSBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_library_district',
	     title: 'Putnam County Library District',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PCBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_island_public_libraries',
	     title: 'Rock Island Public Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIPGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_library_system_libraries',
	     title: 'Scott County Library System Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SELGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.st_ambrose_area_libraries',
	     title: 'St. Ambrose Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SAUGGRP02&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.st_ambrose_university_libraries',
	     title: 'St. Ambrose University Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SAUGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.stephenson_county_libraries',
	     title: 'Stephenson County Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=STEPHECNTY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.stillman_valley_area_libraries',
	     title: 'Stillman Valley Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SPLYGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.sycamore_area_libraries',
	     title: 'Sycamore Area Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SYLYGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.three_rivers_neighboring_libraries',
	     title: 'Three Rivers Neighboring Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TRBBGRP02&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.three_rivers_public_library_district',
	     title: 'Three Rivers Public Library District',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TRBBGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.western_libraries',
	     title: 'Western Libraries',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CVSGGRP01&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.alleman_high_school',
	     title: 'Alleman High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ALLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.amboy_high_school',
	     title: 'Amboy High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=AMLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '059048592X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.andalusia_public_library',
	     title: 'Andalusia Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ANDG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.annawan_sd_226',
	     title: 'Annawan SD 226',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ASDG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0585065802',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.annawan_alba_public_library',
	     title: 'Annawan-Alba Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=AAPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.ashford_university',
	     title: 'Ashford University',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ASHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.ashton_franklin_ctr_cusd_275_elem_school',
	     title: 'Ashton-Franklin Ctr CUSD 275 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=AC3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0671647482',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.ashton_franklin_ctr_cusd_275_high_school',
	     title: 'Ashton-Franklin Ctr CUSD 275 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ACIY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0812551915',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.belvidere_cusd_100_high_school',
	     title: 'Belvidere CUSD 100 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BHLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0766013677',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bertolet_memorial_library_district',
	     title: 'Bertolet Memorial Library District',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BMLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bettendorf_public_library',
	     title: 'Bettendorf Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BPLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.black_hawk_college',
	     title: 'Black Hawk College',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BHCG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0760770484',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bourbonnais_public_library',
	     title: 'Bourbonnais Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BDBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.boylan_central_catholic_high_school',
	     title: 'Boylan Central Catholic High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BCCY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bradley_public_library',
	     title: 'Bradley Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BRBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bureau_valley_sd_340_high_school',
	     title: 'Bureau Valley SD 340 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BVHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bureau_valley_sd_340_north_jr_high_school',
	     title: 'Bureau Valley SD 340 - North Jr High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BNJG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.bureau_valley_sd_340_south_jr_high_school',
	     title: 'Bureau Valley SD 340 - South Jr High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BSJG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0823406504',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.byron_public_library',
	     title: 'Byron Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BYLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cusd_2_harding_grade_school',
	     title: 'CUSD 2 - Harding Grade School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HGBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cusd_2_serena_elem_school',
	     title: 'CUSD 2 - Serena Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SGBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cusd_2_serena_high_school',
	     title: 'CUSD 2 - Serena High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SHBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cusd_2_sheridan_elem_school',
	     title: 'CUSD 2 - Sheridan Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SSBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.chadwick_public_library',
	     title: 'Chadwick Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CDLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.charles_b_phillips_public_library',
	     title: 'Charles B. Phillips Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CPBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.chdwk/_milldgvill_cusd_399_chadwick_elem/jr_high_school',
	     title: 'Chdwk/ Milldgvill CUSD 399 - Chadwick Elem/Jr High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MW2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.chdwk/_milldgvill_cusd_399_milledgeville_elem_school',
	     title: 'Chdwk/ Milldgvill CUSD 399 - Milledgeville Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MW3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '073682734X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.chdwk/_milldgvill_cusd_399_milledgeville_high_school',
	     title: 'Chdwk/ Milldgvill CUSD 399 - Milledgeville High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MWLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.clinton_community_college',
	     title: 'Clinton Community College',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CCCG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.clinton_township_public_library',
	     title: 'Clinton Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CTPY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.coal_city_public_library',
	     title: 'Coal City Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CCBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.colona_district_public_library',
	     title: 'Colona District Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CLNG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.colona_sd_190_colona_school',
	     title: 'Colona SD 190 - Colona School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CSDG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cordova_district_library',
	     title: 'Cordova District Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CORG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.cortland_community_library',
	     title: 'Cortland Community Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=COLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.creston_dement_public_library',
	     title: 'Creston-Dement Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CRDY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dakota_cusd_201_elem_school',
	     title: 'Dakota CUSD 201 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DA2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1595720545',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dakota_cusd_201_jr/sr_high_school',
	     title: 'Dakota CUSD 201 - Jr/Sr High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DALY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '068986938X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.davenport_public_library_eastern',
	     title: 'Davenport Public Library - Eastern',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DPBG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.davenport_public_library_fairmount',
	     title: 'Davenport Public Library - Fairmount',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DPAG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.davenport_public_library_main',
	     title: 'Davenport Public Library - Main',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DPLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_brooks_elem_school',
	     title: 'DeKalb CUSD 428 - Brooks Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=D10Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1404809678',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_chesebro_elem_school',
	     title: 'DeKalb CUSD 428 - Chesebro Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB1Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_clinton_rosette_middle_school',
	     title: 'DeKalb CUSD 428 - Clinton-Rosette Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB9Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1575421348',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_cortland_elem_school',
	     title: 'DeKalb CUSD 428 - Cortland Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB8Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_dekalb_high_school',
	     title: 'DeKalb CUSD 428 - DeKalb High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DHSY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_huntley_middle_school',
	     title: 'DeKalb CUSD 428 - Huntley Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB7Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_jefferson_elem_school',
	     title: 'DeKalb CUSD 428 - Jefferson Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB6Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_lincoln_elem_school',
	     title: 'DeKalb CUSD 428 - Lincoln Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_littlejohn_elem_school',
	     title: 'DeKalb CUSD 428 - Littlejohn Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB5Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_malta_grade_school',
	     title: 'DeKalb CUSD 428 - Malta Grade School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_tyler_elem_school',
	     title: 'DeKalb CUSD 428 - Tyler Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DB4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_cusd_428_wright_elem_school',
	     title: 'DeKalb CUSD 428 - Wright Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=D11Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dekalb_public_library',
	     title: 'DeKalb Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DKLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.des_plaines_valley_public_library_crest_hill',
	     title: 'Des Plaines Valley Public Library - Crest Hill',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CHBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.des_plaines_valley_public_library_lockport',
	     title: 'Des Plaines Valley Public Library - Lockport',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LKBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dixon_cusd_170_dixon_high_school',
	     title: 'Dixon CUSD 170 - Dixon High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DILY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '080213422X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dixon_cusd_170_jefferson_elem_school',
	     title: 'Dixon CUSD 170 - Jefferson Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DI3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0761302565',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dixon_cusd_170_lincoln_elem_school',
	     title: 'Dixon CUSD 170 - Lincoln Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DI5Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0440466334',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dixon_cusd_170_reagan_middle_school',
	     title: 'Dixon CUSD 170 - Reagan Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DI4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0525671501',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.dixon_cusd_170_washington_elem_school',
	     title: 'Dixon CUSD 170 - Washington Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DI2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0913940054',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.durand_cusd_322_elem_school',
	     title: 'Durand CUSD 322 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DS2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0817201033',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.durand_cusd_322_jr/sr_high_school',
	     title: 'Durand CUSD 322 - Jr/Sr High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.earlville_public_library',
	     title: 'Earlville Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EAPY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.east_dubuque_cusd_321_elem_school',
	     title: 'East Dubuque CUSD 321 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EDEY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.east_dubuque_cusd_321_high_school',
	     title: 'East Dubuque CUSD 321 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EDHY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.east_dubuque_public_library',
	     title: 'East Dubuque Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EDLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0394839129',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.east_moline_correctional_ctr_library',
	     title: 'East Moline Correctional Ctr Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PRIG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.east_moline_public_library',
	     title: 'East Moline Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EMPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.eastland_cusd_308_high_school',
	     title: 'Eastland CUSD 308 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EHSY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.eastland_cusd_308_middle_school',
	     title: 'Eastland CUSD 308 - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LA3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.elizabeth_township_public_library',
	     title: 'Elizabeth Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ELLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.ella_johnson_memorial_public_library',
	     title: 'Ella Johnson Memorial Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EJMY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.erie_cusd_1_high_school',
	     title: 'Erie CUSD 1 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=EHSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.erie_public_library',
	     title: 'Erie Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ERIG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.eswood_school',
	     title: 'Eswood School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ESWY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fhn_health_science_library',
	     title: 'FHN Health Science Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FELY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '047131286X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.figge_art_museum',
	     title: 'Figge Art Museum',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=DPMG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0300106394',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.flagg_rochelle_public_library',
	     title: 'Flagg-Rochelle Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FRPY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.forreston_public_library',
	     title: 'Forreston Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FOLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fossil_ridge_bookmobile',
	     title: 'Fossil Ridge Bookmobile',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FBBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fossil_ridge_public_library_main',
	     title: 'Fossil Ridge Public Library - Main',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FRBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fountaindale_bookmobile',
	     title: 'Fountaindale Bookmobile',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FBKB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fountaindale_public_library_bolingbrook',
	     title: 'Fountaindale Public Library - Bolingbrook',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=BBBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.fountaindale_public_library_romeoville',
	     title: 'Fountaindale Public Library - Romeoville',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RVBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.franklin_grove_public_library',
	     title: 'Franklin Grove Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FGLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_public_library',
	     title: 'Freeport Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FPLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_blackhawk_elem_school',
	     title: 'Freeport SD 145 - Blackhawk Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS8Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0448214717',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_center_elem_school',
	     title: 'Freeport SD 145 - Center Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS7Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0871913216',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_empire_elem_school',
	     title: 'Freeport SD 145 - Empire Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0399609032',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_high_school',
	     title: 'Freeport SD 145 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_jones_farrar_early_learning_ctr',
	     title: 'Freeport SD 145 - Jones-Farrar Early Learning Ctr',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439202108',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_junior_high_school',
	     title: 'Freeport SD 145 - Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_lincoln_douglas_elem_school',
	     title: 'Freeport SD 145 - Lincoln-Douglas Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS5Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0871913216',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_sandburg_middle_school',
	     title: 'Freeport SD 145 - Sandburg Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS6Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0399204245',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.freeport_sd_145_taylor_park_elem_school',
	     title: 'Freeport SD 145 - Taylor Park Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FS9Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0316121290',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.galena_public_library',
	     title: 'Galena Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GALY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.galena_sd_120_high_school_lrc',
	     title: 'Galena SD 120 - High School LRC',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GLLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.galena_sd_120_middle_school_lrc',
	     title: 'Galena SD 120 - Middle School LRC',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GL3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0791018598',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.galena_sd_120_primary_school_lrc',
	     title: 'Galena SD 120 - Primary School LRC',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GL2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0316126500',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.geneseo_public_library',
	     title: 'Geneseo Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GPLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.geneseo_sd_228_geneseo_middle_school',
	     title: 'Geneseo SD 228 - Geneseo Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GJHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0471168564',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.geneseo_sd_228_high_school',
	     title: 'Geneseo SD 228 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GHSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.genesis_med_ctr_east',
	     title: 'Genesis Med Ctr East',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GMEG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1582553475',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.genesis_med_ctr_west',
	     title: 'Genesis Med Ctr West',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GMWG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0070213887',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.genesis_medical_ctr_illini_campus',
	     title: 'Genesis Medical Ctr Illini campus',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ILIG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0585110468',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.genoa_public_library',
	     title: 'Genoa Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GELY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.genoa_kingston_cusd_424_high_school',
	     title: 'Genoa-Kingston CUSD 424 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GKLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439339049',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.graves_hume_public_library',
	     title: 'Graves-Hume Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GVHY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.great_river_medical_ctr',
	     title: 'Great River Medical Ctr',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GRMG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0874341582',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hampton_school_district_29',
	     title: 'Hampton School District 29',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HAMG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hanover_township_library',
	     title: 'Hanover Township Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HNLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.harvard_cusd_50_harvard_high_school',
	     title: 'Harvard CUSD 50 - Harvard High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.harvard_cusd_50_harvard_junior_high_school',
	     title: 'Harvard CUSD 50 - Harvard Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HS2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0871912031',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.harvard_cusd_50_jefferson_elem_school',
	     title: 'Harvard CUSD 50 - Jefferson Elem School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HS4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.henry_c_adams_public_library',
	     title: 'Henry C. Adams Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HCAG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hiawatha_cusd_426_high_school',
	     title: 'Hiawatha CUSD 426 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HHSY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.highland_community_college',
	     title: 'Highland Community College',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HCCY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hillsdale_public_library',
	     title: 'Hillsdale Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MMLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hinckley_public_library',
	     title: 'Hinckley Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HKLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hinckley_big_rock_cusd_429_elem_school',
	     title: 'Hinckley-Big Rock CUSD 429 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HB2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0395874955',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hinckley_big_rock_cusd_429_high_school',
	     title: 'Hinckley-Big Rock CUSD 429 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HBLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.homer_township_bookmobile',
	     title: 'Homer Township Bookmobile',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HBBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.homer_township_public_library_main',
	     title: 'Homer Township Public Library - Main',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HDBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.hononegah_cusd_207_high_school',
	     title: 'Hononegah CUSD 207 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=HCHY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.illinois_veterans_home_manteno',
	     title: 'Illinois Veterans Home - Manteno',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=IHBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1423103181',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.indian_creek_cusd_425_indian_creek_high_school',
	     title: 'Indian Creek CUSD 425 - Indian Creek High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ICLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1581150938',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.indian_creek_cusd_425_indian_creek_middle_school',
	     title: 'Indian Creek CUSD 425 - Indian Creek Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=IC4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.indian_creek_cusd_425_shabbona_elem_school',
	     title: 'Indian Creek CUSD 425 - Shabbona Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=IC2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.indian_creek_cusd_425_waterman_elem_school',
	     title: 'Indian Creek CUSD 425 - Waterman Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=IC3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.johnsburg_cusd_12_bush_elem_school',
	     title: 'Johnsburg CUSD 12 - Bush Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JS4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.johnsburg_cusd_12_high_school_learning_ctr',
	     title: 'Johnsburg CUSD 12 - High School Learning Ctr',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.johnsburg_cusd_12_junior_high_school',
	     title: 'Johnsburg CUSD 12 - Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JS3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439784549',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.johnsburg_cusd_12_ringwood_school_primary_ctr',
	     title: 'Johnsburg CUSD 12 - Ringwood School Primary Ctr',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JS2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0307106020',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.johnsburg_public_library',
	     title: 'Johnsburg Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JOLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.joliet_public_library_black_road',
	     title: 'Joliet Public Library - Black Road',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JBBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.joliet_public_library_main',
	     title: 'Joliet Public Library - Main',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JPBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.joliet_township_high_sd_204_central_campus',
	     title: 'Joliet Township High SD 204 - Central Campus',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JCHB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.joliet_township_high_sd_204_west_campus',
	     title: 'Joliet Township High SD 204 - West Campus',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JWHB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.julia_hull_district_library',
	     title: 'Julia Hull District Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=JHLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.kankakee_public_library',
	     title: 'Kankakee Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KKBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.kaplan_university',
	     title: 'Kaplan University',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KAPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.kings_cusd_144',
	     title: 'Kings CUSD 144',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KNLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.kirkland_public_library',
	     title: 'Kirkland Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KILY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.kishwaukee_college',
	     title: 'Kishwaukee College',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=KIS&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.lasalle_public_library',
	     title: 'LaSalle Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LSBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.lanark_public_library',
	     title: 'Lanark Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LNLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.leclaire_community_library',
	     title: 'LeClaire Community Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LECG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.lemont_public_library',
	     title: 'Lemont Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LMBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.lena_community_public_library',
	     title: 'Lena Community Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LELY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.limestone_township_library',
	     title: 'Limestone Township Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=LIBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.malta_township_public_library',
	     title: 'Malta Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MLLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.manhattan_public_library',
	     title: 'Manhattan Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MTBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.manteno_cusd_5_high_school',
	     title: 'Manteno CUSD 5 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MHSB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.manteno_public_library',
	     title: 'Manteno Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MNBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.maple_park_public_library',
	     title: 'Maple Park Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MPLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.marengo_cusd_154_high_school',
	     title: 'Marengo CUSD 154 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MGLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.marengo_public_library',
	     title: 'Marengo Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MRLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.marian_central_catholic_high_school',
	     title: 'Marian Central Catholic High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MCCY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mazon_verona_kinsman_sd_2c_elem_school',
	     title: 'Mazon-Verona-Kinsman SD 2C - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MVEB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mazon_verona_kinsman_sd_2c_middle_school',
	     title: 'Mazon-Verona-Kinsman SD 2C - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MVMB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.meridian_cusd_223_highland_elem_school',
	     title: 'Meridian CUSD 223 - Highland Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SP4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0394839129',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.meridian_cusd_223_meridian_junior_high_school',
	     title: 'Meridian CUSD 223 - Meridian Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SPLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.meridian_cusd_223_monroe_ctr_elem_school',
	     title: 'Meridian CUSD 223 - Monroe Ctr Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SP3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.meridian_cusd_223_stillman_valley_high_school',
	     title: 'Meridian CUSD 223 - Stillman Valley High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SP2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mills_&_petrie_memorial_library',
	     title: 'Mills & Petrie Memorial Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MPMY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mineral_gold_public_library',
	     title: 'Mineral-Gold Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MGPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mokena_community_public_library',
	     title: 'Mokena Community Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MKBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.moline_public_library',
	     title: 'Moline Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MPLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.moline_sd_40_high_school',
	     title: 'Moline SD 40 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MHSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.moline_sd_40_john_deere_middle_school',
	     title: 'Moline SD 40 - John Deere Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MJDG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0689803583',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.moline_sd_40_wilson_middle_school',
	     title: 'Moline SD 40 - Wilson Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MWMG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.morris_area_public_library',
	     title: 'Morris Area Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MRBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.morrison_sd_6_high_school',
	     title: 'Morrison SD 6 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MOHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.morrison_sd_6_junior_high_school',
	     title: 'Morrison SD 6 - Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MOJG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mount_morris_public_library',
	     title: 'Mount Morris Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MMLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.mt_carroll_township_public_library',
	     title: 'Mt. Carroll Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MCLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.muscatine_community_college',
	     title: 'Muscatine Community College',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MCCG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '067121781X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.musser_public_library',
	     title: 'Musser Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MUSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.new_lenox_public_library',
	     title: 'New Lenox Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NLBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.nippersink_sd_2_middle_school',
	     title: 'Nippersink SD 2 - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NMSY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.north_boone_cusd_200_high_school',
	     title: 'North Boone CUSD 200 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=NBHY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.odell_public_library',
	     title: 'Odell Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MORG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.oglesby_public_library',
	     title: 'Oglesby Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OGBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.orangeville_cusd_203_elem_school',
	     title: 'Orangeville CUSD 203 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OV2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.orangeville_cusd_203_high_school',
	     title: 'Orangeville CUSD 203 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OVLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.oregon_cusd_220_etnyre_elem_school',
	     title: 'Oregon CUSD 220 - Etnyre Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OS3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.oregon_cusd_220_high_school',
	     title: 'Oregon CUSD 220 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.oregon_cusd_220_jefferson_elem_school',
	     title: 'Oregon CUSD 220 - Jefferson Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OS4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.oregon_cusd_220_rahn_junior_high_school',
	     title: 'Oregon CUSD 220 - Rahn Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=OS5Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.oregon_public_library',
	     title: 'Oregon Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ORLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pals_(coal_valley_service_center)',
	     title: 'PALS (Coal Valley Service Center)',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CVSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0786555866',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pals_(rockford_service_center)',
	     title: 'PALS (Rockford Service Center)',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RFSY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0786552778',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pankhurst_memorial_library',
	     title: 'Pankhurst Memorial Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PMLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pearl_city_cusd_200',
	     title: 'Pearl City CUSD 200',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PLLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pearl_city_public_library',
	     title: 'Pearl City Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PCLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pecatonica_cusd_321_high_school',
	     title: 'Pecatonica CUSD 321 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PALY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.pecatonica_public_library',
	     title: 'Pecatonica Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PTLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.peotone_public_library',
	     title: 'Peotone Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PEBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.peru_public_library',
	     title: 'Peru Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PUGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plainfield_public_library',
	     title: 'Plainfield Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PLBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_cusd_88_centennial_elem_school',
	     title: 'Plano CUSD 88 - Centennial Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PCEB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_cusd_88_emily_g_johns_school',
	     title: 'Plano CUSD 88 - Emily G. Johns School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PEJB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_cusd_88_high_school',
	     title: 'Plano CUSD 88 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PHSB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_cusd_88_middle_school',
	     title: 'Plano CUSD 88 - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PMSB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_cusd_88_ph_miller_school',
	     title: 'Plano CUSD 88 - P.H. Miller School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PHMB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0027780090',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.plano_community_library_district',
	     title: 'Plano Community Library District',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PDBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.polo_cusd_222_aplington_middle_school',
	     title: 'Polo CUSD 222 - Aplington Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PO3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.polo_cusd_222_centennial_elem_school',
	     title: 'Polo CUSD 222 - Centennial Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PO2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.polo_cusd_222_polo_community_high_school',
	     title: 'Polo CUSD 222 - Polo Community High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0385321988',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.polo_public_library',
	     title: 'Polo Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=POLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.princeton_public_library',
	     title: 'Princeton Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PRGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.princeton_township_sd_500_high_school',
	     title: 'Princeton Township SD 500 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PTWG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.prophetstown_elem_school',
	     title: 'Prophetstown Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PESG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.prophetstown_high_school',
	     title: 'Prophetstown High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PHSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_public_library_condit',
	     title: 'Putnam County Public Library - Condit',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PTGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_public_library_granville',
	     title: 'Putnam County Public Library - Granville',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=GRGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_public_library_headquarters',
	     title: 'Putnam County Public Library - Headquarters',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PCGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_public_library_magnolia',
	     title: 'Putnam County Public Library - Magnolia',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MGGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_public_library_mcnabb',
	     title: 'Putnam County Public Library - McNabb',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=MCGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_public_library_standard',
	     title: 'Putnam County Public Library - Standard',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SDGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.putnam_county_sd_535_high_school',
	     title: 'Putnam County SD 535 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=PCHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0385321988',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.raymond_a_sapp_memorial_township_library',
	     title: 'Raymond A Sapp Memorial Township Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RAYG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0394839129',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.reddick_library',
	     title: 'Reddick Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RLBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.river_bend_cusd_2_fulton_elem_school',
	     title: 'River Bend CUSD 2 - Fulton Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FESG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '078655567X',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.river_bend_cusd_2_fulton_high_school',
	     title: 'River Bend CUSD 2 - Fulton High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FHSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.river_bend_cusd_2_fulton_middle_school',
	     title: 'River Bend CUSD 2 - Fulton Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FMSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0671647474',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.river_ridge_cusd_210',
	     title: 'River Ridge CUSD 210',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RRHY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.river_valley_district_library',
	     title: 'River Valley District Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RVLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.riverdale_sd_100_elem_school',
	     title: 'Riverdale SD 100 - Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIEG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.riverdale_sd_100_high_school',
	     title: 'Riverdale SD 100 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.riverdale_sd_100_middle_school',
	     title: 'Riverdale SD 100 - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIJG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.robert_r_jones_district_library',
	     title: 'Robert R. Jones District Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CVPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.robert_w_rowe_public_library',
	     title: 'Robert W. Rowe Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ROBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rochelle_sd_212_rochelle_township_high_school',
	     title: 'Rochelle SD 212 - Rochelle Township High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RSLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rochelle_sd_231_central_elem_school',
	     title: 'Rochelle SD 231 - Central Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RE2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rochelle_sd_231_lincoln_elem_school',
	     title: 'Rochelle SD 231 - Lincoln Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RE4Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rochelle_sd_231_may_elem_school',
	     title: 'Rochelle SD 231 - May Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RE5Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rochelle_sd_231_middle_school',
	     title: 'Rochelle SD 231 - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RELY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rochelle_sd_231_tilton_elem_school',
	     title: 'Rochelle SD 231 - Tilton Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RE3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_falls_public_library',
	     title: 'Rock Falls Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RFLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_falls_township_high_school_301',
	     title: 'Rock Falls Township High School 301',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RTLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_island_cnty_historical_society',
	     title: 'Rock Island Cnty Historical Society',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RCHG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0910946159',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_island_public_library_30/31',
	     title: 'Rock Island Public Library - 30/31',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RITG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_island_public_library_main',
	     title: 'Rock Island Public Library - Main',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RIPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_island_public_library_southwest',
	     title: 'Rock Island Public Library - Southwest',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RISG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rock_island_sd_41_high_school',
	     title: 'Rock Island SD 41 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RHSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0670429333',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rockford_lutheran_high_school',
	     title: 'Rockford Lutheran High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RLHY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rockford_public_schools',
	     title: 'Rockford Public Schools',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=RDLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rockridge_sd_300_high_school',
	     title: 'Rockridge SD 300 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ROCG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.rockridge_sd_300_junior_high_school',
	     title: 'Rockridge SD 300 - Junior High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=ROJG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.sandwich_district_library',
	     title: 'Sandwich District Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SABB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.savanna_public_library',
	     title: 'Savanna Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SALY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scales_mound_cusd_211',
	     title: 'Scales Mound CUSD 211',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SMLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.schmaling_memorial_library',
	     title: 'Schmaling Memorial Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=FULG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_community_college',
	     title: 'Scott Community College',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SCCG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_blue_grass',
	     title: 'Scott County -  Blue Grass',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SBGG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_eldridge',
	     title: 'Scott County -  Eldridge',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SELG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_buffalo',
	     title: 'Scott County - Buffalo',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SBUG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_durant',
	     title: 'Scott County - Durant',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SDUG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_princeton',
	     title: 'Scott County - Princeton',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SPRG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_walcott',
	     title: 'Scott County - Walcott',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SWAG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.scott_county_bookmobile',
	     title: 'Scott County Bookmobile',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SBKG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.seneca_public_library',
	     title: 'Seneca Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SEBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.sheffield_public_library',
	     title: 'Sheffield Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SHFG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.sherrard_public_library',
	     title: 'Sherrard Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SHDG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0849959853',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.shorewood_troy_public_library',
	     title: 'Shorewood-Troy Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=STBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.silvis_public_library',
	     title: 'Silvis Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SVPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.somonauk_public_library',
	     title: 'Somonauk Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SNBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.south_beloit_cusd_320_blackhawk_5_6_elem/sb_jr_hs',
	     title: 'South Beloit CUSD 320 - Blackhawk 5-6 Elem./SB Jr HS',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SW2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1569319006',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.south_beloit_cusd_320_riverview_elem_school',
	     title: 'South Beloit CUSD 320 - Riverview Elem. School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SW3Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.south_beloit_high_school_south_beloit_cusd_320',
	     title: 'South Beloit High School - South Beloit CUSD 320',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SWLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0440479002',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.south_beloit_public_library',
	     title: 'South Beloit Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SBLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.st_ambrose_curriculum_library',
	     title: 'St. Ambrose Curriculum Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SAEG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0590353403',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.st_ambrose_university',
	     title: 'St. Ambrose University',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SAUG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.stockton_township_public_library',
	     title: 'Stockton Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SKLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.streator_public_library',
	     title: 'Streator Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SRBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.sycamore_cusd_427_high_school',
	     title: 'Sycamore CUSD 427 - High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SCLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0374332657',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.sycamore_public_library',
	     title: 'Sycamore Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=SYLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.tampico_elementary_school',
	     title: 'Tampico Elementary School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TAEG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.tampico_middle_school',
	     title: 'Tampico Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TAMG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.three_rivers_public_library_channahon',
	     title: 'Three Rivers Public Library - Channahon',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TRBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.three_rivers_public_library_minooka',
	     title: 'Three Rivers Public Library - Minooka',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TMBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.trinity_medical_ctr_library_rock_island',
	     title: 'Trinity Medical Ctr Library - Rock Island',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TRIG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0131970127',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.trinity_medical_ctr_library_terrace_park',
	     title: 'Trinity Medical Ctr Library - Terrace Park',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=TTPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1423709675',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.us_army_corps_of_engineers_technical_library',
	     title: 'US Army Corps of Engineers Technical Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=CRPG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '032119375x',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.united_township_high_school_sd_30',
	     title: 'United Township High School SD 30',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=UTSG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.walnut_public_library',
	     title: 'Walnut Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WALG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.warren_cusd_205_apple_river_middle_school',
	     title: 'Warren CUSD 205 - Apple River Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WA2Y&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.warren_cusd_205_jr/sr_high_school',
	     title: 'Warren CUSD 205 - Jr/Sr High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WALY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.warren_township_public_library',
	     title: 'Warren Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WRLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.west_carroll_cusd_314_middle_school',
	     title: 'West Carroll CUSD 314 - Middle School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WCSY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.western_district_public_library',
	     title: 'Western District Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WDLG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.western_ill_area_agency_aging',
	     title: 'Western ILL Area Agency Aging',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WIAG&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '1425909744',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.wilmington_public_library',
	     title: 'Wilmington Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WLBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.winnebago_high_school',
	     title: 'Winnebago High School',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WQLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439136350',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.winnebago_public_library',
	     title: 'Winnebago Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WPLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.wysox_township_library',
	     title: 'Wysox Township Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=WYLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.york_township_public_library',
	     title: 'York Township Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=YTLY&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	},
	{
	     name: 'us.pals.yorkville_public_library',
	     title: 'Yorkville Public Library',
	     link: 'http://216.125.140.44/uhtbin/cgisirsi/x/0/0/123?searchdata1=#{ISBN}&srchfield1=GENERAL^SUBJECT^GENERAL^^ISBN&library=YKBB&sort_by=ANY%27',
	     dont: '0967865204',
	     have: '0439786770',
	     missing: 'found no matches'
	}

  ];
