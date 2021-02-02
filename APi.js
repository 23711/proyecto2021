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

function Direccionar(response,lugar) {
    if (response.status === 200) {
        window.location.href = lugar
    }
}

function peticionDeLaValidacion(verdad,api,obj){
    if (verdad) {
        fetch(api,obj)
        .then()
        .catch()
    }
}