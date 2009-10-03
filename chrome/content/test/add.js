var $ = function(id) { return document.getElementById(id); };

function match() {
  $('missing_text').hidden = true;
  $('found_text').hidden = true;
}

function found() {
  $('missing_text').hidden = true;
  $('found_text').hidden = false;
  $('found_text').focus();
}

function missing() {
  $('found_text').hidden = true;
  $('missing_text').hidden = false;
  $('missing_text').focus();
}

function query() {
  $('tester').setAttribute('src',$('link').value);
}

function have(event) {
  var target = event.target;
  var value = target.value;
  if (value[value.length-1]==',') {
    var input = document.createElement('textbox');
    target.parentNode.appendChild(input);
    target.value = value.substring(0,value.length-1);
    input.setAttribute('oninput', 'have(event)');
    input.setAttribute('onblur', 'update(event)');
    input.focus();
  }
}

function update(event) {

}

/*
 * library idea:
 *   the name autocompletes on existing libraries on the server
 *   typing the name of an existing loads it
 *   saving updates
 *   quick access to 10 most recent
 *   testing app views all and has quick link to edit
 *
 * testing idea:
 *   the isbn autocompletes on the history of ISBNs
 *   on change of textfield it marks the isbn as not tested
 *   on change of match/link it marks all isbns as not tested
 *   when you click test it tests them all, showing a small icon next to textbox
 *   clicking the icon next textbox it loads the document in the iframe
 */