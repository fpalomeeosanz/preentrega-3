const boton = document.getElementById("escucha");

const generos = document.getElementById("generos");
const personajes = document.getElementById("personajes");
const lugares = document.getElementById("lugares");
const elementos = document.getElementById("elementos");

generos.children[parseInt(Math.random()*10%3)].selected=true;
personajes.children[parseInt(Math.random()*10%3)].selected=true;
lugares.children[parseInt(Math.random()*10%3)].selected=true;
elementos.children[parseInt(Math.random()*10%3)].selected=true;

boton.addEventListener("click",function (){ 
	
	let audioPath = generos.value + personajes.value + lugares.value + elementos.value + ".mp3";

	let escucha = "escucha.html?audio="+audioPath;

	window.open(escucha, "_self");
});

