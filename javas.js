
var light = true ;

function sun(){
	if(light)
	{
	document.getElementById("title").style.color = "#263B4D";

	document.getElementsByTagName("body")[0].style.background = "#E1EBF8";
	
	document.getElementsByTagName("path")[9].style.stroke = "#263B4D";
	document.getElementsByTagName("path")[10].style.stroke = "#263B4D";
	document.getElementsByTagName("path")[12].style.stroke = "#263B4D";
	document.getElementsByTagName("path")[13].style.stroke = "#263B4D";

	document.getElementsByTagName("text")[0].style.fill = "#263B4D";
	document.getElementsByTagName("text")[1].style.fill = "#263B4D";
	document.getElementsByTagName("text")[3].style.fill = "#263B4D";
	document.getElementsByTagName("text")[4].style.fill = "#263B4D";
		
	
	 light = false ;
	}
	else
	{
	document.getElementById("title").style.color = "#E1EBF8";

	document.getElementsByTagName("body")[0].style.background = "#263B4D";
	document.getElementsByTagName("path")[9].style.stroke = "#E1EBF8";
	document.getElementsByTagName("path")[10].style.stroke = "#E1EBF8";
	document.getElementsByTagName("path")[12].style.stroke = "#E1EBF8";
	document.getElementsByTagName("path")[13].style.stroke = "#E1EBF8";	
	
	document.getElementsByTagName("text")[0].style.fill = "#E1EBF8";
	document.getElementsByTagName("text")[1].style.fill = "#E1EBF8";
	document.getElementsByTagName("text")[4].style.fill = "#E1EBF8";
	document.getElementsByTagName("text")[3].style.fill = "#E1EBF8";
      light = true ;
	}
}