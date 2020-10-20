
let opt = prompt("Elige una operación a relizar: \n\n" +
    "   1. Potencia\n   2. Raíz\n   3. Redondeo\n   4. Trigonometría");

switch (parseInt(opt)) {
    
    case 1:

        let base = prompt("Introduzca la base:");
        let exp = prompt("Introduzca el exponente:");
        alert("La potencia de " + base + " elevado a " + exp + " es: "+ Math.pow(base, exp));
        break;
    
    case 2: 

        let num = -1;
        
        while(num < 0) {

            num = prompt("Introduce el número:")
        }

        alert("La raíz de " + num + " es: " + Math.sqrt(num));
        break;
    
    case 3:

        let dec = prompt("Introduce el número a redondear:");

        alert("El redonde de " + dec + " a la alta es: " + Math.ceil(dec));
        alert("El redonde de " + dec + " a la baja es: " + Math.floor(dec));
        break;
    
    case 4:

        let ang = -1;

        while(ang < 0 || ang > 360) {
            
            ang = prompt("Introduce el ángulo:");
        }

        alert("El seno de " + ang + " es: " + Math.sin(ang));
        alert("El coseno de " + ang + " es: " + Math.cos(ang));
        alert("La rangente de " + ang + " es: " + Math.tan(ang));
        break;
    
        
    default:

        alert("No has introducido una opción válida.");

}
