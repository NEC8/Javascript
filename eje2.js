window.addEventListener('load' ,iniciar);
function iniciar(){
	var boton=document.querySelector("input.boton");
	boton.addEventListener('click',func2);
}
function func2(){
		var valor=document.querySelector("input[type=text]").value;
		var result=0;
		for (var x=0; x<=valor;x++){
			result+=x;
		}
		alert(result);
}