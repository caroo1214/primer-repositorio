"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var vuelta1 = readlineSync.questionFloat("ingrese el tiempo de la primer vuelta");
var vuelta2 = readlineSync.questionFloat("ingrese el tiempo de la segunda vuelta");
var vuelta3 = readlineSync.questionFloat("ingrese el tiempo de la tercer vuelta");
var vuelta4 = readlineSync.questionFloat("ingrese el tiempo de la cuarta vuelta");
var tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("el tiempo toTal de la carrera fue de" + tiempoTotal);
var promedio = (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4;
console.log("el promedio total fue de " + promedio);
