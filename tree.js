function Toggle(e) {
	if(!document.getElementById) return;
	if(!e) var e = window.event;
	whichlink = (e.target) ? e.target.id : e.srcElement.id;
	obj=document.getElementById(whichlink+"menu");
	visible=(obj.style.display=="block");
	key=document.getElementById(whichlink);
	keyname=key.firstChild.nodeValue.substring(3);
	if (visible) {
		obj.style.display="none";
		key.firstChild.nodeValue = "[+]" + keyname;
	} else {
		obj.style.display="block";
		key.firstChild.nodeValue = "[-]" + keyname;
	}
}
document.getElementById("myhtml").onclick=Toggle;
document.getElementById("mycss").onclick=Toggle;
document.getElementById("js").onclick=Toggle;


