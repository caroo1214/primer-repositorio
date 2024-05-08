"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//declaramos una constante / es
// una pregunta sobre datos de tipo texto. aca pregunta la altura 
var alturaPersona = readlineSync.question("ingrese la altura");
console.log("la persona mide: " + alturaPersona);
