
//const fechaCre = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/
const fechaCre = /^\d{2}\/\d{2}\/\d{4}$/;
const cocinero = /^[A-Z]{2}[$@#\-_.]{1}\d{4}$/;
const destinatario = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;
const gramos = /^[1-9]\d{2}$|^[1-4]\d{3}$|^5000$/;
const compo = /^\d+g([a-zA-Z]{1,2}\d?){2}$/;
const cuenta = /^[a-z]{2}\d{2}\-\d{12}\-\d{2}$/;

let cont = 0;

window.onload = initiate;

function initiate() {

    document.getElementById("button-s").addEventListener("click", validar, false);
    document.getElementById("reset-ck").addEventListener("click", resetCookie, false);
    
    if (getCookie("contador") !== -1) {

        document.getElementById("texto").innerHTML = getCookie("contador");
    } else {

        setCookie("contador", 0, 1);
        document.getElementById("texto").innerHTML = getCookie("contador");
    }
}

function validateFecha() {

    let fecha = document.getElementById("fechaCre");

    if (fechaCre.test(fecha)) {

        return true;
    } else {

        return false;
    }
}

function validateCocinero() {

    let cocin = document.getElementById("cocinero");

    if (cocinero.test(cocin)) {

        return true;
    } else {

        return false;
    }
}

function validateDest() {

    let dest = document.getElementById("dest");

    if (destinatario.test(dest)) {

        return true;
    } else {

        return false;
    }
}

function validateGramos() {

    let gr = document.getElementById("gr");

    if (gramos.test(gr)) {

        return true;
    } else {

        return false;
    }
}

function validateComp() {

    let comp = document.getElementById("comp");

    if (compo.test(comp)) {

        return true;
    } else {

        return false;
    }
}

function validateCC() {

    let cC = document.getElementById("cc");

    if (cuenta.test(cC)) {

        return true;
    } else {

        return false;
    }
}

function validar(evento) {

    if (validateFecha && validateCocinero && validateDest
        && validateGramos && validateComp && validateCC) {

        return alert("Datos introducidos correctamente")
    } else {

        cont++;
        setCookie("contador", cont, 1);

        alert("Datos erróneos")
        
        evento.preventDefault();
    }
}

function resetCookie() {

    cont = 0;

    setCookie("contador", 0, 1);

    document.getElementById("texto").innerHTML = getCookie("contador");
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return -1;
}

function setCookie(nombre, valor, expiracion) {
    let d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function deleteCookie(name) {

    document.cookie = name +'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
}