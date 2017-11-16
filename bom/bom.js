
var msg = 'BOM Properties and Methods';

// Window Excluding UI
var inWd = 'window.innerWidth: ' + window.innerWidth;
var inHt = 'window.innerHeight: ' + window.innerHeight;

// Window Including UI
var scrWd = 'window.screen.width: ' + window.screen.width;
var scrHt = 'window.screen.height: ' + window.screen.height;

var pEl = document.getElementById('myMsg');
pEl.innerHTML = msg;

var li0 = document.getElementById('li0');
li0.innerHTML = inWd;

var li1 = document.getElementById('li1');
li1.innerHTML = inHt;

var li2 = document.getElementById('li2');
li2.innerHTML = scrWd;

var li3 = document.getElementById('li3');
li3.innerHTML = scrHt;




