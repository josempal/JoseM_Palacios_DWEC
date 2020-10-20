let date = new Date();
var h = date.getHours();
var format = "AM";

if (h >= 12) {

    h -= 12;
    format = "PM";
}

let opt = prompt(`Indica el formato para representar la hora:


    1. Sistema de 24 horas
    2. Sistema de 12 horas sin segundos
    3. Sistema de 12 horas
    
    `);

switch(parseInt(opt)) {

    case 1:

        alert(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        break;
    
    case 2:

        alert(h + ":" + date.getMinutes() + " " + format);
        break;

    case 3:

        alert(h + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + format);
        break;

    default:

        alert("No has seleccionado una opción válida.");
}