let radio = prompt("Introduce el valor del radio:");

alert("El valor del radio es: " + radio + " cm");
alert("El valor del diametro: " + radio * 2 + " cm");
alert("El valor del perímetro de la circunferencia es: " + (2 * Math.PI * radio).toFixed(2) + " cm");
alert("El valor del área del círculo es: " + (Math.PI * Math.pow(radio, 2)).toFixed(2) + " cm2");
alert("El valor del área de la esfera: " + (4 * Math.PI * Math.pow(radio, 2)).toFixed(2) + " cm3");
alert("El valor del volumen de la esfera: " + (4 / 3 * Math.PI * Math.pow(radio, 3)).toFixed(2) + " cm3");  