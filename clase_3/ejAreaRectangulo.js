"use strict";
//calcular area de un rectangulo peo para cualquier base o altura 
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//variante primer numero                                  
var baseRectangulo = readlineSync.questionInt("cual es la base del rectangulo");
//consola . lo rojo se mostraria por consola
console.log("\'la base del rectangulo es \'" + baseRectangulo);
// variante segundo numero
var alturaRectangulo = readlineSync.questionInt("cual es la altura del rectangulo");
// consola
console.log("\'la altura del rectangulo es \'" + alturaRectangulo);
//resultado que quiero 
var areaRectangulo = baseRectangulo * alturaRectangulo;
//consola
console.log("el Area del rectangulo es:" + areaRectangulo);
