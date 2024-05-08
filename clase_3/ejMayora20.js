"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("escriba el numero que desea verificar si es mayor o no a 20:");
if (nroDeseado > 20) {
    console.log('el numero es a mayor a 20:' + nroDeseado);
}
else {
    console.log('el numero es menor o igual a 20:' + nroDeseado);
}
