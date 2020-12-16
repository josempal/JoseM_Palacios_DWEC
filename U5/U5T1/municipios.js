
let info = document.getElementById("info");

let p = document.getElementsByTagName("p");

let p2nd = p[1].textContent;

let a = document.getElementsByTagName("a");

let a1st = a[0].getAttribute("href");

let aBLast = a[a.length - 2].getAttribute("href");

let aWikiSize = 0;

    for (let i = 0; i < a.length; i++) {

        if (/^\/wiki\/Municipio/.test(a[i].getAttribute("href"))) {

            aWikiSize += 1;
        }
    }

let a1stP = p[0].getElementsByTagName("a").length;

info.innerHTML = "Número de párrafos de la página: <br>" + p.length +
                    "<br><br>Texto del segundo párrafo: <br>" + p2nd +
                    "<br><br>Número de enlaces de la página: <br>" + a.length +
                    "<br><br>Dirección del primer enlace: <br>" + a1st +
                    "<br><br>Dirección del penúltimo enlace: <br>" + aBLast +
                    "<br><br>Número de enlaces que apuntan a /wiki/Municipio <br>" + aWikiSize +
                    "<br><br>Número de énlaces del primer párrafo: <br>" + a1stP; 

console.log(p2nd)