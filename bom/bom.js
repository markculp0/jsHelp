// ==================================
// Exploring the Browser Object Model
// ==================================

// Main heading
var mnHead = 'BOM Properties and Methods';

// Add main heading
var pEl = document.getElementById('mainHd');
pEl.textContent = mnHead;

var array = [];

// Window Excluding UI
var inWd = 'window.innerWidth: ' + window.innerWidth;
array[0] = inWd;
var inHt = 'window.innerHeight: ' + window.innerHeight;
array[1] = inHt;

// Browser/Screen Including UI
var scrWd = 'window.screen.width: ' + window.screen.width;
array[2] = scrWd;
var scrHt = 'window.screen.height: ' + window.screen.height;
array[3] = scrHt;

// Screen Coordinates
var scrX = 'window.screenX: ' + window.screenX;
array[4] = scrX;
var scrY = 'window.screenY: ' + window.screenY;
array[5] = scrY;

// Page Offsets
var pgXOffset = 'window.pageXOffset: ' + window.pageXOffset;
array[6] = pgXOffset;
var pgYOffset = 'window.pageYOffset: ' + window.pageYOffset;
array[7] = pgYOffset;

// Document / Screen
var doc = 'window.document: ' + window.document;
array[8] = doc; 
var scrn = 'window.screen: ' + window.screen;
array[9] = scrn; 

// Location / History
var loc = 'window.location: ' + window.location;
array[10] = loc;
var hist = 'window.history: ' + window.history;
array[11] = hist;
var histLen = 'window.history.length: ' + window.history.length;
array[12] = histLen;

// Methods
var lert = 'window.alert()';
array[13] = lert;
var op = 'window.open()';
array[14] = op;
var prn = 'window.print()';
array[15] = prn;

// Get list elements and set text nodes
for (var i=0; i<16; i++){
	var lstEl = 'li' + i;
	var lstEl = document.getElementById(lstEl);
	lstEl.textContent = array[i];
}











