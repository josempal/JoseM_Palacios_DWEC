
let mes = prompt("Ingresa el mes en que naciste:");
let dia = prompt("Ingresa el día en que naciste:");

let anyosDom = new Array();
let actual = new Date();
let anyoActual = actual.getFullYear();

for (anyoActual; anyoActual <= 2100; anyoActual++) {

    if (checkCumpleanyos(anyoActual)) {
        anyosDom.push(anyoActual);
    }
}

console.log(anyosDom);

function checkCumpleanyos(anyo) {

    let fecha = new Date(anyo, mes-1, dia)

    if (fecha.getDay() == 0) 
        return true;
    else {
        return false;
    }
}

