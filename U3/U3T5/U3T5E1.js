let win;
let opt = confirm("¿Quiere abrir una nueva ventana?");

if (opt) {

    win = open("", "blank", "width=200,height=100,top=500,left=500,resizable=no,location=no,menubar=no,toolbar=no");
    win.document.write(`<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati molestiae deserunt 
            repudiandae modi ullam, maxime vel! Accusantium debitis sapiente beatae non numquam repellendus aut, rerum fugit 
            eos quasi exercitationem dolorum?</p>
            <button type="button" onclick="window.close()">Cerrar ventana</button>`)
}

function tryOpen() {

    let opt = confirm("¿Quiere abrir una nueva ventana?");

    if (opt) {

        win = open("", "blank", "width=200,height=100,top=500,left=500,resizable=no,location=no,menubar=no,toolbar=no");
        win.document.write(`<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati molestiae deserunt 
            repudiandae modi ullam, maxime vel! Accusantium debitis sapiente beatae non numquam repellendus aut, rerum fugit 
            eos quasi exercitationem dolorum?</p>
            <button type="button" onclick="window.close()">Cerrar ventana</button>`)

    }
}

function tryClose() {

    if (win.closed) {

        alert("La ventana ya ha sido cerrada");
    } else {

        win.close();
    }
}



function moveTo100() {

    win.moveTo(100, 100);
}

function resize10() {

    win.resizeBy(10, 10);
}

function resizeTo400x200() {

    win.resizeTo(400, 200);
}

function scrollUp() {

    win.scrollTo(0, 0);
}

function scroll10() {

    win.scrollTo(0, 10);
}