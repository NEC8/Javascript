window.addEventListener("load",iniciar)

	function iniciar()
	{
	  var boton1=document.querySelector("#Agregar");
	  var boton2=document.querySelector("#Quitar");
	  boton1.addEventListener("click",Agregar);
	  boton2.addEventListener("click",Quitar);
	  
	}

function Agregar()
{
  var slElement = document.querySelector("select");
	slElement.appendChild(crearNodoOp())
}

function crearNodoOp()
{
	var texto=document.querySelector("#text").value;
	var opElement = document.createElement("option");
	var textElement = document.createTextNode(texto);
	
	opElement.appendChild(textElement);
	
	return opElement;
}

function Quitar()
{
  var slElement = document.querySelector("select");
	var opElements = document.querySelectorAll("option");
	slElement.removeChild(opElements[opElements.length - 1]);
	op--;
}