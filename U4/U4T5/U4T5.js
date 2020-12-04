
//const fechaCre = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/
const fechaCre = /^\d{2}\/\d{2}\/\d{4}$/;
const cocinero = /^[A-Z]{2}[$@#\-_.]{1}\d{4}$/;
const destinatario = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;
const gramos = /^[1-9]\d{2}$|^[1-4]\d{3}$|^5000$/;
const compo = /^\d+g([a-zA-Z]{1,2}\d?){2}$/;
const cuenta = /^[a-z]{2}\d{2}\-\d{12}\-\d{2}$/;

window.onload = initiate;

function initiate() {

    document.getElementById("button").addEventListener("click", validar, false);
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

        alert("Datos erróneos")
        evento.preventDefault();
    }
}