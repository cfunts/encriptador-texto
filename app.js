function encriptar (){
    var texto = document.querySelector("#texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".mensaje-1").value = textoCifrado;
    document.querySelector("#texto").value;
    }


    
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector("#texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".mensaje-1").value = textoCifrado; document.querySelector("#texto").value;

}


var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;