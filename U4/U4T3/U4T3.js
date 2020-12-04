
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

    let nombre = document.getElementById("title").value;
    let grupo = document.getElementById("gr_name").value;

    if (nombre.length > 0 && nombre.length <= 20 &&
        grupo.length > 0 && grupo.length <= 20) {

        return true;
    } else {

        alert("Los campos nombre y grupo no pueden estar vacíos o albergar más de 20 caracteres");
        return false;
    }
}

function campoAnyo() {

    let anyPubli = document.getElementById("pu_year").value;

    if (isNaN(anyPubli) || anyPubli.length !== 4) {

        alert("El campo año de publicación debe estar compuesto por 4 números")
        return false;
    } else {

        return true;
    }
}

function campoEst() {

    let estanteria = document.getElementById("localiz").value;

    if (estanteria === "") {

        return true;
    } else if (isNaN(estanteria)) {

            alert("El campo localización debe contener números");
            return false;
        } else {

            return true;
        }
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
