//alert("Hola mundo, desde PoliJIC");
/**
 * Comentarios
 * Esto no se ejecuta
 */
"use strict";
console.log("Hola mundo, desde PoliJIC");

// Variables
var numero2 = 900;

const numero1 = 900;
let nuemero3 = 14.5;
let mifecha = new Date();

let variable = true;

const cadena = "Hola Oscar";
const cadena2 = "Hola Valetina!!!!!";
const logica1 = true;
const logica2 = false;
let suma = numero1 + numero2;

console.log("el valor de numero 1 es: ", numero1);
console.log("el valor de la suma es: ", suma);
console.log(cadena);
console.log("mi fecha actua es: ", mifecha);
console.log("el mes de la fecha atual es:", mifecha.getMonth() + 1);
console.log("el tipo de variable de la fecha es:", typeof mifecha);
console.log("el tipo de variable de la cadena es:", typeof cadena);
console.log("el tipo de variable de la variable es:", typeof variable);
//Estructruas de control
if (numero1 > numero2) {
  console.log("numero1 es mayor");
} else if (numero1 == numero2) {
  console.log("los numeros son iguales");
} else {
  console.log("numero2 es mayor");
}

let contador = 1;
//Ciclos
console.log("Ciclo while");
while (contador <= 10) {
  console.log("contador vale: ", contador);
  //contador = contador + 1;
  contador++;
}
//contador = 11;
console.log("Ciclo do while");
do {
  console.log("contador vale: ", contador);
  contador++;
} while (contador <= 10);

console.log("Ciclo for");
for (let i = 1; i <= 100; i++) {
  console.log("i vale: ", i);
}

//const mes = prompt("Ingrese el mes: ");
const mes = "enero";
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
/*
const milogo = document.getElementById("logo");

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        setTimeout(function(){
            document.getElementById("logo").style = "background: red";
        },5000);
    }else{
        setTimeout(function(){
            document.getElementById("logo").style = "background: blue";
        },5000);
    }
}
*/

let color = 1;
setInterval(function () {
  if (color % 2 == 0) {
    document.getElementById("logo").style = "background: red";
  } else {
    document.getElementById("logo").style = "background: blue";
  }
  color++;
}, 5000);


/**
 * Programcion funcional.
 */
function restarNumero(numero1, numero2) {
  return numero1 - numero2;
}

function imprimirMensaje(mensaje) {
  console.log(mensaje);
}

const esPar = function (numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

let sumaNumeros = (numero1, numero2) => {
  return numero1 + numero2;
}

const esPar2 = numero => {
  return numero % 2 == 0 ? 1 : 0;
};


const funcionClickBotonCalcular = event => {
  console.log(event);
  alert("Hola, hiciste clic");
}

document.getElementById("btn-calcular").addEventListener("click", event => {

  let cantidad = document.getElementById("cantidad").value;
  let valor_unitario = document.getElementById("valor_unitario").value;

  if(cantidad == ""){
    alert("Por favor ingrese la cantidad");
  }else if(valor_unitario == ""){
    alert("Por favor ingrese el valor unitario");
  }else{
    const total = cantidad * valor_unitario;
    document.querySelector("#lbl_valor_total").innerHTML = "<b>"+total+"</b>";
  }

  //alert("Hola, hiciste clic con la funcion directa");
});