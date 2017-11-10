window.addEventListener('load',iniciar);
	function iniciar(){
		texto=document.querySelector("#id");
		texto.addEventListener('mouseover',func6);
        texto.addEventListener('mouseout',func6_1);
	}
	function func6(){

		document.querySelector("#c").style.color="red";
		document.querySelector("#c").style.fontWeight = "bold";
}
    function func6_1(){
        document.querySelector("#c").style.color="black";
		document.querySelector("#c").style.fontWeight = "normal";
    }