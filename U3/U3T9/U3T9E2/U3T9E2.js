let arr = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];


let even = arr.filter(checkEvenNumber);
let odd = arr.filter(checkOddNumber);

arr = even + odd;

console.log(arr);

function checkEvenNumber(num) {

    return num % 2 === 0;
}

function checkOddNumber(num) {

    return num % 2 != 0;
}

