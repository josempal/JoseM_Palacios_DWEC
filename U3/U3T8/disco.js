
function Disco() {

    this.nombre = "";
    this.grupo = "";
    this.anyoPub = "";
    this.genero = "";
    this.localizacion = 0;
    this.prestado = false;

    this.addDisco = function (nombre, grupo, anyoPub, genero, localizacion) {

        this.nombre = nombre;
        this.grupo = grupo;
        this.anyoPub = anyoPub;
        this.genero = genero;
        this.localizacion = localizacion;
    }

    this.setLocalizacion = function (localizacion) {

        this.localizacion = localizacion;
    }

    this.setPrestado = function (prestado) {

        this.prestado = prestado;
    }

    this.getInfo = function() {

        let status = "";

        if (this.prestado === false) {
            status = "Disponible";
        } else {
            status = "Prestado"
        }

        return "<p> Nombre del disco: " + this.nombre +
            "<br> Grupo o cantante: " + this.grupo +
            "<br> Año de publicacion: " + this.anyoPub +
            "<br> Género: " + this.genero +
            "<br> Localización del disco: Estanteria " + this.localizacion +
            "<br> Estado del disco: " + status + "</p>";

    }
}

let disco1 = new Disco();
let disco2 = new Disco();
let disco3 = new Disco();

disco1.addDisco("Killers", "Iron Maiden", "1981", "rock", 7);
disco2.addDisco("Por mí y por todos mis cumpleaños", "El canto del Loco", "2009", "pop", 6);
disco3.addDisco("Enema of the State", "Blink-182", "1999", "punk", 3);

let arr = [disco1, disco2, disco3];
let res = "";
let ele = "";
let opt = null;

