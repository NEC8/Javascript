
	window.addEventListener('load',iniciar);
	function iniciar(){
		boton=document.querySelector("button");
		boton.addEventListener('click',func6);
	}
	function func6(){
		document.querySelector("p").style.fontSize="24px";
		document.querySelector("p").style.color="green";
		document.querySelector("p").style.fontfamily="Comic Sans MS";
	
}
/*var head= document.querySelector("head");
		var style='<style> p#text{ color = "green";}</style>';
		head.innerHTML+=style;*/		