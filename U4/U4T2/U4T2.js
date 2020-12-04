









nodos_cartas = document.getElementsByClassName("card");
    for (const nodo of nodos_cartas) {
      nodo.addEventListener("click", comprobar_iguales, false);
    }

    let cartas = [];
    let images_cartas = [
      "img/05_maggie.png",
      "img/01_lisa.png",
      "img/02_bart.png",
      "img/03_homer.png",
      "img/02_bart.png",
      "img/04_marge.png",
      "img/06_flanders.png",
      "img/01_lisa.png",
      "img/05_maggie.png",
      "img/04_marge.png",
      "img/06_flanders.png",
      "img/03_homer.png",
    ];
    let clic_counter = 0;

    function show_image(nodo) {
      // nodo.id   valdrá algo como "card_1".
      console.log("carta: " + nodo.id.split("_")[1]);
      // me quedo con el número y lo uso para obtener la imagen del array de imágenes
      document.getElementById(nodo.id).src = images_cartas[nodo.id.split("_")[1]];
    }

    function comprobar_iguales(objeto) {
      objeto = objeto.target;
      clic_counter++;
      cartas[clic_counter - 1] = objeto;
      show_image(cartas[clic_counter - 1]);
      console.log(cartas[clic_counter - 1]);

      if (cartas[0] !== undefined && cartas[1] !== undefined && clic_counter === 2) {
        console.log("1: " + cartas[0] + " – 2: " + cartas[1] + "|" + clic_counter);

        clic_counter = 0;
        setTimeout(() => {
          if (cartas[0].src === cartas[1].src) {
            cartas[0].style = "background-color: green;";
            cartas[1].style = "background-color: green;";
            cartas[0].nextElementSibling.value = 1;
            cartas[1].nextElementSibling.value = 1;
          }
          for (let i = 0; i <= 1; i++) {
            document.getElementById(cartas[i].id).src = "";
            cartas[i] = undefined;
          }
        }, 1000);
      }
    }