window.addEventListener("load",iniciar);
function iniciar(){
	var boton=document.querySelector("input.boton");
	boton.addEventListener('click',func1);
}
function func1(){
		var valor = document.querySelector("input[type=text]").value;
	
		var result = "";
		for (var x=valor.length -1; x>=0;x--){
			result+=valor[x];
		}
		alert(result);
}