const licencia = document.getElementById("licencia");
const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.querySelector('form');
const parrafo = document.getElementsByName('parrafo');
var entrar = false



function validacion(obj, num ,p)
{
    let autorisado = false;
    if (obj.value.length >= num) {
        autorisado = true
        parrafo[p].classList.remove('no')
        } else {
            entrar = true
        }
    if (!autorisado) {
        parrafo[p].classList.add('no')
        entrar = true
    }
}

form.addEventListener('submit', (eve) => {
    eve.preventDefault();
    validacion(licencia,5,0)
    validacion(user,7,1)
    validacion(password, 6,2)
    if (entrar) {
        console.log('goooooo')
    }
})

