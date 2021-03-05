window.onload = iniciar;

function iniciar() {
    document.getElementById("cargarXHR").addEventListener("click",cargarTablaXHR, true);
    document.getElementById("cargarFetch").addEventListener("click",cargarTablaFETCH, true);

}


function cargarTablaXHR () {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
        cargarTabla(xhr);
        }
    };
    xhr.open("GET", "latest.json", true);
    xhr.send();

    

}

function cargarTabla(json) {
    let docJSON = JSON.parse(json.responseText);

    let ccaa;
    let dosisEntregadas;
    let dosisAdministradas;
    let dosisPautaCompletada;
    let porcentajeEntregadas;
    let porcentajePoblacionAdministradas;
    let porcentajePoblacionCompletas;

    let comunidades = new Array();

    for (let dato of docJSON) {
        ccaa = dato.ccaa;
        dosisEntregadas = dato.dosisEntregadas;
        dosisAdministradas = dato.dosisAdministradas;
        dosisPautaCompletada = dato.dosisPautaCompletada;
        porcentajeEntregadas = dato.porcentajeEntregadas;
        porcentajePoblacionAdministradas = dato.porcentajePoblacionAdministradas;
        porcentajePoblacionCompletas = dato.porcentajePoblacionCompletas;
        let comunidad = {
            ccaa: ccaa,
            dosisEntregadas: dosisEntregadas,
            dosisAdministradas: dosisAdministradas,
            dosisPautaCompletada: dosisPautaCompletada,
            porcentajeEntregadas: porcentajeEntregadas,
            porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
            porcentajePoblacionCompletas: porcentajePoblacionCompletas,
        };
        comunidades.push(comunidad);
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let respuesta = JSON.parse(this.responseText);
            imprimirTabla(respuesta);
        }
    };
    let parametros = JSON.stringify(comunidades);
    xhr.open("POST", "insertar_comunidades.php", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(parametros);
    
    
    
}

function cargarTablaFETCH () {

    fetch('latest.json') 
    .then((response) => response.json())
    .then((data) => {
        let ccaa;
        let dosisEntregadas;
        let dosisAdministradas;
        let dosisPautaCompletada;
        let porcentajeEntregadas;
        let porcentajePoblacionAdministradas;
        let porcentajePoblacionCompletas;

        let comunidades = new Array();

        

        for (let dato of data) {
            ccaa = dato.ccaa;
            dosisEntregadas = dato.dosisEntregadas;
            dosisAdministradas = dato.dosisAdministradas;
            dosisPautaCompletada = dato.dosisPautaCompletada;
            porcentajeEntregadas = dato.porcentajeEntregadas;
            porcentajePoblacionAdministradas = dato.porcentajePoblacionAdministradas;
            porcentajePoblacionCompletas = dato.porcentajePoblacionCompletas;
            let comunidad = {
                ccaa: ccaa,
                dosisEntregadas: dosisEntregadas,
                dosisAdministradas: dosisAdministradas,
                dosisPautaCompletada: dosisPautaCompletada,
                porcentajeEntregadas: porcentajeEntregadas,
                porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
                porcentajePoblacionCompletas: porcentajePoblacionCompletas,
            };

            comunidades.push(comunidad);
        }

        fetch('insertar_comunidades.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comunidades)
            
        })
        .then((response) => response.json())
        .then((result) =>   imprimirTabla(result))
        .catch((error) => console.log("Error: " + error));
    })
    .catch((err) => console.log(err));
}

function imprimirTabla (datos) {
    let tabla = "<tr><th>Comunidad</th><th>D. Entregadas</th><th>D. Admin</th><th>D. Completa</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>% Pobl. Completa</th></tr>";
    for (let dato of datos) {
        if(dato.ccaa != "Totales") {
            let opcion = document.createElement("option");
            opcion.setAttribute("value", dato.ccaa);
            opcion.innerHTML = dato.ccaa;

            document.getElementById("ccaa").appendChild(opcion);

            tabla += "<tr><td>";
            tabla += dato.ccaa;
            tabla += "</td><td>";
            tabla += dato.dosisEntregadas;
            tabla += "</td><td>";
            tabla += dato.dosisAdministradas;
            tabla += '</td><td>';
            tabla += dato.dosisPautaCompletada;
            tabla += "</td><td>";
            tabla += dato.porcentajeEntregadas; 
            tabla += "</td><td>";
            tabla += dato.porcentajePoblacionAdministradas; 
            tabla += "</td><td>";
            tabla += dato.porcentajePoblacionCompletas; 
            tabla += "</td></tr>";
        }
    }
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("resultados").innerHTML += "Datos cargados de la Web";
}