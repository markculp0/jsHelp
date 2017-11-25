
// ===================================
// Exploring the Document Object Model
// ===================================

// Main heading
var mnHead = 'Global Properties and Methods';

// Add main heading 
var pEl = document.getElementById('mainHd');
pEl.textContent = mnHead;

array = [];

var aStr = 'bob';

// String Length
var len = 'aStr.length; ' + aStr.length;
array[0] = len;

// Set Case
var upCase = 'aStr.toUpperCase(); ' + aStr.toUpperCase();
array[1] = upCase;
var loCase = 'aStr.toLowerCase(); ' + aStr.toLowerCase();
array[2] = loCase;

// Index
var chAt = 'aStr.charAt(1); ' + aStr.charAt(1);
array[3] = chAt;
var iOf = 'aStr.indexOf(\'b\'); ' + aStr.indexOf('b');
array[4] = iOf;
var lIOf = 'aStr.lastIndexOf(\'b\'); ' + aStr.lastIndexOf('b');
array[5] = lIOf;

// Split / Trim / Replace
var splt = 'aStr.split(\'o\'); ' + aStr.split('o');
array[6] = splt;
var trm = '\' bob \'.trim(\' bob \'); ' + ' bob '.trim();
array[7] = trm;
var rplc = 'aStr.replace(\'ob\'\, \'ig\'); ' + aStr.replace('ob', 'ig');
array[8] = rplc;

// Get list elements and set text nodes
for (var i=0; i<9; i++){
	var lstEl = 'li' + i;
	var lstEl = document.getElementById(lstEl);
	lstEl.textContent = array[i];
}




