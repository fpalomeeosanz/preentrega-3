console.log("Reproductor Interacativo de Cuentos La Tia Botas")

let edadJugador = parseInt(prompt("Bienvenido al lugar donde tu eijes las como sonaran las historias. Para comenzar escribe tu edad"));
if(edadJugador >= 99) {
    alert("Felicidades puedes jugar una pequeña trivia oculta :)");
        let colorJugador = prompt("Ahora bien, dinos: ¿Qué color tiene un tren que llega a su estación con retraso?");
        if (colorJugador == "morado","de morado","demorado") { 
            alert("Felicitaciones!!! Hay una algoritmo crado solo para decirte que el tren  llega de morado :O");
        }else{
            alert("Mmmm.... Acaso crees que " +colorJugador+ " es la respuesta corecta? pues no :( Te damos una pista puede ser azul o lila o morado");
        }    
     const respuestaCuento = prompt("Ahora te inviatamos a dar clic a JUEGA para que creees tus propias historias!!! Por ejemplo escuchar un cuento Aventuras  con un Dinosauro en un Castillo con una Varita mágica o lo que tu quieras");    
} 
else{       
 alert("Lo sentimos, debes ser mayor de 100 para el juego oculto... Mejor pincha el boton JUEGA!!! O si quieres refresca la página y trata otra vez ;)");
}

