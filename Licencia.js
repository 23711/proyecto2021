const user = document.getElementById("user");
const password = document.getElementById("password");
const licencia = document.querySelector("lisencia");
const form = document.querySelector('form');
const text = document.getElementById("text");
const parrafo = document.getElementsByName('parrafo')
var entrar = false


function validacion(o){
    if (0 === 5) {
        console.log('it works');
    } else {
        console.log('it ')
    }
}

form.addEventListener('submit', (eve) => {
    eve.preventDefault();
    validacion(licencia)
})

