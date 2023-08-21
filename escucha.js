let query = window.location.search.substring(1).split("=");
let audioEscucha = document.getElementById("audioEscucha");

audioEscucha.src = "../audios/" + query[1];
audioEscucha.play();