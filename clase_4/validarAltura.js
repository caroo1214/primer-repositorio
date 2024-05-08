"use strict";
// desarrolle un algoritmo que de acuerdo a la altura de una persona. decida si puede entrar a un juego en un parque
// la persona debe medir 1.30 ms o mas 
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.questionFloat("cuanto medis?");
if (alturaPersona >= 1.30) {
    console.log("la persona puede subirse a la montaña rusa");
}
else {
    console.log("lo siento, no puede subirse ya que no cumple con los requisitos minimos de altura");
}
