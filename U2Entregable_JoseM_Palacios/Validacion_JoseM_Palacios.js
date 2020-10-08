
function checkDni() {

    let dni = document.getElementById("dni").value;
    let letra = document.getElementById("letra").value;
    let dniComp = dni + letra;

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
        'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if ((/^\d{8}[A-Z]$/.test(dniComp))) {

        if (letra != letras[(dni.substring(0, dni.length)) % 23]) {
            
            alert("La letra del NIF es incorrecta. Seleccionar la letra " +
                letras[(dni.substring(0, dni.length)) % 23]);
        } else {
            
            alert("DNI correcto");
        }


    } else if (dni.length == 8) {
        
            alert("Teclear un DNI (sin letra, solo números)");
        } else {
        
            alert("Completar el campo DNI");
    }

}