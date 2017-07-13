
	window.addEventListener('load',iniciar);
		var fil=3;
	function iniciar(){
		boton=document.querySelector("input[type=button]");
		boton.addEventListener('click',func8);
	}
	function func8(){
			var tabla=document.querySelector("table");
			insertar=" <tr> <td>Row"+fil+ " cell1</td> <td>Row"+fil+ " cell2</td> </tr>";
			tabla.innerHTML+=insertar;
			fil+=1;
}
