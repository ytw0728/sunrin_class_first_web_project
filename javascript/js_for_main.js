
window.onload = function(){

	alert(" 제작 시 사용한 비율은 1366 x 768 입니다.");

	var container = document.getElementById("container");
	var container_1 = document.getElementById("container_1");
	var container_2 = document.getElementById("container_2");
	var container1 = document.getElementById("container1");

// 형태 부분	
	show_images();
	make_textpart();
	make_blackpart();
	
	make_style();

// 이벤트 부분
	document.getElementById("up").onclick = go_main;			// 메인으로가기
	document.getElementById("up_1").onclick = go_cont;		// 소개로가기.

	for( i = 0 ; i < img_count; i++){
		var id = "round_img"+i;
		document.getElementById(id).ondragstart = cursor_x;		//첫 x좌표받기
		document.getElementById(id).ondragover = drag_img;			//중간 x좌표받고 비교해서 옮기기
		document.getElementById(id).ondragend = path_direc;			//마지막 x 좌표 받아서 방향 정하기
	}

	document.getElementById("image_1").onmouseenter = do_click;	//클릭하라고 알려주기
	document.getElementById("image_1").onclick = stop;					//그림 움직임 멈추기
	document.getElementById("image_1").onmouseleave = restart;		// 그림 움직임 다시가기
	document.getElementById("image_1").ondragstart = cursor_x;		//첫 x좌표받기
	document.getElementById("image_1").ondragover = drag_img;      //마중간 x좌표받고 비교해서 옮기기
	document.getElementById("image_1").ondragend = path_direc;	  //마지막 x좌표 받아서 방향정하기



	

}
//이벤트 핸들러 black

var t  = document.getElementsByName(0);
var p = document.getElementsByClassName("black_part_text");
var black_opacity = 0.7;
var bright_handler;
var tmp_point;
function bright(i){
	document.getElementsByName(0)[i].style.cursor = "pointer";
	
	tmp_point = i;
	bright_handle();
}
function bright_handle(){


	if(black_opacity <= 1){
				for(i = 0 ; i <6; i++){
					if(i == tmp_point){
						t[i].style.opacity = black_opacity;
						p[i].style.opacity = black_opacity;
					}
					else{
						t[i].style.opacity = 0.3;
						p[i].style.opacity = 0.3;
					}
				}
		black_opacity += 0.1;
		clearTimeout(bright_handler);
		bright_handler = setTimeout("bright_handle()",10);
	}
	else return 0;
}
function re_dark(){
	clearTimeout(bright_handler);

	black_opacity = 0.7;

	for(i = 0 ; i< 6; i++){
		t[i].style.opacity = 0.7;
		p[i].style.opacity =0.7;
	}
}


function wiki(i){
	var a ="https://www.google.co.kr/?gfe_rd=cr&ei=dM15VNrpKsPJ8gf4mYDQDQ#newwindow=1&q=%ED%8F%B4+%EC%BC%80%EC%9D%B4%EB%93%A0"; 
	var b ="https://www.google.co.kr/search?q=%EB%A1%9C%EC%9D%B4+%EB%A6%AC%ED%9E%88%ED%85%90%EC%8A%88%ED%83%80%EC%9D%B8&oq=%EB%A1%9C%EC%9D%B4+%EB%A6%AC%ED%9E%88%ED%85%90%EC%8A%88%ED%83%80%EC%9D%B8&aqs=chrome.0.69i59j0l4.7509j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";
	var c ="https://www.google.co.kr/search?q=%EB%A7%88%EC%9D%B4%ED%81%B4+%EC%BC%80%EB%82%98&oq=%EB%A7%88%EC%9D%B4%ED%81%B4+%EC%BC%80%EB%82%98&aqs=chrome.0.69i59j69i65j0l4.4939j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";
	var d ="https://www.google.co.kr/search?q=%EC%95%88%EB%8B%A4%EB%B9%88&oq=%EC%95%88%EB%8B%A4%EB%B9%88&aqs=chrome.0.69i59j0l5.2454j0j9&sourceid=chrome&es_sm=93&ie=UTF-8" ;
	var e ="https://www.google.co.kr/search?q=%EC%9E%A5+%EB%AF%B8%EC%85%B8+%EB%B0%94%EC%8A%A4%ED%82%A4%EC%95%84&oq=%EC%9E%A5+%EB%AF%B8%EC%85%B8+%EB%B0%94%EC%8A%A4%ED%82%A4%EC%95%84&aqs=chrome.0.69i59j0l4.2744j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";
	var f ="https://www.google.co.kr/search?q=%ED%82%A4%EC%8A%A4+%ED%95%B4%EB%A7%81&oq=%ED%82%A4%EC%8A%A4+%ED%95%B4%EB%A7%81&aqs=chrome..69i57j0l5.1799j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";

	var urls = [ a , b , c , d , e , f ];

	window.open(urls[i],"_blank");
}

