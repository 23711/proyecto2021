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
        console.log('good')
        const formData = new FormData(form)
        //debugger
        // forData.set("key",nuervo dato)
        fetch('/',{                     //
            method: 'POST',             // se va enviar como multiPar forData
            body: formData,             //ve a la consola 
                                    //npm install body-parser 
        })

        licencia.value = ''
        user.value = ''
        password.value = ''
    }else{
        
    }

})


