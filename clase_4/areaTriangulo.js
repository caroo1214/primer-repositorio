"use strict";
// calculo del area de un triangulo
Object.defineProperty(exports, "__esModule", { value: true });
//ingresar por teclado la base y altura de un triangulo
// el programa debe retornar el area del rangulo con la base y la altura proporcionada por el usuario 
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt(" cual es la base?");
var altura = readlineSync.questionInt("cual es la altura?");
var area = base * altura;
console.log("el area del triangulo es " + area);
