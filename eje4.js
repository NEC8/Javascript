window.addEventListener('load' ,iniciar);
function iniciar(){
	var boton=document.querySelector("input.boton");
	boton.addEventListener('click',func4);
}
function func4(){
		var valor=document.querySelector("input").value;
		var result="";
		var minutos=valor%60;
		valor=(valor-minutos)/60;
		result=valor+":"+minutos;
		
		alert(result);
}