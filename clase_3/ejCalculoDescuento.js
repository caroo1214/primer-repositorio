"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioInicial = readlineSync.questionInt("ingrese el precio inicial");
// variante segundo numero
var descuento = (precioInicial * 0.1);
//resultado que quiero 
var precioFinal = precioInicial - descuento;
//consola
console.log("el precio final es:" + precioFinal);
