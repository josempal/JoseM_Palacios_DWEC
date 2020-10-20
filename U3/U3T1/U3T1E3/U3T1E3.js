
let date = new Date();
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

let opt = prompt(`Indica el formato para representar la fecha:


   1. Solo números
   2. Formato largo en español
   3. Formato largo en inglés`);

switch (parseInt(opt)) {

   case 1:

      alert(date.getDate() + "/" + (date.getMonth() + 1)+ "/" + date.getFullYear());
      break;

   case 2:

      alert(dias[date.getDay()] + ", " + date.getDate() + " de " + meses[date.getMonth()] + " de " + date.getFullYear());
      break;

   case 3:

      alert(days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
      break;

   default:

      alert("No has seleccionado una opción correcta.");
   
}

