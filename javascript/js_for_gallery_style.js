var sheet = document.createElement("style");

function mk_style(){
var i = 0 ;
	for (i = 0 ; i < 6 ; i++ )
	{
		sheet.innerHTML += "#painter"+i+" img{ position:absolute; top:1%; left: 2%;width: 150px;height:170px; border-radius: 3px; box-shadow: 0px 0px 10px gray; }";
		sheet.innerHTML +="#text"+i+"{ position:absolute; width: 400px; height: 100px; left: 18%; top: 4%; line-height: 30px;}";
		sheet.innerHTML += "#pics"+i+"{ position:absolute; margin-top:15%; width: 100%; height: 70%;}";
	}
	sheet.innerHTML += ".bold{ font-family: 'NanumGothic';}";
	sheet.innerHTML += ".pictures{ margin-left: 70px; width: 120px; height:170px;  margin-top: 10px;}";


	document.body.appendChild(sheet);
};