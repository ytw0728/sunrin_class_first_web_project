window.onload = function(){
	var paul = document.getElementById("paul");
	var mich = document.getElementById("mich");
	var anda = document.getElementById("anda");
	var roy = document.getElementById("roy");
	var bas = document.getElementById("bas");
	var kis = document.getElementById("kis");
	mk_paul();
	mk_mich();
	mk_anda();
	mk_roy();
	mk_bas();
	mk_kis();

	mk_style();


	//이벤트

	document.getElementById("up").onclick = go_main;		// 메인으로가기
}
var count = 0;
var who = 0;
function mk_paul(){
	var out = "";
	count = 21;
	who = 1;
	out = mk_part_1(out,count,who);
	paul.innerHTML = out;
}
function mk_mich(){
	var out = "";
	count = 27;
	who = 2;
	out = mk_part_1(out,count,who);
	mich.innerHTML = out;
}
function mk_anda(){
	var out = "";
	count = 20;
	who = 3;
	out = mk_part_1(out,count,who);
	anda.innerHTML = out;
}
function mk_roy(){
	var out = "";
	count = 17;
	who = 4;
	out = mk_part_1(out,count,who);
	roy.innerHTML = out;
}
function mk_bas(){
	var out = "";
	count = 22;
	who = 5;
	out = mk_part_1(out,count,who);
	bas.innerHTML = out;
}
function mk_kis(){
	var out = "";
	count = 20;
	who = 6;
	out = mk_part_1(out,count,who);
	kis.innerHTML = out;
}

var cnt = 0;
var pictures;
function mk_part_1(out,count,who){
	var who1 = "'../images/painter/0.png'";
	var who2 = "'../images/painter/2.png'";
	var who3 = "'../images/painter/3.png'";
	var who4 = "'../images/painter/1.png'";
	var who5 = "'../images/painter/4.png'";
	var who6 = "'../images/painter/5.png'";
	var painters = [who1,who2,who3,who4,who5,who6];
	
	var pic1 = "../images/picture/paul/";
	var pic2 = "../images/picture/mich/";
	var pic3 = "../images/picture/anda/";
	var pic4 = "../images/picture/roy/";
	var pic5 = "../images/picture/bas/";
	var pic6 = "../images/picture/kis/";
	pictures = [pic1,pic2,pic3,pic4,pic5,pic6];
	
	var add1 ="<a class = 'bold' >폴 케이든</a><hr><p class = 'txt'> 스코틀랜드의 극사실주의 (하이퍼 리얼리즘) 작가 ,<br> 모든 것이 사진이 아닌 그림입니다</p>" ;
	var add2 = "<a class = 'bold' >마이클 케나</a><hr><p class ='txt'>잉글랜드 출신의 사진작가로 흑백 풍경 사진으로 유명합니다 <br>한국을 배경으로 다양한 작품을 남겼습니다</p> ";
	var add3 = "<a class = 'bold'>안다빈</a><hr><p class = 'txt'>한국의 젊은 예술가입니다 <br>사진이 아닙니다     극사실주의 작가입니다</p>";
	var add4 ="<a class = 'bold' >로이 리히텐슈타인</a><hr><p class = 'txt'>미국의 대표적인 팝아트 미술가 입니다<br>만화의 장면을 캔버스로 옮긴 작품으로 유명합니다</p>";
	var add5 ="<a class = 'bold' >장 미셸 바스키아</a><hr><p class = 'txt'>팝아트 계에서 검은 피카소 라고 불리우는 작가입니다<br>낙서그림이라는 독특한 분야를 지향했습니다<br>그의 낙서에는 다양한 내용이 담겨있습니다</p>";
	var add6="<a class = 'bold' >키스 해링</a><hr><p class = 'txt'>뉴욕의 거리 문화의 영향을 받은 미국의 예술가입니다<br>낙서화의 양식을 빌려 새로운 회화 양식을 창조했습니다 </p>";
	var texts = [add1,add2,add3,add4,add5,add6];

	out += "<a id = 'painter"+(who-1)+"' name = 'who"+who+"' onclick = 'wiki("+(who-1)+")' onmouseenter = 'cursor("+(who-1)+")' >";
	out += "<img  src = " + painters[(who - 1)] + " ></img>";
	out += "</a>";
	

	var i = 0;
	out +="<div id ='text"+(who-1)+"' >";
	out +=texts[(who-1)];
	out +="</div>";


	out += "<div id = 'pics"+(who-1)+"' >";
	out += "<hr>"
	for(i = 0 ; i<count ; i++){
		if(cnt % 5 == 0 ){
			out += "<br>";
		}
		out += "<a>";
		out +="<img id = 'pic"+who+""+i+"' onmouseenter = 'pic_on("+who+""+i+")'  onmouseleave = 'pic_out("+who+""+i+")' onclick = 'open_new("+(who-1)+","+i+")' class  = 'pictures' src = '"+pictures[(who-1)] + i + ".png'  alt = 'here'></img>";
		out += "</a>";
		
		cnt++;
	}

	out += "</div>";
	out +="<br>";

	cnt = 0;
	return out;
}

