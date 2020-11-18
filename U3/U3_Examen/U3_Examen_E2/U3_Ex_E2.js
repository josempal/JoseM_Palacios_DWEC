
let msg = prompt("Introduce una frase:");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let arrSta = countLetters(msg);
console.log(arrSta);

function countLetters(str) {

    let count = 0;
    let arr = [];

    for (let x of letters) {

        for (let y of str) {

            if(y.toLocaleUpperCase() === x) 
                count++;
        }

        arr.push(x + ": " + count);
        count = 0;
    }
    
    return arr;
}
