window.addEventListener('load' ,iniciar);
function iniciar(){
	var boton=document.querySelector("input.boton");
	boton.addEventListener('click',func3);
}
function func3(){
		var valor=document.querySelector("input").value;
		var result="1";
		for (var x=2; x<=valor;x++){
			if (valor%x == 0) {
				result+=" ; "+x;
			}
			
		}
		alert(result);
		result="";
}