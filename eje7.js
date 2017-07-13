
	window.addEventListener('load',iniciar);
	function iniciar(){
		boton=document.querySelector("input[type=button]");
		boton.addEventListener('click',func7);
	}
	function func7(){
			var nombre=document.querySelector("input[name=Nombre]").value;
			var apellido=document.querySelector("input[name=Apellido]").value;
			alert(nombre+" "+apellido);
}
