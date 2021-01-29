window.addEventListener("load", form);

function form() {

    let body = document.body;

    let form = document.createElement("form");
    form.setAttribute("name", "form1");

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    let br6 = document.createElement("br");



    let label1 = document.createElement("label");
    let labelText1 = document.createTextNode("Título del album:");
    label1.appendChild(labelText1);
    label1.setAttribute("for", "title");

    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "title");
    input1.setAttribute("placeholder", "Título");

    let label2 = document.createElement("label");
    let labelText2 = document.createTextNode("Nombre del grupo o cantante:");
    label2.appendChild(labelText2);
    label2.setAttribute("for", "gr_name");

    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "gr_name");
    input2.setAttribute("placeholder", "Nombre del grupo");

    let label3 = document.createElement("label");
    let labelText3 = document.createTextNode("Año de publicación:");
    label3.appendChild(labelText3);
    label3.setAttribute("for", "pu_year");

    let input3 = document.createElement("input");
    input3.setAttribute("type", "number");
    input3.setAttribute("id", "pu_year");
    input3.setAttribute("placeholder", "Año de publicación");

    let label4 = document.createElement("label");
    let labelText4 = document.createTextNode("Género musical:");
    label4.appendChild(labelText4);
    label4.setAttribute("for", "genre");

    let select = document.createElement("select");
    select.setAttribute("name", "genre");
    select.setAttribute("id", "genre");

    let option1 = document.createElement("option")
    let optionText1 = document.createTextNode("Rock");
    option1.appendChild(optionText1);
    option1.setAttribute("value", "rock");
    option1.setAttribute("selected", "");

    let option2 = document.createElement("option")
    let optionText2 = document.createTextNode("Pop");
    option2.appendChild(optionText2);
    option2.setAttribute("value", "pop");

    let option3 = document.createElement("option")
    let optionText3 = document.createTextNode("Punk");
    option3.appendChild(optionText3);
    option3.setAttribute("value", "punk");

    let option4 = document.createElement("option")
    let optionText4 = document.createTextNode("Indie");
    option4.appendChild(optionText4);
    option3.setAttribute("value", "indie");

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    let label5 = document.createElement("label");
    let labelText5 = document.createTextNode("Localización (estanteria):");
    label5.appendChild(labelText5);
    label5.setAttribute("for", "localiz");

    let input4 = document.createElement("input");
    input4.setAttribute("type", "number");
    input4.setAttribute("id", "localiz");
    input4.setAttribute("placeholder", "Localización");
  
    let label6 = document.createElement("label");
    let labelText6 = document.createTextNode("Prestado:");
    label6.appendChild(labelText6);
    label6.setAttribute("for", "borrowed");

    let input5 = document.createElement("input");
    input5.setAttribute("type", "radio");
    input5.setAttribute("id", "borrowed");
    input5.setAttribute("name", "borrowed");
    input5.setAttribute("value", "true");
    let inputText1 = document.createTextNode("Sí");
    input5.appendChild(inputText1);

    let input6 = document.createElement("input");
    input6.setAttribute("type", "radio");
    input6.setAttribute("id", "notborrowed");
    input6.setAttribute("name", "borrowed");
    input6.setAttribute("value", "false");
    let inputText2 = document.createTextNode("No");
    input6.appendChild(inputText2);

    let button = document.createElement("button");
    let buttonText = document.createTextNode("Enviar");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "printDisc()");
    button.appendChild(buttonText);

    form.appendChild(label1);
    form.appendChild(input1);
    form.appendChild(br1);
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(br2);
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(br3);
    form.appendChild(label4);
    form.appendChild(select);
    form.appendChild(br4);
    form.appendChild(br5);
    form.appendChild(label5);
    form.appendChild(input4);
    form.appendChild(br5);
    form.appendChild(label6);
    form.appendChild(input5);
    form.appendChild(input6);
    form.appendChild(br6);
    form.appendChild(button);
    body.appendChild(form);
}