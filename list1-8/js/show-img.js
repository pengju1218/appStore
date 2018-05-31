function showImg(img) {

	var dia = document.getElementById("ok_dialog");
	//alert(img.style.backgroundImage);
	var my_ss = document.getElementById('my-img');
	var str_url = img.style.backgroundImage;
	var ls_scr = str_url.substr(str_url.indexOf('img'), str_url.length);
	ls_scr = ls_scr.substr(0, ls_scr.length - 1);
	var text = document.getElementById('explain');
	text.innerHTML = getStr(str_url);
	my_ss.src = ls_scr;
	document.body.style.overflowY = 'hidden'
	dia.style.display = "block";
	dia.style.overflowY = "scroll";

	dia.onclick = function() {

		document.body.style.overflowY = 'scroll'
		dia.style.display = "none";

	};

}

function getStr(imgSrc) {
	if(imgSrc.indexOf("2018-05-25_213150") != -1) {
		return ''
	}else if(imgSrc.indexOf("2018-05-30_124720") != -1) {
		return '下长绿有折的时候前一天的K线有长上影或长下影。';
	}else if(imgSrc.indexOf("2018-05-30_124832") != -1) {
		return '确认现价线前方的距离不能太大。';
	}else {
		return '';
	}

}

function getPos(o) //取元素坐标  
{
	var x = 0,
		y = 0;
	do {
		x += o.offsetLeft;
		y += o.offsetTop;
	} while (o = o.offsetParent);
	return {
		'x': x,
		'y': y
	};

}

function getItem() {

	var items = document.getElementsByClassName('show-img');
	for(var i = 0; i < items.length; i++) {
		var title = items.item(i).getElementsByTagName('font')[0];
		var obj = getPos(items.item(i));
		//if(i==0){

		//alert(obj.x+"----------"+obj.y);
		//}
		//	alert(obj.x);

		title.style.left = obj.x + 'px';
		var yy = obj.y + 20;
		title.style.top = yy + "px";
		//if(i==0){

		//alert(title.style.left+"----------"+title.style.top);
		//}
	}

}

function fold(obj){
	
	var imgS=obj.children[1];
	

	 var div1=obj.nextElementSibling;
    if(div1.style.display=="block"){
        div1.style.display="none";
       imgS.src="img/up.png";

    }else{
        div1.style.display="block";
       imgS.src="img/down.png";
         
    }
}

function refresh(){
	var divs=document.getElementsByClassName("list_album");
	for(var i=0;i<divs.length;i++){
		divs[i].style.display="none";
	}
	
}
