
document.getElementById("btn").addEventListener("click", function () {

    let titulo = document.getElementById("titulo").value;
    let director = document.getElementById("director").value;
    let cadena = document.getElementById("cadena").value;
    let anyo = document.getElementById("anyo").value;
    let terminada = document.getElementById("terminada").checked;

    let objeto = JSON.stringify({

        "titulo": titulo,
        "director": director,
        "cadena": cadena,
        "anyo": anyo,
        "terminada": terminada
    });

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let docJSON = JSON.parse(this.responseText);

            if (docJSON == "ok") {

                cargarCatalogo();
            } else {

                document.getElementById("resultado").style.color = "red";
                document.getElementById("resultado").innerHTML = docJSON;
            }
            
        } 

    };

    

    xhr.open("POST", "create_serie.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("objeto=" + objeto);
});


// --------------------------------------------------------------------------------------------

function cargarCatalogo() {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            cargarJSON(xhr);
        }
    };

    xhr.open("GET", "listar_series.php  ", true);
    xhr.send();
}

function cargarJSON(json) {

    let docJSON = JSON.parse(json.responseText);

    let tabla = "<tr><th>Título</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";

    let series = docJSON;

    console.log(series);
    for (let i = 0; i < series.length; i++) {

        tabla += "<tr><td>";

        tabla += series[i].titulo;

        tabla += "</td><td>";

        tabla += series[i].cadena;

        tabla += "</td><td>";

        tabla += series[i].director;

        tabla += "</td><td>";

        let anyo = series[i].anyo;

        if (anyo <= 2000) {

            tabla += "<span class='rojo'>" + anyo + "</span>";

        } else if (anyo >= 2001 && anyo <= 2010) {

            tabla += "<span class='amarillo'>" + anyo + "</span>";

        } else {

            tabla += "<span class='verde'>" + anyo + "</span>";
        }

        tabla += "</td><td>";

        let estado = series[i].terminada;

        if (estado === "Si") {

            tabla += "<img src='img/tick.jpeg' style='width: 20px; height: 20px;' /></td></tr>"
        } else {

            tabla += "<img src='img/x.jpg' style='width: 20px; height: 20px;' /></td></tr>"
        }

    }

    document.getElementById("demo").innerHTML = tabla;
}