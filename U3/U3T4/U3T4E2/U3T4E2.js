

const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = mayus.toLowerCase();
const nums = "1234567890";
const especial = "-_@#$%&";
let res = false;
let conMayus, contMinus, contNum, contEsp = false;

do {

    let pw = prompt(`Introduce una contraseña que contenga los siguientes requisitos:

    Tiene entre 8 y 16 caracteres.
    Tiene una letra mayúscula.
    Tiene una letra minúscula.
    Tiene un número.
    Tiene uno de los siguientes valores: guión alto, guión bajo, arroba, 
    almohadilla, dólar, tanto por ciento o ampersand.
    `)

    if (pw.length >= 8 && pw.length <= 16 ) {

        for (let i in mayus) {
            if (pw.includes(mayus.charAt(i)))

                conMayus = true;
                break;   
        }

        for (let i in minus) {
            if (pw.includes(minus.charAt(i)))

                contMinus = true;
                break;   
        }

        for (let i in nums) {
            if (pw.includes(nums.charAt(i)))

                contNum = true;
                break;   
        }

        for (let i in especial) {
            if (pw.includes(especial.charAt(i)))

                contEsp = true;
                break;   
        }

    }

    if (conMayus && contMinus && contNum && contEsp) {

        res = true;
        alert("Contraseña segura");
    } else {

        alert("Contraseña no segura");
    }

} while (res === false)