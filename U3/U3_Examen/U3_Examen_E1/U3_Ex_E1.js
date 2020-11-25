
function Bandeja(tipo_pastel, variedad_pastel, cant_pastel, hora_elab) {

    this.tipo_pastel = tipo_pastel;
    this.variedad_pastel = variedad_pastel;
    this.cant_pastel = cant_pastel;
    this.hora_elab = hora_elab;
    this.hora_ult_venta = null;

    this.tiempo_venta = function () {

        let dif = this.hora_elab.getTime() -this.hora_ult_venta.getTime();

        let secs = dif / 1000;

        let hours = parseInt(secs / (60 * 60));
        secs = secs % (60 * 60);
 
        let mins = parseInt(secs / 60);
     
        secs = parseInt(secs % 60);
        
        return hours + "h:" + mins + "m:" + secs + "s";
    }

    this.restar = function (cant) {

        if (this.cant_pastel - cant < 0) {

            this.cant_pastel = 0;
        } else {
            this.cant_pastel -= cant
        }
    }

    this.toString = function () {

        return "Tipo pastel: " + this.tipo_pastel + "| Variedad pastel: " + this.variedad_pastel
            + "| Cantidad: " + this.cant_pastel + "| Hora elaboración: " + this.hora_elab.getHours() + ":"
            + this.hora_elab.getMinutes() + ":" + this.hora_elab.getSeconds()
            + "| Hora última venta: " + this.hora_ult_venta.getHours() + ":"
            + this.hora_ult_venta.getMinutes() + ":" + this.hora_ult_venta.getSeconds()
    }
}

function LaPlata() {

    this.mostrador = [];

    this.poner_en_mostrador = function (bandeja) {

        let boolpastel = false;
        let booltipo = false;

        for (x of this.mostrador) {

            if (x.tipo_pastel === pastel.tipo_pastel) {
                boolpastel = true;
            }

            if (x.variedad_pastel == pastel.tipo_pastel) {
                booltipo = true;
            }
        }

        if (boolpastel == false || booltipo == false) {

            this.mostrador.push(bandeja);
        }
    }

    this.vender_pastel = function(tipo, variedad, cant) {

        for (x of this.mostrador) {

            if (x.tipo_pastel === tipo
                && x.variedad_pastel === variedad
                && x.cant_pastel > 0) {

                if (x.cant_pastel - cant <= 0) {

                    x.restar(cant);
                    x.hora_ult_venta = new Date();
                    console.log(x.tiempo_venta());

                } else {

                    x.restar(cant);
                    x.hora_ult_venta = new Date();
                }
            } else {
                console.log("No hay bandeja con el pastel seleccionado")
            }
        }
    }
}


let p1 = new Bandeja("Caracola", "Relleno crema", 15, new Date(2020, 11, 19, 13, 03, 00));
let laPlata = new LaPlata();

laPlata.poner_en_mostrador(p1);

laPlata.vender_pastel("Caracola", "Relleno crema", 10);

for (x of laPlata.mostrador)
console.log(x.toString());
