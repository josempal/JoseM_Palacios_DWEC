
let arr = ["España", "Portugal", "Francia", "Alemania", "Bélgica", "Países Bajos"];
let res = "";
let ele = "";
let opt = null;

do {


    opt = prompt(`Seleccione una opción:

        1. Mostrar número de países.
        2. Mostrar listado de países.
        3. Mostrar un intervalo de países.
        4. Añadir un país.
        5. Borrar un país.
        6. Consultar un país.`)

    switch (opt) {

        case '1':

            res = getLength();
            document.write("<p>El número de países es: <br/>" + res + "</p>");
            break;

        case '2':

            opt = prompt(`Seleccione una opción:
            1. Mostrarlos en el orden insertado.
            2. Mostrarlos en el orden inverso al insertado.
            3. Mostrarlos ordenados alfabeticamente.`)

            switch (opt) {

                case '1':

                    res = getElements();
                    document.write(`<p> Listado de países en orden de inserción:<br/>` + res + `</p>`);
                    break;

                case '2':

                    res = getElementsInverse();
                    document.write(`<p> Listado de países en orden inverso al de inserción:<br/>` + res + `</p>`);
                    break;

                case '3':

                    res = getElementsSorted();
                    document.write(`<p> Listado de países en orden alfabético:<br/>` + res + `</p>`);
                    break;

                default:

                    alert("No ha seleccionado una opción válida");
            }

            break;

        case '3':

            opt = prompt("Introduce el intervalo en formato inicio-fin:");
            let interval = opt.split("-");

            res = getElementsByInterval(interval[0], interval[1]);
            document.write(`<p>Los países en el intervalo seleccionado son: <br/> ` + res + `</p>`);

            break;

        case '4':

            opt = prompt(`Seleccione una opción:
        1. Añadir al principio.
        2. Añadir al final.`);

            switch (opt) {

                case '1':

                    ele = prompt("Introduzca el elemento a añadir:");
                    addElement(ele);
                    document.write(`<p>Se ha añadido al principio el país: <br/> ` + ele + `</p>`);
                    break;

                case '2':

                    ele = prompt("Introduzca el elemento a añadir:");
                    addElementAtEnd(ele);
                    document.write(`<p>Se ha añadido al final el país: <br/> ` + ele + `</p>`);
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
                    document.write(`<p>Se ha borrado al principio el elemento: <br/> ` + res + `</p>`);
                    break;

                case '2':

                    res = deleElementAtEnd();
                    document.write(`<p>Se ha borrado al final el elemento: <br/> ` + res + `</p>`);
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
                    document.write("<p>El país en la posición " + ele + " es:<br/>" + res + "</p>");
                    break;

                case '2':

                    ele = prompt("Introduzca el país a consultar:");
                    res = getPosByElement(ele);
                    document.write("<p>La posición en la que se encuentra el país " + ele + " es:<br/>" + res + "</p>");
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

    return arr.toString();
}

function getElementsInverse() {

    return arr.reverse().toString();
}

function getElementsSorted() {

    sorted = arr.sort();
    return sorted.sort().toString();
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

function deleElementAtEnd() {

    return arr.pop();
}

function getElementByPos(pos) {

    return arr[pos] + 1;
}

function getPosByElement(pos) {

    return arr.indexOf(pos) + 1;
}

function getElementsByInterval(start, end) {

    return arr.slice(start - 1, end);
}