//이벤트 핸들러 white
function next_text(){
	
			clearInterval(textpart_event);
			make_textpart();
			textpart_event = setInterval( function make_textpart(){
				var out = "";
				out += show_text(out);
				container_1.innerHTML = out;
				animation_textpart();
			},12000);
};
function cursor(){
	document.getElementById("content_1").style.cursor = "pointer";
}

function href_(i){
	var here = "gallery.html#"+i+"";
	window.open( here ,"_blank");
}
var help_top = -10;
var help_opacity = 0;
var help_time = 0;
var do_click_handler;

function do_click(){
	document.getElementById("image_1").style.cursor = "pointer";
	
	do_click_handle();
}
function do_click_handle(){
	if(help_time<10){
		document.getElementById("help").style.opacity = help_opacity;
		document.getElementById("help").style.top = help_top + "px";
		help_time++;
		help_opacity += 0.1;
		help_top +=1;
		clearTimeout(do_click_handler);
		do_click_handler = setTimeout("do_click_handle()",50);
	}
	else return 0;
}

var help_1_time = 0;
var help_1_top = - 10;
var help_1_opacity = 0;
var stop_handler;
function stop(){
	clearInterval(move);
	clearTimeout(do_click_handler);
	document.getElementById("image_1").style.cursor = "pointer";
	
	help_1_opacity = 0;
	help_1_top = -10;
	document.getElementById("help").style.opacity = help_1_opacity;
	document.getElementById("help").style.top = help_1_top + "px";


	help_1_top = - 10;
	help_1_opacity = 0;

	stop_handle();
}
function stop_handle(){
	if(help_1_time < 10){
		document.getElementById("help_1").style.opacity = help_1_opacity;
		document.getElementById("help_1").style.top = help_1_top + "px";
		help_1_time++;
		help_1_opacity += 0.1;
		help_1_top += 1;
		clearTimeout(stop_handler);	
		stop_handler = setTimeout("stop_handle()",50); 
	}
	else return 0;
}

function restart(){

	clearTimeout(move);
	clearTimeout(stop_handler);
	clearTimeout(do_click_handler);

	move = setInterval(move_img,20);
	
	help_time = 0;
	help_1_time = 0;
	
	help_opacity = 0;
	help_top = -10;

	help_1_opacity = 0;
	help_1_top = -10;
	
	document.getElementById("help").style.opacity = help_opacity;
	document.getElementById("help").style.top = help_top + "px";
	
	document.getElementById("help_1").style.opacity = help_1_opacity;
	document.getElementById("help_1").style.top = help_1_top + "px";
}
var x_before = 0;
var x_before_temp = 0;
var x_after = 0;
var x_drag = 0;

var x_move = 0;

function cursor_x(){
	clearTimeout(do_click_handler);
	help_top = 0;
	help_opacity = 1;
	help_time =10;
	document.getElementById("help").style.top = help_top + "px";
	document.getElementById("help").style.opacity = help_opacity;

	
	document.getElementById("image_1").style.cursor = "move";	

	x_before = event.clientX;
	x_before_temp = x_before;
}
function drag_img(){
	clearTimeout(do_click_handler);
	help_top = 0;
	help_opacity = 1;
	help_time = 10;
	document.getElementById("help").style.top = help_top+"px";
	document.getElementById("help").style.opacity = help_opacity;

	document.getElementById("image_1").style.cursor = "move";

	x_drag = event.clientX;
	x_move =  x_before_temp - x_drag;
	x_before_temp = x_drag;
	right += x_move;
}

function path_direc(){
	clearTimeout(do_click_handler);
	help_top = 0;
	help_opacity = 1;
	help_time = 10;
	document.getElementById("help").style.top = help_top + "px";
	document.getElementById("help").style.opacity = help_opacity;


	document.getElementById("image_1").style.cursor = "pointer";

	x_after = event.clientX;
	var check_path = x_before - x_after;
	if(right < 0 ) right = 0;
	else if( right > img_array_weight ) right = img_array_weight;
	else{
		if(check_path < 0) path = 0;
		else path = 1;
	}

}


