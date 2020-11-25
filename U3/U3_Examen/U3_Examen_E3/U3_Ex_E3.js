
let msg = prompt("Introduce el producto y la zona con el siguiente formato: tipo_producto|modelo|cantidad@cz:");

if (msg.includes("|") && msg.includes("@") && msg != null) {

    let arrayMsg = msg.split("|");

    let aux = arrayMsg[2].split("@");
    let cant = aux[0];
    let zona = aux[1];

    let products = ["televisor", "tablet", "smartphone", "laptop"];
    let model_pattern = new RegExp("[A-Z]{3}[0-9]{3}");
    let zone = ["HU", "CA", "SE"];

    if (checkProducts(arrayMsg[0])
        && model_pattern.test(arrayMsg[1])
        && isNaN(cant) === false
        && checkZone(zona)) {

        document.getElementById("prod").innerHTML = "Tipo producto: " + arrayMsg[0];
        document.getElementById("mod").innerHTML = "Modelo: " + arrayMsg[1];
        document.getElementById("cant").innerHTML = "Cantidad: " + cant;
        document.getElementById("zon").innerHTML = "Zona: " + zona;
    } else {
        alert("Los datos introducidos son incorrectos");
    }
} else {
    alert("El formato es incorrecto");
}
/*  console.log(checkProducts(arrayMsg[0]));
 console.log(model_pattern.test(arrayMsg[1]));
 console.log(isNaN(cant));
 console.log(checkZone(zona)); */

function checkProducts(prod) {

    let res = false;

    for (let i = 0; i < products.length; i++) {

        if (prod === products[i]) {

            res = true;
        }
    }

    return res;
}

function checkZone(zona) {

    let res = false;

    for (let i = 0; i < zone.length; i++) {

        if (zona === zone[i]) {

            res = true;
        }
    }

    return res;
}