//이벤트핸들러
function pic_on(code){
	var id = "pic"+code;	 
	document.getElementById(id).style.cursor = "pointer";
	document.getElementById(id).style.boxShadow = "0px 0px 10px gray";
}
function pic_out(code){
	var id = "pic"+code;
	document.getElementById(id).style.boxShadow = "none";
}
function open_new(route,i){
	var url = pictures[route] + i+".png";

	window.open(url,"_blank");
}

function wiki(i){
	var a ="https://www.google.co.kr/?gfe_rd=cr&ei=dM15VNrpKsPJ8gf4mYDQDQ#newwindow=1&q=%ED%8F%B4+%EC%BC%80%EC%9D%B4%EB%93%A0"; 
	var b ="https://www.google.co.kr/search?q=%EB%A1%9C%EC%9D%B4+%EB%A6%AC%ED%9E%88%ED%85%90%EC%8A%88%ED%83%80%EC%9D%B8&oq=%EB%A1%9C%EC%9D%B4+%EB%A6%AC%ED%9E%88%ED%85%90%EC%8A%88%ED%83%80%EC%9D%B8&aqs=chrome.0.69i59j0l4.7509j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";
	var c ="https://www.google.co.kr/search?q=%EB%A7%88%EC%9D%B4%ED%81%B4+%EC%BC%80%EB%82%98&oq=%EB%A7%88%EC%9D%B4%ED%81%B4+%EC%BC%80%EB%82%98&aqs=chrome.0.69i59j69i65j0l4.4939j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";
	var d ="https://www.google.co.kr/search?q=%EC%95%88%EB%8B%A4%EB%B9%88&oq=%EC%95%88%EB%8B%A4%EB%B9%88&aqs=chrome.0.69i59j0l5.2454j0j9&sourceid=chrome&es_sm=93&ie=UTF-8" ;
	var e ="https://www.google.co.kr/search?q=%EC%9E%A5+%EB%AF%B8%EC%85%B8+%EB%B0%94%EC%8A%A4%ED%82%A4%EC%95%84&oq=%EC%9E%A5+%EB%AF%B8%EC%85%B8+%EB%B0%94%EC%8A%A4%ED%82%A4%EC%95%84&aqs=chrome.0.69i59j0l4.2744j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";
	var f ="https://www.google.co.kr/search?q=%ED%82%A4%EC%8A%A4+%ED%95%B4%EB%A7%81&oq=%ED%82%A4%EC%8A%A4+%ED%95%B4%EB%A7%81&aqs=chrome..69i57j0l5.1799j0j9&sourceid=chrome&es_sm=93&ie=UTF-8";

	var urls = [ a , c , d  , b , e , f ];

	window.open(urls[i],"_blank");
}
function cursor(i){
	var id = "painter"+i;
	document.getElementById(id).style.cursor = "pointer";
}

function cursor_go(g){
	document.getElementsByClassName("menu1")[g].style.cursor = "pointer";
}

function go(g){
	var point = [200,1700,3250,4600,5840,7250];
	scroll(0,point[g]);
}


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