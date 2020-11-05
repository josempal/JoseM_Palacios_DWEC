
    let msg = prompt(`Introduce una cadena con el siguiente formato para saber cada dato:
                    nombre:apellidos:telefono:email:codigopostal`);

    let arrayMsg = msg.split(":");
    let dominio = arrayMsg[3].split("@");

    document.write("Código postal: " + arrayMsg[4] + "<br>");
    document.write("Apellidos: " + arrayMsg[1] + "<br>");
    document.write("Email: " + arrayMsg[3] + "<br>");
    document.write("Servidor asociado: " + dominio[1] + "<br>");


