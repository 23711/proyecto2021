const licencia = document.getElementById("licencia");
const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.querySelector('#form');
const parrafo = document.getElementsByName('parrafo');
var entrada1 = false
var entrada2 = false
var entrada3 = false

function validacion(obj, num ,p)
{
    let autorisado = false;
    if (obj.value.length >= num) {
        autorisado = true
        parrafo[p].classList.remove('no')
        return true
        } 
    if (!autorisado) {
        parrafo[p].classList.add('no')
        return false
    }
    
}



form.addEventListener('submit', (eve) => {
    eve.preventDefault();
    entrada1 = validacion(licencia,5,0)
    entrada2 = validacion(user,7,1)
    entrada3 = validacion(password, 6,2)
    if (entrada1 && entrada2 && entrada3) {
        const formData = new FormData(form)
        const Usuario = {
            licenciaUser: formData.get('licencia'),
            nombreDelUsari: formData.get('usario'),
            contrasena: formData.get('password')
        }
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Usuario)
        }
        
        formData.get('licencia')

        fetch('/login',options)

        licencia.value = ''
        user.value = ''
        password.value = ''
    } 
})


