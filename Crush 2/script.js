var messageElement = document.getElementById("message");
var greenButton = document.getElementById("greenButton");
var redButton = document.getElementById("redButton");
var forgiveMeGif = document.getElementById("forgiveMeGif");
var forgivenMessage = document.getElementById("forgivenMessage");
var forgiveText = document.getElementById("forgiveText");
var forgiveText2 = document.getElementById("forgiveText2"); // Seleccionamos el segundo párrafo
var options = document.getElementById("options");
var greenGif = document.getElementById("greenGif");

var phrases = [
    "Entiendo, gracias de todos modos. ¡Ya en serio, deja de jugar!",
    "No hay problema, tal vez en otra ocasión. ¡Ya no le des click al botón rojo! :(",
    "¡No hay problema! ¿Podrías reconsiderarlo? ¡Por favor, ya no toques el botón rojo! :(",
    "¡Estoy aquí si cambias de opinión! ¡En serio, detente con el botón rojo! :(",
    "Claro, puede que no sea el momento adecuado. Espero que en el futuro podamos conocernos. ¡Ya no toques el botón rojo! :("
];

var currentPhraseIndex = 0;

greenButton.addEventListener("click", function() {
    forgiveMeGif.style.display = "none";
    forgiveText.textContent = ""; // Borramos el contenido del primer párrafo
    forgiveText2.textContent = ""; // Borramos el contenido del segundo párrafo
    options.style.display = "none";
    messageElement.textContent = "";
    forgivenMessage.style.display = "block";
    greenGif.style.display = "block";
    document.body.style.backgroundImage = "url('fondo.png')"; // Establecer la imagen como fondo al presionar el botón verde
});

redButton.addEventListener("click", function() {
    messageElement.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
});

redButton.addEventListener("mouseover", function() {
    moveRedButton();
});

function moveRedButton() {
    // Limitar el rango de movimiento para que el botón rojo se mantenga cerca del texto
    var minX = forgiveText.offsetLeft - redButton.offsetWidth; // Ajuste el valor según sea necesario
    var maxX = forgiveText.offsetWidth + forgiveText.offsetLeft; // Ajuste el valor según sea necesario
    var minY = forgiveText.offsetTop - redButton.offsetHeight; // Ajuste el valor según sea necesario
    var maxY = forgiveText.offsetHeight + forgiveText.offsetTop; // Ajuste el valor según sea necesario

    // Mover el botón a una posición aleatoria dentro del rango establecido
    var randomX, randomY;
    do {
        randomX = Math.max(minX, Math.min(maxX - redButton.offsetWidth, Math.random() * window.innerWidth));
        randomY = Math.max(minY, Math.min(maxY - redButton.offsetHeight, Math.random() * window.innerHeight));
    } while (randomX > greenButton.offsetLeft && randomX < greenButton.offsetLeft + greenButton.offsetWidth &&
    randomY > greenButton.offsetTop && randomY < greenButton.offsetTop + greenButton.offsetHeight);

    redButton.style.position = "absolute";
    redButton.style.left = randomX + "px";
    redButton.style.top = randomY + "px";
}
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('miAudio');
    var greenButton = document.getElementById("greenButton");

    greenButton.addEventListener("click", function() {
        audio.currentTime = 0; // Reinicia la reproducción desde el principio
        audio.play(); // Reproduce el audio
    });
});
