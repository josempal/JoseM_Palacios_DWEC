
var opt = "";
var res = true;

while (res) {
    
    opt = prompt("¿Quiere comenzar una nueva partida?");

    if (opt == "si" || opt == "sí") {
        res = randomGame();
    } else {
        res = false;
    }
}    


function randomGame() {

    let res = Math.floor(Math.random() * 100) + 1;
    let count = 0;
    let num = "";

    do {
        num = prompt("Intenta adivinar el número:");        // Pide un número al usuario

        if (num == null || num == "") {                     // Comprueba que introduzca algo o no pulse en cancelar
            
            alert("El usuario ha cancelado la partida");
            return false;
        }

        while (isNaN(num)) {                                // Comprueba si el valor introducido no es un número

            num = prompt("Intenta adivinar el número:");    // En ese caso, entra en el bucle, pide de nuevo un número
            if (num == null || num == "") {                              // y comprueba que no se pulse en cancelar
               
                alert("El usuario ha cancelado la partida");
                return false;
            }
        }

        if (res < num) {                                    // Da pistas al usuario sobre el número
            alert("El número es menor al introducido.");
        } else if (res > num) {
            alert("El número es mayor al introducido.");
        }

        count++;                                            // Cuenta el número de intentos
    } while (num != res);

    alert("¡Has acertado el número! \n Nº intentos: " + count);
    return true;
}