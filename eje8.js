	window.addEventListener('load',iniciar);
		var fil=3;
	function iniciar(){
		boton=document.querySelector("input[type=button]");
		boton.addEventListener('click',func8);
	}
	function func8(){
	
	var tabla = document.querySelector("#tabla");
	tabla.appendChild(crearNodofila())
}
function crearNodofila()
{
	debugger;
	var TRelement = document.createElement("tr");
	var col= document.createElement("td");
	var col1=document.createElement("td");
	var coltext = document.createTextNode("Row"+fil+ " cell1");
	var coltext1 = document.createTextNode("Row"+fil+" cell2")
	col.appendChild(coltext);
	col1.appendChild(coltext1);
	TRelement.appendChild(col);
	TRelement.appendChild(col1);

	return TRelement;
}
/*var tabla=document.querySelector("table");
			insertar=" <tr> <td>Row"+fil+ " cell1</td> <td>Row"+fil+ " cell2</td> </tr>";
			tabla.innerHTML+=insertar;
			fil+=1;
}*/
	
	
	
