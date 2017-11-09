window.addEventListener('load',iniciar);
	function iniciar(){
		texto=document.querySelector("#id");
		texto.addEventListener('mouseover',func6);
        texto.addEventListener('mouseout',func6_1);
	}
	function func6(){
		document.body.style.color="red";
}
    function func6_1(){
        document.body.style.color="black";
    }