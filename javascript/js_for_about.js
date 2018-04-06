window.onload = function(){
	document.getElementById("up").onclick = go_main;		// 메인으로가기
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