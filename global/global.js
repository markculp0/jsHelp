
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

// -----------------
// String Properties
// -----------------
// String Length
var len = 'aStr.length; ' + aStr.length;
array[0] = len;

// ---------------
// String Methods
// ---------------
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

// -----------------
// Numeric Methods
// -----------------
var num = 1.2345;

// Check if Not a Number
var nan = 'isNaN(num); ' + isNaN(num);
array[9] = nan;

// Fixed Precis Expon
var fix = 'num.toFixed(2); ' + num.toFixed(2);
array[10] = fix;
var precis = 'num.toPrecision(2); ' + num.toPrecision(2);
array[11] = precis;
var expo = 'num.toExponential(); ' + num.toExponential();
array[12] = expo;

// ---------------
// Math Properties
// ---------------

// Pi
var pie = 'Math.PI; ' + Math.PI;
array[13] = pie;

// ------------
// Math Methods
// ------------

// Round Ceiling Floor
var rnd = 'Math.round(num); ' + Math.round(num);
array[14] = rnd;
var ceil = 'Math.ceil(num); ' + Math.ceil(num);
array[15] = ceil;
var floor = 'Math.floor(num); ' + Math.floor(num);
array[16] = floor;

// Sqrt Random
var sqrt = 'Math.sqrt(9); ' + Math.sqrt(9);
array[17] = sqrt;
var rand = 'Math.random(); ' + Math.random();
array[18] = rand;
 
// Get list elements and set text nodes
for (var i=0; i<19; i++){
	var lstEl = 'li' + i;
	var lstEl = document.getElementById(lstEl);
	lstEl.textContent = array[i];
}




