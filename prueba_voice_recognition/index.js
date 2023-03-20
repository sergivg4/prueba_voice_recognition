const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const texto = document.getElementById('texto');
const btnPlayText = document.getElementById('playText');
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length -1 ][0].transcript;
    texto.value += frase;

    //console.log(results);
    //console.log(results[results.length-1]);
};

recognition.onend = (event) => {
    console.log(event.error);
};

btnStartRecord.addEventListener('click', () => {
    recognition.start();
});

btnStopRecord.addEventListener('click', () => {
    recognition.abort();
});

btnPlayText.addEventListener('click', () => {
    leerTexto(texto.value);
});

function leerTexto(texto){
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};
function prueba(){
    // esta es la cadena donde buscaremos
    let cadena = "mobot saluda y haz una voltereta";
    // esta es la palabra a buscar
    let comando = "saluda2";
    // para buscar la palabra hacemos
    let posicion = cadena.indexOf(comando);
    if (posicion !== -1)
        console.log(true);
    else
        console.log(false);
};
prueba();