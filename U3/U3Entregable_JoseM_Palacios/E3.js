
function Aeropuerto(nombre, ciudad, nVuelo) {

    this.nombre = nombre;
    this.ciudad = ciudad;
    this.nVuelo = nVuelo;
   
}

function Vuelo(codigo, hora_llegada, hora_salida) {

    this.codigo = codigo;
    this.hora_salida = hora_salida;
    this.hora_llegada = hora_llegada;

    this.setHoraSalida = function(hora_salida) {

        this.hora_salida = hora_salida;
    }
    
    this.setHoraLlegada = function(hora_llegada) {

        this.hora_llegada = hora_llegada;
    }

    this.checkHora = function() {

        if (this.hora_salida < this.hora_llegada) {
            return 1;
        } else {
            return 0;
        }
    }
}

arrVuelos = [new Vuelo(1, "11:00", "12:00"), 
new Vuelo(2, "11:00", "12:00"),
new Vuelo(3, "11:00", "12:00"),
new Vuelo(4, "11:00", "12:00"),
new Vuelo(5, "11:00", "12:00"),
new Vuelo(6, "11:00", "12:00"),
new Vuelo(7, "11:00", "12:00"),
new Vuelo(8, "11:00", "12:00"),
new Vuelo(9, "11:00", "12:00"),
new Vuelo(10, "11:00", "12:00")]

let arpto1 = new Aeropuerto("SVQ", "Sevilla", 
    arrVuelos);

arpto1.nVuelo[0].setHoraSalida("13:00");

if (arpto1.nVuelo[0].checkHora() == 1) {

    alert("La hora de salida es inferior a la de llegada.");
} else {

    alert("ERROR. La hora de salida es superior a la de llegada ");
}

arpto1.nVuelo[0].setHoraLlegada("14:00");

if (arpto1.nVuelo[0].checkHora() == 1) {

    alert("La hora de salida es inferior a la de llegada.");
} else {

    alert("ERROR. La hora de salida es superior a la de llegada ");
}

