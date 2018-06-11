
function showImg(img) {

	var dia = document.getElementById("ok_dialog");
	//alert(img.style.backgroundImage);
	var my_ss = document.getElementById('my-img');
	var str_url = img.style.backgroundImage;
    var imgStr=img.getAttribute('ok').split(',');
    var showB=document.getElementById('show-bian');
    	if(img.getAttribute('ok')===''){
    		showB.innerHTML='显示变种(无)'
    	}else{
            showB.innerHTML='显示变种(有)'
          for(var j=0;j<imgStr.length;j++){
	    	var img=document.createElement('img');
	    	img.src="images/"+imgStr[j]+".png";
	    	img.style.borderBottom="0.4rem solid white"
	    	img.style.width="99%";
	    	img.style.marginLeft="0.5%";
	    	img.style.marginBottom="0.7rem";
	    	img.style.display="none";
	    	img.setAttribute("class","show-all-img"); 
	    	dia.appendChild(img);
	    	
	    	
	    	
	      }
    	}      

	var ls_scr = str_url.substr(str_url.indexOf('img'), str_url.length);
	ls_scr = ls_scr.substr(0, ls_scr.length - 1);
	var text = document.getElementById('explain');
	text.innerHTML = getStr(str_url);
	my_ss.src = ls_scr;
	document.body.style.overflowY = 'hidden';
	dia.style.display = "block";
	dia.style.overflowY = "scroll";

	dia.onclick = function() {
        var imgs=document.getElementsByClassName('show-all-img');
		  for(var i=0;i<imgs.length;i++){
			dia.removeChild(imgs[i]);
		  }
		document.body.style.overflowY = 'scroll'
		dia.style.display = "none";
	  
	};





  var obj3=document.getElementById('show-bian');  
  obj3.addEventListener('click',function(e){

  	show();
  	e.stopPropagation();
  	},true);

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
		return '上红白下，变种有很多，要注意，在集中，也有分散的，但是确认现价线的形态大多一致。';
	}else if(imgSrc.indexOf("2018-06-03_203912") != -1) {
		return '下长红，全L型，这类股票下集束基本平走，当天表现为确认现价平走，代表有20180510的兄弟科技和20180308的华药业。';
	}else if(imgSrc.indexOf("2018-06-03_210405") != -1) {
		return '下长红，短下一般，这类确认现价线还有向上距离变大的情况出现。';
	}else if(imgSrc.indexOf("2018-06-03_212220") != -1) {
		return '下长红，此形态的股票，要么确认已经靠近现价线或者确认线已经下穿了；特殊的当TZB3达不到100的时候，所表现的是确认现价线之间的距离会变大。';
	}
	
	else if(imgSrc.indexOf("2018-06-04_102007") != -1) {
		return '下绿白上，V穿的形态是TZB3从最小发展成最大的过程。';
	}else if(imgSrc.indexOf("2018-06-04_093303") != -1) {
		return '下绿白上，倒V比较少见。';
	}else if(imgSrc.indexOf("2018-06-04_093850") != -1) {
		return '下绿白上，并阴比较少见。';
	}else if(imgSrc.indexOf("2018-06-04_094457") != -1) {
		return '下绿白上，二接力表现有一个小折再向上。';
	}else if(imgSrc.indexOf("2018-06-04_100322") != -1) {
		return '下绿白上，并阳比较少见。';
	}else if(imgSrc.indexOf("2018-06-04_094750") != -1) {
		return '下绿白上，弯折上的K线的下影线长的确认现价线的距离变大；K线的上影线长的确认现价线的距离变小。';
	}else if(imgSrc.indexOf("2018-06-04_110905") != -1) {
		return '下长白，全V的前方有平集束，全V的变种较多并且常见，要注意，但不会变太大，多是现价确认线不一样。';
	}else if(imgSrc.indexOf("2018-06-04_125945") != -1) {
		return '上长白，向下有明显的确认线穿现价线。';
	}else if(imgSrc.indexOf("2018-06-04_130418") != -1) {
		return '上长白，全V在低位的时候表现为TZB3上穿，在高位的时候未达到100接近100的也算的。';
	}else if(imgSrc.indexOf("2018-06-05_084815") != -1) {
		return '上绿白上，前上集的确认现价线的表现为行平，距离变小或者相交等等。';
	}else if(imgSrc.indexOf("2018-06-05_085230") != -1) {
		return '上绿白上，上穿的变种较多，确认线表现为上穿或者靠近。';
	}else if(imgSrc.indexOf("2018-06-05_085715") != -1) {
		return '上绿白上，前上穿表现为前方有过TZB3上穿，3日均线即将上穿5日均线。';
	}else if(imgSrc.indexOf("2018-06-06_091128") != -1) {
		return '上绿白上，类V折，也可是倒梯形，TZB3大部分时间都最大。';
	}else if(imgSrc.indexOf("2018-06-05_101436") != -1) {
		return '上绿白V下，确认线在上方或者下方都是可以的，半V下穿的表现为TZB3从最高到最低的现像，确认现价线的距离变小。';
	}else if(imgSrc.indexOf("2018-06-05_102130") != -1) {
		return '上绿白V下，半V未穿的表现为TZB3最高的时候，表现为上穿；当TZB3在中间的时候，表现为确认线已经上穿，并且确认现价线之间的距离变短。';
	}else if(imgSrc.indexOf("2018-05-25_213214") != -1) {
		return '上绿白V下，二分集表现为两份集束走向。';
	}else if(imgSrc.indexOf("2018-06-06_120214") != -1) {
		return '下绿白V下，二分表现确认现价线和距离可大可小。';
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


function show(){
	Toast('很快会显示。',2000);
	
	var dia = document.getElementById("ok_dialog");
	var imgs=document.getElementsByClassName('show-all-img');
	//alert(imgs[0].src);
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.display="block";
	}
	
}