do {


    opt = prompt(`Seleccione una opción:

        1. Mostrar número de discos.
        2. Mostrar listado de discos.
        3. Mostrar un intervalo de discos.
        4. Añadir un disco.
        5. Borrar un disco.
        6. Consultar un disco.`)

    switch (opt) {

        case '1':

            res = getLength();
            document.write("<p>El número de discos es: <br/>" + res + "</p>");
            break;

        case '2':

            opt = prompt(`Seleccione una opción:
            1. Mostrarlos en el orden insertado.
            2. Mostrarlos en el orden inverso al insertado.
            3. Mostrarlos ordenados alfabeticamente.`)

            switch (opt) {

                case '1':

                    res = getElements();
                    document.write("<h1> Listado de discos en orden de inserción:</h1><br/>" + res);
                    break;

                case '2':

                    res = getElementsInverse();
                    document.write("<h1> Listado de discos en orden inverso al de inserción:</h1><br/>" + res);
                    break;

                case '3':

                    res = getElementsSorted();
                    document.write("<h1> Listado de discos en orden alfabético por autor:</h1><br/>" + res);
                    break;

                default:

                    alert("No ha seleccionado una opción válida");
            }

            break;

        case '3':

            opt = prompt("Introduce el intervalo en formato inicio-fin:");
            let interval = opt.split("-");

            res = getElementsByInterval(interval[0], interval[1]);
            document.write("<h1>Los discos en el intervalo seleccionado son:</h1><br/>" + res);

            break;

        case '4':

            opt = prompt(`Seleccione una opción:
        1. Añadir al principio.
        2. Añadir al final.`);
            
            let opt1 = "";
            let opt2 = "";
            let opt3 = "";
            let opt4 = "";
            let opt5 = 0;
            let disco = new Disco();
            let num = 0;

            switch (opt) {

                case '1':

                    opt1 = prompt("Introduzca el nombre del disco a añadir:");
                    opt2 = prompt("Introduzca el nombre del cantante/grupo:");
                    opt3 = prompt("Introduzca el año de publicación del álbum:");
                    opt4 = prompt("Introduza el género del disco (pop, rock, punk, indie)");
                    opt5 = prompt("Introduzca la estantería donde se ubica:");

                    disco = new Disco();
                    disco.addDisco(opt1, opt2, opt3, opt4, opt5);
                    
                    num = addElement(disco);
                    document.write("<h1>Se ha añadido al principio el disco:</h1><br/>" + disco.getInfo() +
                                    "<br><br> <p> El nuevo tamaño de la colección de discos es: " + num + "</p>");
                    break;

                case '2':

                    opt1 = prompt("Introduzca el nombre del disco a añadir:");
                    opt2 = prompt("Introduzca el nombre del cantante/grupo:");
                    opt3 = prompt("Introduzca el año de publicación del álbum:");
                    opt4 = prompt("Introduza el género del disco (pop, rock, punk, indie)");
                    opt5 = prompt("Introduzca la estantería donde se ubica:");

                    disco = new Disco();
                    disco.addDisco(opt1, opt2, opt3, opt4, opt5);

                    num = addElementAtEnd(ele);
                    document.write("<h1>Se ha añadido al final el disco: </h1><br/>" + disco.getInfo() +
                                    "<br><br> <p> El nuevo tamaño de la colección de discos es: " + num + "</p>");
                    break;

                default:

                    alert("No ha seleccionado una opción válida");
            }

            break;

        case '5':

            opt = prompt(`Seleccione una opción:
            1. Borrar al principio.
            2. Borrar al final.`);

            switch (opt) {

                case '1':

                    res = deleteElement();
                    document.write("<h1>Se ha borrado al principio el elemento:</h1><br/>" + res.getInfo());
                    break;

                case '2':

                    res = deleteElementAtEnd();
                    document.write("<h1>Se ha borrado al final el elemento:</h1><br/>" + res.getInfo());
                    break;

                default:

                    alert("No ha seleccionado una opción válida");
            }

            break;

        case '6':

            opt = prompt(`Seleccione una opción:
            1. Consultar por posición.
            2. Consultar por nombre.`);

            switch (opt) {

                case '1':

                    ele = prompt("Introduzca la posición a consultar:");
                    res = getElementByPos(ele);
                    document.write("<h1>El disco en la posición " + ele + " es:</h1><br/>" + "<p>" + res.getInfo() + "</p>");
                    break;

                case '2':

                    ele = prompt("Introduzca el disco a consultar:");
                    res = getPosByElement(ele);
                    document.write("<h1>La posición en la que se encuentra el disco " + ele + " es:</h1><br/>" + "<p>" + 
                                    res + "<br>" + arr[res - 1].getInfo() + "</p>");
                    break;

                default:

                    alert("No ha seleccionado una opción válida");
            }

            break;

        default:

            alert("No ha seleccionado una opción válida");
    }
} while (opt != null)

// Métodos

function getLength() {

    return arr.length;
}

function getElements() {

    let res = "";

    for (x of arr) {

        res += x.getInfo();
    }

    return res;
}

function getElementsInverse() {

    let res = "";
    let aux = arr.reverse();

    for (x of aux) {

        res += x.getInfo();
    }

    return res;
}

function getElementsSorted() {

    let res = "";
    sorted = arr.sort(function(a, b) {

        if (a.grupo < b.grupo) {
            
            return -1;
        } else if (a.grupo > b.grupo) {

            return 1;
        } else {
            
            return 0;
        }
    });

    for (x of sorted) {

        res += x.getInfo();
    }

    return res;
}

function addElement(ele) {

    return arr.unshift(ele);
}

function addElementAtEnd(ele) {

    return arr.push(ele);
}

function deleteElement() {

    return arr.shift();
}

function deleteElementAtEnd() {

    return arr.pop();
}

function getElementByPos(pos) {

    return arr[pos - 1];
}

function getPosByElement(name) {

    let res = "";

    for (x in arr) {

        if (arr[x].nombre == name) {

            return x + 1;
        }
    }
}

function getElementsByInterval(start, end) {

    let res = "";
    let aux = arr.slice(start - 1, end);

    for (x of aux) {

        res += x.getInfo();
    }

    return res;
}



