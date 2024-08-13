
var TextInput = document.querySelector("#minitexto");
var TextOutput = document.querySelector("#output");

function maiusculaouAcento(str) {
    return /[A-ZÀ-ÿ]/.test(str); 
}

function criptografar(){
    var texto = TextInput.value;
    if (maiusculaouAcento(texto)) {
        alert("Por favor, digite apenas letras minúsculas sem acento.");
        return;
    }

    var result = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("output").innerHTML = "<textarea readonly id='input-texto'>" + result + "</textarea>" + 
 "<button class='btn-copy' id='copiar' onclick='copiar()'>copiar</button>";
}

function descriptografar(){
    var texto = TextInput.value;
    if (maiusculaouAcento(texto)) {
        alert("Por favor, digite apenas letras minúsculas sem acento.");
        return;
    }

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("output").innerHTML = "<textarea readonly id='input-texto'>" + resultDescripto + "</textarea>" + 
"<button class='btn-copy' id='copiar' onclick='copiar()'>copiar</button>";
}

function copiar(){
    var textCop = document.getElementById('input-texto');

    textCop.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
