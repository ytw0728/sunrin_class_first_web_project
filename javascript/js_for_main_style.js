
var sub_title_1 = document.getElementById("sub_title_1");
var content_1 = document.getElementById("content_1");
var image_1 = document.getElementById("image_1")

var img = document.getElementsByClassName("img");

var sheet = document.createElement("style");

var img_left = 200;
var how_many_img = 5.6;

function make_style(){

	sheet.innerHTML  =  "";
	sheet.innerHTML += "#sub_title_1{	position: absolute;  font-family: 'NanumGothic'; font-size: 2em; font-weight: normal; color: #454545;	width:60%;	height: 10%;margin-top: 5%;	margin-left: 8%;}";
	sheet.innerHTML += "#content_1{	position: absolute;	font-size: 1.5em;	color: #454545;		width:42%;	height: 52%;margin-top: 11%;	margin-left: 9%;}";
	sheet.innerHTML += "#image_1 { position: absolute;  left: 6%; top: 6%; width : 1130px; height:50%; font-size : 1.5em; color : #444444;  overflow:hidden; }";
	sheet.innerHTML += "#black_part { position: relative; left : 9%; top: 5%;}";
	sheet.innerHTML += "#black_text { position: relative; left : 10%; top:8%; color : #fffaf2; font-size: 35px;}";

	sheet.innerHTML += ".img{ position:absolute; width: 15%; height: 90%; box-shadow : 0px 0px 10px gray;}";
	for(var i = 0 ; i < img_count; i++){
		sheet.innerHTML += "#img"+i+"{ top: 5%; left : "+( img_left * i )+"px; }";
	}

	sheet.innerHTML += "#help{position: absolute; left: " + (how_many_img * img_left  - 180) +"px;  color: gray; opacity:0; }";
	sheet.innerHTML += "#help_1{position: absolute; left: " + (how_many_img * img_left  - 150) +"px;  color: gray; opacity:0; }";

	sheet.innerHTML += ".painter{ width: 12%; height: 25%;  margin-right : 18%; margin-top: 7%; box-shadow: 0px 0px 150px #555555; border-radius: 3px; opacity: 0.7;}";
	
	for(i = 0 ;i< 6; i++){
		if(i<3){
			sheet.innerHTML += "#black_part_text"+i+"{ position : absolute; color : #efefef; top : 23%; margin-left : "+( 350 * ( ( i+1) %4 ) + 10 * i  + 30 * (i-1) )+"px; opacity: 0.7; }";
		}
		else{
			sheet.innerHTML += "#black_part_text"+i+"{ position : absolute; color : #efefef; top : 60%; margin-left : "+( 320 * (i-2) + 40 * (i-3) + 30 * (i-3))+"px; opacity: 0.7; }";
		}
	}
	document.body.appendChild(sheet);
}












/* 애니메이션 효과 */


//위로 자동스크롤
		var position = 2000; 
		function go_main(){ 

			position = 2000; 	
			up();		
				
		} 
		function up(){
				if (position > 0) { 
					position -= 50;
					scroll(0 , position); 
					clearTimeout(timer);	
					var timer = setTimeout("up()",1); 	
				}
				else return 0;
		}
	
		
		function go_cont(){
			position = 2000;
			up_1();
		}
		function up_1(){
			if(position > 700){
				position -= 50;
				scroll(0,position);
				clearTimeout(timer);
				var timer = setTimeout("up_1()",1);
			}
			else return 0;
		}
//그림이동

var right = 0;
var path = 1;
var img_array_weight = img_left * img_count - img_left * how_many_img;

var move = setInterval(move_img,20);

function move_img(){
		var i =0;
	
		if(right > img_array_weight) path = 0;
		else if( right  <  0) path = 1;
	
		for(i = 0; i < img_count; i++){
			if( path ){
				img[i].style.left = ( img_left * i ) - right +"px";
				right += 0.1;
			}
			else{
				img[i].style.left = ( img_left * i ) - right +"px";
				right -= 0.1;
			}
	
		}
}

// 텍스트 부분 쪽에 마우스 올리면 텍스트 부분 올려있는 동안 자동 변경 중단.
// 마우스 클릭하면 다음 텍스트로 변경
// 마우스 빼면 다시 자동변경


// about html 에는 애플 사이트 처럼 마우스 스크롤에 따른 위치 변경을 할 것이다. => 웹프 프린트 참고.