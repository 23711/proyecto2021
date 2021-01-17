const user = document.getElementById("user");
const password = document.getElementById("password");
const licencia = document.getElementById("lisencia");
const form = document.querySelector('form');
const text = document.getElementById("text");
const parrafo = document.getElementsByName('parrafo')
var entrar = false


function validacion(Letras,nbj){

    if (h >= Letras) {
        parrafo[nbj].innnerHTML += '*no valido';
    } else {
        parrafo[nbj].innnerHTML += 'no'
        entrar = true
    }
}

form.addEventListener('submit', (eve) => {
    eve.preventDefault();
    validacion(licencia,5,0)
})

