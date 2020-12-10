
window.addEventListener("load", initiate);

function initiate() {

    document.getElementById("submit").addEventListener("click", function prevent(e) {

        e.preventDefault();
    });
    document.getElementById("submit").addEventListener("click", cookie);
    document.getElementById("submit").addEventListener("click", validate);
}


function validate() {

    if (validateModelName(), validateModelType(), validateDate(),
            validateEnergetic(), validateReference(), validatePassword()) {

        document.getElementById("ref").innerHTML = getCookie("referencia");
        let form = document.form.elements;

        for (x in form) {

            x.reset();
        }
        return true;
    } else {

        return false;
    }
}

function cookie() {

    let random = Math.floor(Math.random() * (2000 - 1000) + 1000);
    setCookie("referencia", random, 1);
}

function validateModelName() {

    let name = document.getElementById("name");

    clearError(name);

    if (name.value != "" && name.length != 0) {

        success(name);
        return true;
    } else {

        document.getElementById("error").innerHTML = "El nombre del modelo no puede estar vacío";
        error(name);
        return false;
    }
}


function validateModelType() {

    let type = document.getElementById("model");

    clearError(type);

    if (type.value != 0) {

        success(type);
        return true;
    } else {

        document.getElementById("error").innerHTML = "Debe seleccionar un tipo de modelo";
        error(type);
        return false;
    }
}

function validateDate() {

    let date = document.getElementById("date");

    clearError(date);
    
    // Comprueba que empiece por dos dígitos seguidos de una / y otros dos dígitos y termine con cuatro dígitos.
    // También comprueba lo mismo pero si entre el primero par de dígitos y el segundo hay un guión y entre el 
    //segundo par y los últimos cuatro.
    let dateRegex = /^\d{2}\/\{2}\/\d{4}$|^\d{2}\-\d{2}\-\d{4}$/;

    if (dateRegex.test(date.value)) {

        success(date);
        return true;
    } else {

        document.getElementById("error").innerHTML = "La fecha no tiene un formato correcto. Son válidos: dd/mm/yyyy o dd-mm-yyyy";
        error(date);
        return false;
    }
}

function validateEnergetic() {

    let energ = document.getElementById("energ");

    clearError(energ);
    
    // Comprueba que empiece por A mayúscula seguida del carácter + entre cero y tres veces.
    // También comprueba si es solo B, C o D mayúscula y solo una vez.
    let energRegex = /^A\+{0,3}$|^[BCD]{1}$/;

    if (energRegex.test(energ.value)) {

        success(energ);
        return true;
    } else {

        document.getElementById("error").innerHTML = "No corresponde a uno de los valores de consumo energético ";
        error(energ);
        return false;
    }
}

function validateReference() {

    let ref = document.getElementById("mod-ref");

    clearError(ref);
    
    // Comprueba que empiece por dos letras mayúsculas seguidas de dos dígitos y éstos de una F mayúscula.
    // A continuación de la F pueden venir un número entre 300 y 8000 expresado de la siguientes formas:
    //          - Un dígito entre 3 y 9 seguido de otros dos dígitos (rango 300-999)
    //          - Un dígito entre 1 y 7 seguido de otros tres dígitos (rango 1000-7999)
    //          - Cuatro dígitos que componen el número 8000 (rango 8000)
    // A estas opciones le siguen las letras A y F mayúsculas. A éstas una X, Y o Z mayúscula y una letra minúscula o mayúscula.
    let refRegex = /^[A-Z]{2}\d{2}F([3-9]\d{2}|[1-7]\d{3}|8000)AF[XYZ]{1}[a-zA-Z]{1}$/;

    if (refRegex.test(ref.value)) {

        success(ref);
        return true;
    } else {

        document.getElementById("error").innerHTML = "La referencia del modelo no cumple el formato correcto";
        error(ref);
        return false;
    }
}

function validatePassword() {

    let pw = document.getElementById("pw");

    clearError(pw);
    
    // Comprueba que empiece por una # seguida de dos letras minúsculas. Éstas de entre 8 y 16 letras
    // minúsculas o mayúsculas. A continuación un carácter que no sea letra mayúscula o minúscula, un dígito numérico
    // o un &. Y que finalize con cualquier combinación posible de dígitos entre los cuales solo pueden estar el 3, 7 o 9.
    let pwRegex = /^#[a-z]{2}[a-zA-Z]{8,16}[^a-zA-Z0-9&]{1}[379]{3}$/;

    if (pwRegex.test(pw.value)) {

        success(pw);
        return true;
    } else {

        document.getElementById("error").innerHTML = "La contraseña es incorrecta";
        error(pw);
        return false;
    }
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

function error(input) {

    input.className = "error";
    input.focus();
}

function success(input) {

    input.className = "success";
    input.focus();
}

function clearError(input) {

    input.className = "";
}