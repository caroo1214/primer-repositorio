"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//variante primer numero                                  
var primerNumero = readlineSync.questionInt("ingrese el primer numero");
//consola primer numero.. lo rojo se mostraria por consola
console.log("\'el primer numero es\'", primerNumero);
// variante segundo numero
var segundoNumero = readlineSync.questionInt("ingrese el segundo numero");
// consola
console.log("\'el segundo numero es\'", segundoNumero);
//resultado que quiero 
var resultado = primerNumero + segundoNumero;
//consola
console.log("el resultado de la suma es:", resultado);
