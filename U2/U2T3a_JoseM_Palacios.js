var op1 = 10 == 10;
var op2 = 10 === 10;
var op3 = 10 === 10.0;
var op4 = "Laura" == "laura";
var op5 = "Laura" > "laura";
var op6 = "Laura" < "laura";
var op7 = "123" == 123;
var op8 = "123" === 123;
var op9 = parseInt("123") === 123;

alert("La operación 10 == 10 es " + op1); // Devuelve true
alert("La operación 10 === 10 es " + op2); // Devuelve true
alert("La operación 10 === 10.0 es " + op3); // Devuelve true
alert("La operación \"Laura\" == \"laura\" es " + op4); // Devuelve false ya que no es la misma cadena 
alert("La operacoón \"Laura\" > \"laura\" es " + op5); // Devuelve false ya que considera mayor la posición minúscula que mayúsucula
alert("La operación \"Laura\" < \"Laura\" es " + op6); // Devuelve true ya que considera mayor la posición minúscula que mayúscula
alert("La operación \"123\" == 123 es " + op7); // Devuelve true ya que realiza la conversión
alert("La operación \"123\" === 123 es " + op8); // Devuelve false ya que con el operador indicamos que no haga conversión de ningun tipo
alert("La operación parseInt(\"123\") === 123 es " + op9); // Devuelve true ya que realiza la conversión a tipo entero con la función parseInt