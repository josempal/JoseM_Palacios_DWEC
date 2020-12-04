
window.onload = iniciar;

function iniciar() {

    document.getElementById("button").addEventListener("click", validar, false);
}


function validar(evento) {

    if (campo20() && campoAnyo() && campoEst()) {

        printDisc();
    } else {

        evento.preventDefault();
    }
}

function campo20() {

    let res = false;

    let nombre = document.getElementById("title");
    let grupo = document.getElementById("gr_name");
    let labelNom = document.getElementById("title").previousElementSibling;
    let labelGru = document.getElementById("gr_name").previousElementSibling;

    limpiarError(labelNom, nombre);
    limpiarError(labelGru, grupo);

    if (nombre.value.length > 0 && nombre.value.length <= 20) {

        res = true;
    } else {

        error(labelNom, nombre);
        res = false;
    }

    if (grupo.value.length > 0 && grupo.value.length <= 20) {

        res = true;
    } else {

        error(labelGru, grupo);
        res = false;
    }

    return res;
}

function campoAnyo() {

    let anyPubli = document.getElementById("pu_year");
    let labelAnyo = document.getElementById("pu_year").previousElementSibling;

    limpiarError(labelAnyo, anyPubli);

    if (!(isNaN(anyPubli.value)) && anyPubli.value.length === 4) {
    
        return true;
    } else {
        
        error(labelAnyo, anyPubli);
        return false;
    }
}

function campoEst() {

    let estanteria = document.getElementById("localiz");
    let labelEst = document.getElementById("localiz").previousElementSibling;

    limpiarError(labelEst, estanteria);

    if (!(isNaN(estanteria.value))) {

        return true;
    } else {
       
        error(labelEst, estanteria);
        return false;
    }
}

function error(msg, input) {

    msg.className = "msg-error";
    input.className = "input-error";
    msg.focus();
}

function limpiarError(msg, input) {

    msg.className = "";
    input.className = "";
}

function printDisc() {

    let nombre = document.getElementById("title").value;
    let grupo = document.getElementById("gr_name").value;
    let anyoPub = document.getElementById("pu_year").value;
    let genero = document.getElementById("genre").value;
    let localizacion = document.getElementById("localiz").value;
    let prestado = "";

    for (let i = 0; i < document.form1.borrowed.length; i++) {

        if (document.form1.borrowed[i].checked) {

            prestado = document.form1.borrowed[i].value;
            break;
        }
    }

    let disco = new Disco();

    disco.addDisco(nombre, grupo, anyoPub, genero, localizacion, prestado);

    document.getElementById("disc").innerHTML = disco.getInfo();
}

function Disco() {

    this.nombre = "";
    this.grupo = "";
    this.anyoPub = "";
    this.genero = "";
    this.localizacion = 0;
    this.prestado = false;

    this.addDisco = function (nombre, grupo, anyoPub, genero, localizacion, prestado) {

        this.nombre = nombre;
        this.grupo = grupo;
        this.anyoPub = anyoPub;
        this.genero = genero;
        this.localizacion = localizacion;
        this.prestado = prestado;
    }

    this.setLocalizacion = function (localizacion) {

        this.localizacion = localizacion;
    }

    this.setPrestado = function (prestado) {

        this.prestado = prestado;
    }

    this.getInfo = function () {

        let status = "";

        if (this.prestado === "true") {
            status = "Prestado";
        } else {
            status = "Disponible";

        }

        return "<p> Nombre del disco: " + this.nombre +
            "<br> Grupo o cantante: " + this.grupo +
            "<br> Año de publicacion: " + this.anyoPub +
            "<br> Género: " + this.genero +
            "<br> Localización del disco: Estanteria " + this.localizacion +
            "<br> Estado del disco: " + status + "</p>";

    }
}
