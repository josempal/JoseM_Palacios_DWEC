
function imc() {

    let kg = prompt("Introduce el peso en kg:");
    let cm = prompt("Introduce la altura en cm");
    let m = cm / 100;
    let res = (kg / Math.pow(m, 2)).toFixed(2);

    alert("El índice de masa corporal es " + res);
}

function fcm() {

    let edad = prompt("Introduce tu edad");
    
    alert("La frecuencia cardiaca máxima es " + (220 - edad));

}