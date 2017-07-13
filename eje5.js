
	window.addEventListener('load',iniciar);
	function iniciar(){
		boton=document.querySelector("input.boton");
		boton.addEventListener('click',func5);
		
	}
	function func5(){
		debugger;
		var valor= document.querySelector("input").value;
		var largo=valor.length;
		var result="";
		var cont=1;
		var aux=valor[0];
		for (var x=1; x<largo;x++){
			if (aux == valor[x]){
					cont+=1;
			}else{
				 result+=cont+aux;
				 aux=valor[x];
				 cont=1;
			}

		}
		result+=cont+aux;
		alert(result);
}