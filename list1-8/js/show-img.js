function showImg(img) {

	var dia = document.getElementById("ok_dialog");
	var my_ss = document.getElementById("my-img");
	var ls_scr = img.src.substr(img.src.indexOf('img'), img.src.length);
	
	my_ss.src = ls_scr;
	document.body.style.overflowY = 'hidden'
	dia.style.display = "block";
	dia.style.overflowY = "scroll";

	dia.onclick = function() {
		document.body.style.overflowY = 'scroll'
		dia.style.display = "none";
	};

}