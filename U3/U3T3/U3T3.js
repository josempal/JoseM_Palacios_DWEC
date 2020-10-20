
let opt = prompt("Introduce un número entero: ");
let num = parseInt(opt);
console.log(num.toExponential() + " / " + num.toFixed(4) + " / " + num.toString(2) + " / " 
    + num.toString(8) + " / " + num.toString(16));