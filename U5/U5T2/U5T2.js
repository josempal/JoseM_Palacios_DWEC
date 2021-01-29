window.addEventListener("load", inicio);

function inicio() {

    document.getElementById("newLi").addEventListener("click", newLiElement);
    document.getElementById("firstLi").addEventListener("click", firstLiElement);
    document.getElementById("lastLi").addEventListener("click", lastLiElement);
}

function newLiElement() {

    let ul = document.getElementById("list");

    let text = document.createTextNode(prompt("Introduzca el contenido de elemento a listar:"));

    let li = document.createElement("li");
    
    li.appendChild(text);

    ul.appendChild(li);
}   

function firstLiElement() {

    let lis = document.getElementById("list");

    let li = lis.firstChild;

    lis.removeChild(li);
}

function lastLiElement() {

    let lis = document.getElementById("list");

    let li = lis.lastChild;

    lis.removeChild(li);
}