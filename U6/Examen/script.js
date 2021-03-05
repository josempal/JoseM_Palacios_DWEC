
document.getElementById("xhr").addEventListener("click", cargaXHR);
document.getElementById("fetch").addEventListener("click", cargaFetch);


function cargaXHR() {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            let vacunas = JSON.parse(xhr.responseText);

            cargarJSON(vacunas);
            document.getElementById("resultados").innerHTML =
                "Datos cargados de la WEB";
        }
    };

    xhr.open("GET", "latest.json", true);
    xhr.send();
}

function cargarJSON(docJSON) {


    let comunidades = new Array();

    for (let i = 0; i < docJSON.length; i++) {
        if (docJSON[i].ccaa != "Totales") {
            let obj = {
                "ccaa": docJSON[i].ccaa,
                "dosisAdministradas": docJSON[i].dosisAdministradas,
                "dosisEntregadas": docJSON[i].dosisEntregadas,
                "dosisPautaCompletada": docJSON[i].dosisPautaCompletada,
                "porcentajeEntregadas": docJSON[i].porcentajeEntregadas,
                "porcentajePoblacionAdministradas": docJSON[i].porcentajePoblacionAdministradas,
                "porcentajePoblacionCompletas": docJSON[i].porcentajePoblacionCompletas
            }
            comunidades[i] = obj;
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(this.responseText);
            let respuesta = JSON.parse(this.responseText);
            cargaTablaXhr(respuesta);
        }
    }

    let parametros = JSON.stringify(comunidades);
    xhr.open("POST", "insertar_comunidades.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(parametros);

    genera_seleccionable(comunidades);
}

function genera_seleccionable(comunidades) {
    document.getElementById("ccaa").innerHTML = "";
    let select = document.getElementById("ccaa");

    // Crear y añadir options
    for (let comunidad of comunidades) {
      let option = document.createElement("option");
      option.value = comunidad.ccaa;
      option.text = comunidad.ccaa;
      select.appendChild(option);
    }
  }


function cargaTablaXhr(vacunas) {

    let tabla = document.getElementById("tabla");

    let tablaCont = "<tr><th>CCAA</th><th>Dosis administradas</th><th>Dosis entregadas</th><th>Dosis pauta completadas" +
        "</th><th>Porcentaje entregadas</th><th>Porcentaje población administradas</th><th>Porcentaje población completas</th></tr>";

    for (let i = 0; i < vacunas.length; i++) {

        tablaCont += "<tr><td>";

        tablaCont += vacunas[i].ccaa;

        tablaCont += "</td><td>";

        tablaCont += vacunas[i].dosisAdministradas;

        tablaCont += "</td><td>";

        tablaCont += vacunas[i].dosisEntregadas;

        tablaCont += "</td><td>";

        tablaCont += vacunas[i].dosisPautaCompletada;

        tablaCont += "</td><td>";

        tablaCont += vacunas[i].porcentajeEntregadas;

        tablaCont += "</td><td>";

        tablaCont += vacunas[i].porcentajePoblacionAdministradas;

        tablaCont += "</td><td>";

        tablaCont += vacunas[i].porcentajePoblacionCompletas;

        tablaCont += "</td></tr>";
    }

    tabla.innerHTML = tablaCont;
}

function cargaFetch() {

    fetch('latest.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then( (result) => {
            cargarJSON(result);
        })
        .catch((err) => console.log("chema: " + err));
}


