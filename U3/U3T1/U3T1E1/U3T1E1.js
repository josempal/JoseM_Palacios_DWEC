
let actual = new Date();
let fCurso = new Date(2021, 06, 24);
let dif = fCurso.getTime() - actual.getTime();

const MSDAY = (60 * 60 * 24) * 1000;

alert("Quedan " + Math.floor(dif / MSDAY) + " días hasta fin de curso.");