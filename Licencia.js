const user = document.getElementById("user");
const password = document.getElementById("password");
const licencia = document.getElementById("lisencia");
const form = document.querySelector('#form');
const text = document.getElementById("text");

/*function identify(p){
    let message = p ;
    let enter = false;
    let comeIn = false;

    if (licencia.value.length < 5) {
        p += "licencia "
        entrar = true;
        if(password.value.length > 7){
            en = true;
        }
    }
}


*/
form.addEventListener("submit",(event) => {
    event.preventDefault()
    identify("No es valido tu ")


    let p = "No es valido tu ";
    let entrar = false;
    let en = false;
    if (licencia.value.length < 5) {
        p += "licencia "
        entrar = true;
        if(password.value.length > 7){
            en = true;
        }
    }

    if(user.value.length < 6){
        if (entrar) {
            if(en){
                p += " y usario";
            }else{
                p += " ,usario";
            }
        }else{
            p += " usario";
        }
        
        entrar = true;
    }
    if(password.value.length < 7){
        if (entrar) {
            p += " y password.";
        }else{
            p += " password";
        }
        entrar = true;
    }

    if(entrar){
        swal('Registro',p,'error')
        licencia.value = "";
        user.value = "";
        password.value = "";
    } else {
        text.innerHTML = `enviado`;
        const $forData = new FormData(form)
        const lic = $forData.get("licencia")
        const username = $forData.get("usario")
        const motDePass = $forData.get("password")

        fetch('/login',{
        method: 'POST',
        body: $forData
        })
    }

    

})




