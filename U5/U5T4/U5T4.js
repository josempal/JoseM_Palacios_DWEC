window.addEventListener("load", inicio);

function inicio() {

    document.getElementById("b-text").addEventListener("click", createText);
    document.getElementById("b-pw").addEventListener("click", createPw);
    document.getElementById("b-textarea").addEventListener("click", createTextArea);
    document.getElementById("b-label").addEventListener("click", createLabel);
    document.getElementById("b-img").addEventListener("click", createImg);
    document.getElementById("b-checkbox").addEventListener("click", createCheckbox);
    document.getElementById("b-radio").addEventListener("click", createRadio);
    document.getElementById("b-button").addEventListener("click", createButton);
}

function createText() {

    let attr = prompt("Inserte el nombre del elemento:");

    let inputText = document.createElement("input");
    inputText.setAttribute("name", attr);
    inputText.setAttribute("id", attr);
    inputText.setAttribute("type", "text");
    document.body.appendChild(inputText);
}

function createPw() {

    let attr = prompt("Inserte el nombre del elemento:");
    
    let inputPw = document.createElement("input");
    inputPw.setAttribute("name", attr);
    inputPw.setAttribute("id", attr);
    inputPw.setAttribute("type", "password");
    document.body.appendChild(inputPw);
}

function createTextArea() {

    let attr = prompt("Inserte el nombre del elemento:");
    
    let textArea = document.createElement("textarea");
    textArea.setAttribute("name", attr);
    textArea.setAttribute("id", attr);
    textArea.setAttribute("cols", "40");
    textArea.setAttribute("rows", "5");
    document.body.appendChild(textArea);
}

function createLabel() {

    let attrFor = prompt("Inserte el nombre del elemento al que va referido:");
    let labelText = prompt("Inserte el texto que aparecerá:");

    let label = document.createElement("label");
    let nodeText = document.createTextNode(labelText);
    label.appendChild(nodeText);
    label.setAttribute("for", attrFor);
}

function createImg() {

    let url = prompt("Inserte la url del elemento:");

    let img = document.createElement("img");
    img.setAttribute("src", url);
    document.body.appendChild(img);
}

function createCheckbox() {

    let attrName = prompt("Inserte el nombre del elemento:");
    let attrValue = prompt("Inserte el valor del elemento:");
    let text = prompt("Inserte el text del elemento:");

    let inputCheckbox = document.createElement("input");
    let nodeText = document.createTextNode(text);

    inputCheckbox.appendChild(nodeText);
    inputCheckbox.setAttribute("name", attrName);
    inputCheckbox.setAttribute("id", attrName);
    inputCheckbox.setAttribute("value", attrValue);
    inputCheckbox.setAttribute("type", "checkbox");
    
    document.body.appendChild(inputCheckbox);
}

function createRadio() {


}

function createButton() {


}