
function Bandeja(tipo_pastel, variedad_pastel, cant_pastel, hora_elab) {

    this.tipo_pastel = tipo_pastel;
    this.variedad_pastel = variedad_pastel;
    this.cant_pastel = cant_pastel;
    this.hora_elab = hora_elab;
    this.hora_ult_venta = new Date();

    /*this.tiempo_venta = function() {

        let dif = this.hora_ult_venta.getTime() - this.hora_elab.getTime();

        const msHora = (60*60) * 1000;
        const msMin = 60 * 1000;

        let horas = dif / msHora;
        let mins = dif / msMin;
        let segs = dif / 1000

    }*/

    this.restar = function(cant) {

        if (this.cant_pastel - cant < 0) {

            this.cant_pastel = 0;
        } else {
        this.cant_pastel -= cant 
       }
    }
}

function LaPlata() {

    this.mostrador = [];

    this.poner_en_mostrador = function(pastel) {

        let boolpastel = false;
        let booltipo = false;

        for (x of mostrador) {

            if (x.tipo_pastel === pastel.tipo_pastel) {
                boolpastel = true;
            }
        }

        for (y of mostrador) {

            if (y.variedad_pastel == pastel.tipo_pastel) {
                booltipo = true;
            }
            
        }

        if (boolpastel == false && booltipo == false) {

            this.mostrador.push(pastel)
        }
    }
}

