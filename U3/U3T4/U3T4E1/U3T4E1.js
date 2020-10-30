let nom = prompt("Introduce tu nombre:");
let nombre = nom.trim();
let apell = prompt("Introduce tus apellidos");
let apellidos = apell.trim();
let compNom = nom + " " + apell;
//let wSpaces = compNom.replace(/ /g, "");
let arrApell = apellidos.split(" ");

alert(compNom.length);

alert(compNom.toLocaleLowerCase());

alert(compNom.toLocaleUpperCase());

alert("Nombre: " + nombre + "\n"
    + "Apellido1: " + arrApell[0] + "\n"
    + "Apellido2: " + arrApell[1]);

alert("Propuesta de nombre de usuario 1:\n" + nombre.charAt()
    + arrApell[0] + arrApell[1].charAt());

alert("Propuesta de nombre de usuario 2:\n" + nombre.substr(0, 3)
    + arrApell[0].substr(0, 3) + arrApell[1].substr(0, 3));