// ===================================
// Exploring the Document Object Model
// ===================================


// Main heading
var mnHead = 'DOM Properties and Methods';

// Add main heading 
var pEl = document.getElementById('mainHd');
pEl.textContent = mnHead;

array = [];

// Title / Modified
var dt = 'document.title: ' + document.title;
array[0] = dt;
var lm = 'document.lastModified: ' + document.lastModified;
array[1] = lm;

// URL / Domain
var url = 'document.URL: ' + document.URL;
array[2] = url;
var domn = 'document.domain: ' + document.domain;
array[3] = domn;

// Write
var wrt = 'document.write()';
array[4] = wrt;

// Get Element by ID / Query Selector All
var getByID = 'document.getElementById()';
array[5] = getByID;
var qrySelAll = 'document.querySelectorAll()';
array[6] = qrySelAll;

// Create Element / Create TextNode
var createEl = 'document.createElement()';
array[7] = createEl;
var createTN = 'document.createTextNode()';
array[8] = createTN;

// Get list elements and set text nodes
for (var i=0; i<9; i++){
	var lstEl = 'li' + i;
	var lstEl = document.getElementById(lstEl);
	lstEl.textContent = array[i];
}