//white

var txt = 0;
var img_count = 20;
var painter_count = 6;


function make_textpart(){																															// make group

	var out = "";
	out += show_text(out);
	container_1.innerHTML = out;
	animation_textpart();
}
function show_text(out){
	
	var i = 0;

	var coment1 = "모든 일을 잠시 미루고 , 당신만의 시간을 가져보세요.<br><br>저희는 다양한 예술가의 많은 작품들을 전시하고 있습니다<br><br>잠시라도 편한 마음으로,<br><br>가벼운 마음으로 관람하시길 바랍니다<br><br>";
	var coment2 = "키스 해링, 루이 리히텐슈타인  그리고 4명의 예술가들<br><br>팝아트, 사진, 풍경화 등 여러 장르를 아우르는<br><br> 다양한 느낌의 국내외 작품들을 준비했어요<br><br>모두 한번에 만나보세요";
	var coment3 = "바쁜 시계없이, 시끄러운 TV없이, <br><br>늦은 아침 잠에서 깬 것처럼<br><br>여유로운 시간을 드리고 싶어요<br><br>천천히 둘러보시고 하루정도 편히 쉬어보는건 어때요?";

	var text = [coment1,coment2,coment3];
	if(txt >= 3) txt = 0;

	out += "<a id = 'sub_title_1'>";
	out += "안녕하세요";
	out += "</a>";																	// sub title

	out += "<a id = content_1 onmouseenter = 'cursor()' onclick = 'next_text()'>";
	out += text[txt++];
	out += "</a>";																	// text
	

	return out;
};

function show_images(){

	var i = 0;
	var out = "";
	
	var image = function(i){
		var cont =  " '../images/picture/"+ i +".png' ";
		return cont;
	}
	out += "<div id = 'image_1' >";
	for ( i = 0; i < img_count  ;i++ )
	{	
		out += "<a id = 'round_img"+i+"'  ondblclick = 'href_("+i+")'> <img id = 'img"+i+"' class = 'img' src ="+image(i)+ " alt ='그림들"+ i + "' ></img></a>"; 
	}
	out += "</div>";																	// img
	
	out+= "<a id = help>클릭하면 멈출거에요 드래그 할 수 있어요</a>"
	out += "<a id = 'help_1' >두번 클릭으로 이동할 수 있어요!</a>"


	container_2.innerHTML = out;

}



// black

function make_blackpart(){																					// make black part
	var out = "";
	out += show_blackpart(out);
	container1.innerHTML = out;
}

function show_blackpart(out){
	var i = 0;
	var painters = function(i){
			var cont = " '../images/painter/"+ i + ".png' ";

			return cont;
	}
	var a = "폴 케이든";
	var b = "로이 리히텐슈타인";
	var c = "마이클 케나";
	var d = "안다빈";
	var e = "장 미셸 바스키아";
	var f = "키스해링";
	var texts = [a,b,c,d,e,f];

	var count = 0;

	
	out += "<a id = 'black_text' > 예술가 소개  </a>"
	out += "<a id = 'black_part' >";
	for( i = 0 ; i < painter_count ; i++){
		if(count % 3 == 0 ){
			out += "<br>"
		}
			out += "<img id = '"+i+"' name = '0'  class = 'painter' src = "+ painters(i) +" alt = '화가들" + i + "'  onmouseenter = 'bright("+i+")' onmouseleave = 're_dark("+i+")'  onclick = 'wiki("+i+")'></img>";
		

		 count++;
	}
	out += "</a>";
	
	cound = 0 ;

	out +="<a id = 'black_part_1'>";
	for( i = 0 ; i < painter_count ; i++){
		if(count % 3 == 0 ){
			out += "<br>"
		}
			out += "<a id = 'black_part_text"+i+"' class = 'black_part_text'>"+texts[i] +"</a>";
		

		 count++;
	}
	out += "</a>";

	return out;
}



//interval

var textpart_event = setInterval( function make_textpart(){
	var out = "";
	out += show_text(out);
	container_1.innerHTML = out;
	animation_textpart();
},12000);

var text_opacity = 0;
var move_text_handler;

 function animation_textpart(){
	
	text_opacity = 0;
	move_text();
}
function move_text(){
	if(text_opacity <= 1){
		text_opacity += 0.1;
		document.getElementById("content_1").style.opacity = text_opacity;
		clearTimeout(move_text_handler);
		move_text_handler = setTimeout("move_text()",100);
	}
	else return 0;
}




