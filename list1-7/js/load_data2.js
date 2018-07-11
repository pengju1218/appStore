



function getKey(title){
	
	
	switch(title){
		case '上白红上': return json.up_white_red_up; break;
		case '上白黄上': return json.up_white_yellow_up; break;
		case '上白绿下': return json.up_white_green_down; break;
		case '上红白下': return json.up_red_white_down; break;
		case '上红黄上': return json.up_red_yellow_up; break;
		case '上黄白下': return json.up_yellow_white_down; break;
		case '上黄红平': return json.up_yellow_red_flat; break;
		case '上绿白V下': return json.up_green_white_V_down; break;
		case '上绿白上': return json.up_green_white_up; break;
		case '上长白': return json.up_long_white; break;
		case '上长红': return json.up_long_red; break;
		case '上长黄': return json.up_long_yellow; break;
		case '上长绿': return json.up_long_green; break;
		case '下白红上': return json.down_white_red_up; break;
		case '下白绿下': return json.down_white_green_down; break;
		case '下红白下': return json.down_red_white_down; break;
		case '下绿白V下': return json.down_green_white_V_down; break;
		case '下绿白上': return json.down_green_white_up; break;
		case '下长白': return json.down_long_white; break;
		case '下长红': return json.down_long_red; break;
		case '下长绿': return json.down_long_green; break;
	}
		
}





function fetchJson(){
	var add_list=document.getElementById("playbox1");
	var my_title=document.getElementsByClassName("mui-title")[0];
	var key=getKey(my_title.innerHTML);
    add_list.innerHTML=key;
}



function closeWin() {
	window.location.href = "../choice72.html";
	//history.go(-1);
	api.closeWin({});
}