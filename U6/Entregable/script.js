document.getElementById("xhr").addEventListener("click", cargarArmas);
document.getElementById("fetch").addEventListener("click", cargarArmasFetch);

function cargarArmas() {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            cargarJSON(xhr);
        }
    };

    xhr.open("GET", "listar_armas.php  ", true);
    xhr.send();

    document.getElementById("bando").addEventListener("change", filtrarArmasXHR);
}

function cargarJSON(json) {

    docJSON = JSON.parse(json.responseText);

    let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";

    for (let i = 0; i < docJSON.length; i++) {

        tabla += "<tr><td>";

        tabla += docJSON[i].nombre;

        tabla += "</td><td>";

        tabla += docJSON[i].descripcion;

        tabla += "</td><td>";

        tabla += "<img src='img/" + docJSON[i].imagen + "' style='width: 60px; height: 60px;' />";

        tabla += "</td><td>";

        let bando = docJSON[i].bando;

        if (bando == 1) {

            tabla += "Aliados</td></tr>";
        } else {

            tabla += "Eje</td></tr>";
        }


    }

    document.getElementById("armas").innerHTML = tabla;
}

function filtrarArmasXHR() {

    let bandoSelect = document.getElementById("bando").value;

    let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";

    for (let i = 0; i < docJSON.length; i++) {

        if (docJSON[i].bando == bandoSelect) {

            tabla += "<tr><td>";

            tabla += docJSON[i].nombre;

            tabla += "</td><td>";

            tabla += docJSON[i].descripcion;

            tabla += "</td><td>";

            tabla += "<img src='img/" + docJSON[i].imagen + "' style='width: 60px; height: 60px;' />";

            tabla += "</td><td>";

            if (docJSON[i].bando == 1) {

                tabla += "Aliados</td></tr>";
            } else {

                tabla += "Eje</td></tr>";
            }


        }
    }

    document.getElementById("armas").innerHTML = tabla;
}

function cargarArmasFetch() {

    fetch('listar_armas.php')

        .then((response) => response.json())

        .then((data) => {

            let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";

            for (let i = 0; i < data.length; i++) {

                tabla += "<tr><td>";

                tabla += data[i].nombre;

                tabla += "</td><td>";

                tabla += data[i].descripcion;

                tabla += "</td><td>";

                tabla += "<img src='img/" + data[i].imagen + "' style='width: 60px; height: 60px;' />";

                tabla += "</td><td>";

                let bando = data[i].bando;

                if (bando == 1) {

                    tabla += "Aliados</td></tr>";
                } else {

                    tabla += "Eje</td></tr>";
                }

            }

            document.getElementById("armas").innerHTML = tabla;

            document.getElementById("bando").addEventListener("change", function () {

                let bandoSelect = document.getElementById("bando").value;

                let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";

                for (let i = 0; i < data.length; i++) {

                    if (data[i].bando == bandoSelect) {

                        tabla += "<tr><td>";

                        tabla += data[i].nombre;

                        tabla += "</td><td>";

                        tabla += data[i].descripcion;

                        tabla += "</td><td>";

                        tabla += "<img src='img/" + data[i].imagen + "' style='width: 60px; height: 60px;' />";

                        tabla += "</td><td>";

                        if (data[i].bando == 1) {

                            tabla += "Aliados</td></tr>";
                        } else {

                            tabla += "Eje</td></tr>";
                        }


                    }
                }

                document.getElementById("armas").innerHTML = tabla;

            });
        })

        .catch((err) => console.log(err));


}

