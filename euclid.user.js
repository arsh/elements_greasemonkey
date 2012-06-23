// ==UserScript==
// @name euclid
// @namespace arsh
// @match http://aleph0.clarku.edu/~djoyce/java/elements/*
// ==/UserScript==

var links = document.getElementsByTagName("a");
var patt=/post\d\.html/
var bigStart=/<big>/
var bigEnd=/<\/big>/
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (patt.test(link.href)) {
	//alert(link.innerHTML);
	GM_xmlhttpRequest({
	    method: "GET",
	    url: link.href,
	    onload: function(response) {
		var rt = response.responseText;
		//alert(rt);
		var s = rt.search("<big>");
		var e = rt.search("</big>");
		var p = rt.substring(s + 5, e);
		link.title = p;
		link.innerHTML = p;
		alert("setting: " + p);
	    }
	});	
    }
}