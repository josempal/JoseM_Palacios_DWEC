
window.addEventListener("load", iniciar);

let cookieCont = 0;

function iniciar() {

    document.getElementById("enviar").addEventListener("click", validar);
    document.getElementById("enviar").addEventListener("click", incrementar);
    document.getElementById("nombre").addEventListener("change", mayus);
    document.getElementById("apellidos").addEventListener("change", mayus);
    document.getElementById("intentos").innerHTML = cookieCont;
}

function validar(evento) {

    if (validateNomApe() && validateEdad() && validateNIF() && validateEmail() &&
        validateProvincia() && validateFecha() && validateTelefono() && validateHora()
        && confirm("¿Desea enviar el formulario?")) {

        return true;
    } else {

        evento.preventDefault();
    }
}

function incrementar() {

    cookieCont++;
    set_cookie("contador", cookieCont, 7);  
    document.getElementById("intentos").innerHTML = cookieCont; 
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return -1;
}

function set_cookie(nombre, valor, expiracion) {
    let d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function mayus(e) {

    e.target.value = e.target.value.toLocaleUpperCase();
}



function validateNomApe(){

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");

    limpiarError(nombre);
    limpiarError(apellidos);

    if (nombre.value === "" || nombre.length == 0){
        
        document.getElementById("errores").innerHTML = "El nombre no puede estar vacío";
        error(nombre);      
        return false;
    } else if (apellidos.value === ""){
        
        document.getElementById("errores").innerHTML = "El campo Apellidos no puede estar vacío";   
        error(apellidos);
        return false;
    }

    return true;

}

function validateEdad(){

    let edad = document.getElementById("edad");

    limpiarError(edad);

    if (/^\d$|^[1-9]\d$|^10[0-5]$/.test(edad.value)){
  
        return true;
    } else {
        
        document.getElementById("errores").innerHTML = "El campo edad debe ser un número en el rango 0-105";
        error(edad);
        return false;
    }

}

function validateNIF(){

    let nif = document.getElementById("nif");
    limpiarError(nif);

    // Evalúa que empiece por ocho dígitos seguidos de un guión y terminando una letra minúscula o mayúscula
    const dni = /^\d{8}-[A-Za-z]{1}$/;

    if (dni.test(nif.value)){
          
        return true;
    } else {
        
        document.getElementById("errores").innerHTML = " El campo NIF debe contener 8 números, un guión y letra";
        error(nif);
        return false;
    }
}

function validateEmail(){
    
    let email = document.getElementById("email");
    limpiarError(email);

    // Evalúa que empiece por uno o más caracteres alfanúmericos, barra baja, punto o guión. Continúa con una arroba
    // y evalúa que contenga caracteres alfanúmericos, barra baja, guión y continúe un punto (dominio). Debe finalizar 
    // con entre dos y cuatro caracteres alfanúmericos, barra baja o guión
    const correo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (correo.test(email.value)){

        return true;
    } else {
        
        document.getElementById("errores").innerHTML = "El campo email no tiene un formato correcto";
        error(email);
        return false;
    }
}

function validateProvincia(){

    let provincia = document.getElementById("provincia");
    limpiarError(provincia);

    if (provincia.value == 0){
        
        document.getElementById("errores").innerHTML = "No ha seleccionado una provincia";
        error(provincia);
        return false;
    } else {
        
        return true;
    }

}

function validateFecha(){
    
    let fecha = document.getElementById("fecha");
    limpiarError(fecha);

    // Evalúa que empiece por dos dígitos seguidos de - o /. Continúe con dos dígitos seguidos de - o / y 
    // termine con cuatro dígitos
    const date = /^\d{2}\/\d{2}\/\d{4}$|^\d{2}-\d{2}-\d{4}$/
    
    if(date.test(fecha.value)){
        
        return true;
    } else {
        
        document.getElementById("errores").innerHTML = "No ha introducido un formato de fecha válido";
        error(fecha);
        return false;
    }

}

function validateTelefono(){

    let telefono = document.getElementById("telefono");
    limpiarError(telefono);

    // Evalúa que sean nueve dígitos
    const tel = /^\d{9}$/;

    if (tel.test(telefono.value)) {
       
        return true;
    } else {
        
        document.getElementById("errores").innerHTML = "No ha introducido un formato de teléfono válido";
        error(telefono);
        return false;
    }
}

function validateHora(){
    
    let hora = document.getElementById("hora");
    limpiarError(hora);

    //Evalúa que sean dos dígitos seguidos de dos puntos y finalice con dos dígitos
    const hour = /^\d{2}:\d{2}$/;

    if (hour.test(hora.value)) {
        
        return true;
    } else {
        
        document.getElementById("errores").innerHTML = "No ha introducido un formato de hora válido";
        error(hora);
        return false;
    }
}

function error(input) {

    input.className = "error";
    input.focus();
}

function limpiarError(input) {

    input.className = "";
}