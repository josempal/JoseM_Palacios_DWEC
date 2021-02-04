
document.getElementById("xhr").addEventListener("click", cargaXHR);
/* document.getElementById("fetch").addEventListener("click", cargaFetch);
 */

function cargaXHR() {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            let vacunas = JSON.parse(xhr.responseText);

            insertarCcaaXhr(vacunas);
        }
    };

    xhr.open("GET", "latest.json", true);
    xhr.send();
}

function insertarCcaaXhr(vacunas) {

    let xhr = new XMLHttpRequest();

    let vacunasSinTotales = "";

    for (x of vacunas) {

        if (x.ccaa != "Totales") {

            vacunasSinTotales += x;
        }
    }

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            let vacunasFiltradas = JSON.parse(xhr.responseText);

            cargaTablaXhr(vacunasFiltradas);
        }

    }

        xhr.open("POST", "insertar_comunidades.php", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(vacunasSinTotales);
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

    /*    function cargaFetch() {
   
   
   
   
   
   
       } */


/* fetch('latest.json', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(vacunas)
})
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });


*/

