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
		return '下长绿，有折的时候前一天的K线有长上影或长下影。';
	}else if(imgSrc.indexOf("2018-05-30_124832") != -1) {
		return '下长绿，确认现价线前方的距离不能太大。';
	}else if(imgSrc.indexOf("2018-06-01_103745") != -1) {
		return '下白绿下，TZB集束高度集中的时候，可以允许确认现价线向下且在极低的位置。';
	}else if(imgSrc.indexOf("2018-06-01_130611") != -1||imgSrc.indexOf("2018-06-01_131918") != -1) {
		return '上白红上，首先的共同点是现价确认线是平级向上的，它们之间的距离是在变小的，有两种形态，一种是横穿V向上，TZB分散；另一种是贴类V底部向上，TZB一直相对集中不是分散向上。';
	}else if(imgSrc.indexOf("2018-06-02_143552") != -1) {
		return '上白黄上，当前的为TZB横穿向上，也有另一种情况是包围TZB3向上的。';
	}else if(imgSrc.indexOf("2018-06-02_151844") != -1||imgSrc.indexOf("2018-06-02_152410") != -1) {
		return '上白绿下，不管是全V还是半V，TZB3地最下方。';
	}else if(imgSrc.indexOf("2018-06-02_153245") != -1) {
		return '上红白下，当前集的V高度集束，几乎是一条线的，而且前面的红特别短，只有一天。';
	}else if(imgSrc.indexOf("2018-06-02_153648") != -1||imgSrc.indexOf("2018-06-02_154659") != -1) {
		return '上红白下，当前的红色较长。V可大可小，大V多为横穿，小V先集再形成V。';
	}else if(imgSrc.indexOf("2018-06-02_184933") != -1) {
		return '上长绿，变种有很多，有V横穿。';
	}else if(imgSrc.indexOf("2018-06-03_090356") != -1) {
		return '上长红，直上的时候，确认线会向现价线靠近。';
	}else if(imgSrc.indexOf("2018-06-03_103334") != -1) {
		return '上白红上，多发生于庄家均线上穿或者接触的时候，直上的时候，有两种一种TZB集束在低们，但是相当集中；另一种是分散的，但是已经接近高位了。';
	}else if(imgSrc.indexOf("2018-06-03_104332") != -1) {
		return '上白红上，红三兵，前方的TZB3已经到达100，当前的TZB3不会减少太多，会在高位。';
	}else if(imgSrc.indexOf("2018-06-03_111247") != -1) {
		return '上白红上，前方是白V，当前的TZB集会一直向上。';
	}else if(imgSrc.indexOf("2018-06-03_161658") != -1) {
		return '上红白下，变种有很多，要注意，在集中，也有分散的，但是确认现价线的形态大多致。';
	}
	
	
	
	
	
	else {
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
	
	var  list_div=document.getElementsByClassName("list_key");
	for(var i=0;i<list_div.length;i++){
	 var imgS=	list_div[i].children[1];
		imgS.src="img/up.png";
	}
}
