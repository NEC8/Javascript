window.addEventListener("load",iniciar)

	function iniciar()
	{
	  var boton=document.querySelector("#boton");
	  boton.addEventListener("click",cambiar2);
	  
	}

function cambiar2()
{
	debugger;
	var columna = document.querySelector("#columna").value;		
	var celda = document.querySelector("#celda").value;			
	var tabal = document.querySelector("#tabla")				
	var texto = document.querySelector("#texto").value;
	tabla.rows[columna-1].cells[celda-1].innerHTML = texto;		
}
