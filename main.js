/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const inputText = document.querySelector('.input-text');
const btnEncriptador = document.querySelector('.btnEncriptar');
const btnDesencriptador = document.querySelector(".btnDesencriptar");
const btnCopiarTexto = document.querySelector('.btnCopiar');

let textoGenarate = document.querySelector('#zonaDeTexto');
let mensajeError1 = document.getElementById('mensaje-error1');
mensajeError1.style.display = 'none';
let mensajeError2 = document.getElementById('mensaje-error2');
mensajeError2.style.display = 'none';

btnEncriptador.addEventListener('click', encriptar);
btnDesencriptador.addEventListener('click', desencriptador);
btnCopiarTexto.addEventListener('click', copiarTexto);

function encriptar(){
    let mensaje = inputText.value;

    if(!inputText.value){
        mensajeError1.style.display = 'block';
        mensajeError2.style.display = 'block';  
    }else{
        mensajeError1.style.display = 'none';
        mensajeError2.style.display = 'none';
        textoGenarate.innerHTML = "";//limpia el contenido anterior

        for(i = 0; i< mensaje.length; i++){
            let letras = mensaje[i];

           switch(letras){
                case "e": textoGenarate.innerHTML += "enter";
                break;
    
                case "i": textoGenarate.innerHTML += "imes";
                break;
    
                case "a": textoGenarate.innerHTML += "ai";
                break;
    
                case "o": textoGenarate.innerHTML += "ober";
                break;
    
                case "u": textoGenarate.innerHTML += "ufat";
                break;
    
                 default:  textoGenarate.innerHTML += letras;
            }
            
        }
    }
  
    
}
//encriptar();
function desencriptador(){
    let mensajeEncriptado = inputText.value;

    if(!inputText.value){
        mensajeError1.style.display = 'block';
        mensajeError2.style.display = 'block';  
    }else{
        mensajeError1.style.display = 'none';
        mensajeError2.style.display = 'none';

        textoGenarate.innerHTML = ""; //limpia el contenido anterior

        for(i = 0; i < mensajeEncriptado.length; i++){
            let letra = mensajeEncriptado[i];
    
            switch(letra){
                case "e": 
                    if(mensajeEncriptado.substring(i, i + 5) === "enter"){
                        textoGenarate.innerHTML += "e"
                        i += 4;
                    }else{
                        textoGenarate.innerHTML =+ letra;
                    }
                    break;
    
                case "i": 
                    if(mensajeEncriptado.substring(i, i + 4) === "imes"){
                        textoGenarate.innerHTML += "i";
                        i += 3;
                    }else{
                        textoGenarate.innerHTML =+ letra;
                    }
                    break;
    
                case "a":
                    if(mensajeEncriptado.substring(i, i + 2) === "ai"){
                        textoGenarate.innerHTML += "a";
                        i += 1;
                    }else{
                        textoGenarate.innerHTML =+ letra;
                    }
                    break;  
    
                case "o":
                    if(mensajeEncriptado.substring(i, i + 4) === "ober"){
                        textoGenarate.innerHTML += "o";
                        i += 3;
                    }else{
                        textoGenarate.innerHTML =+ letra;
                    }
                    break;  
                    
                case "u":
                    if(mensajeEncriptado.substring(i, i + 4) === "ufat"){
                        textoGenarate.innerHTML += "u";
                        i += 3;
                    }else{
                        textoGenarate.innerHTML =+ letra;
                    }
                    break;    
                
                    default:  textoGenarate.innerHTML += letra;    
                    
            }
        }

    }    

    
}

function copiarTexto(){
    const elemento = document.querySelector('#copiarTexto');

    //seleccionar el texto dentro del elemento
    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(elemento);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    //copiar el texto seleccionado al portapapeles del usuario

    document.execCommand("copy");

    //Limpiar la seleccion
    seleccion.removeAllRanges();

    alert("el texto fue copiado en el portapapeles");
}