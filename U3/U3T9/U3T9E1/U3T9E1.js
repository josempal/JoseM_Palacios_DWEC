let arr = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];

const num = 3;

getThrees(arr);

function getThrees(arr) {

    let start = 0;
    let ind = 0;

    do {
    
        ind = (arr.indexOf(num, start));
        
        if (ind != -1) {
            
            console.log("El índice " + ind + " contiene el valor 3");
            start = ind + 1;
        }
    } while (ind != -1);
}