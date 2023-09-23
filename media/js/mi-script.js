//alert("Hola mundo, desde PoliJIC");
/**
 * Comentarios
 * Esto no se ejecuta
 */
console.log("Hola mundo, desde PoliJIC");

// Variables
var numero2 = 900;

const numero1 = 900;
let nuemero3 = 14.5;
let mifecha = new Date();

cadena = "Hola Oscar";
cadena2 = "Hola Valetina!!!!!";
logica1 = true;
logica2 = false;
suma = numero1 + numero2;

console.log("el valor de numero 1 es: ", numero1);
console.log("el valor de la suma es: ", suma);
console.log(cadena);
console.log("mi fecha actua es: ", mifecha);

//Estructruas de control
if (numero1 > numero2) {
    console.log("numero1 es mayor");
}else if(numero1 == numero2){
    console.log("los numeros son iguales");
}else{
    console.log("numero2 es mayor");
}

let contador = 1;
//Ciclos
console.log("Ciclo while");
while(contador <= 10){
    console.log("contador vale: ", contador);
    //contador = contador + 1;
    contador++;
}

let contador1 = 1;
console.log("Ciclo do while");
do{
    console.log("contador vale: ", contador1);
    contador1++;
}while(contador1 <= 10);

console.log("Ciclo for");
for(let i = 1; i <= 100; i++){
    console.log("i vale: ", i);
}

const mes = prompt("Ingrese el mes: ");
switch (mes) {
    case "enero":
        console.log("el mes es enero");
        break;
    case "febrero":
        console.log("el mes es febrero");
        break;
    case "marzo":
        console.log("el mes es marzo");
        break;
    default:
        console.log("el mes no es enero, febrero o marzo");
}
