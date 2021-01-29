
window.addEventListener("load", init);

function init() {

    document.getElementById("btn").addEventListener("click", createTable);
    document.getElementById("headers").addEventListener("change", createInputs);
}

function createTable() {

    let columns = document.getElementById("columns").value;
    let rows = document.getElementById("rows").value;
    let header = document.getElementById("headers").checked;
    let value = document.getElementById("def-value").value;
    let border = document.getElementById("border").value;
    let borderColor = document.getElementById("color").value;

    let hr = document.createElement("hr");
    document.body.appendChild(hr);

    let table = document.createElement("table");
    table.setAttribute("id", "tabla");
    table.setAttribute("border", border + "px solid " + borderColor);

    let tbody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            let tdText = document.createTextNode(value);
            td.appendChild(tdText);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    document.body.appendChild(table);
}

function createInputs() {

    let form = document.getElementById("form");

    let columns = document.getElementById("columns").value;

    let headers = document.getElementById("headers").checked;

    if (headers == true) {
         for (let k = 0; k > columns; k++) {

            let label = createElement("label");
            label.setAttribute("for", "header" + k + 1);
            label.appendChild(document.createTextNode("Cabecera " + k + 1));

            let br = createElement("br");

            let input = createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "header" + k + 1);

            form.appendChild(br);
            form.appendChild(label);
            form.appendChild(input);
        } 

      
    }
} 