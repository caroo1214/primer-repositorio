"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//llegada de colectivo
var llegadaColectivo;
llegadaColectivo = readlineSync.question("llego el colectivo? (s/n)");
while (llegadaColectivo == "n") {
    console.log("todavia no llego");
    llegadaColectivo = readlineSync.question("llego el colectivo? (s/n)");
}
console.log("llego el colectivo");
var nombreUsuario = readlineSync.question("CUAL ES EL NOMBRE DE USUARIO?");
var contraseña = readlineSync.question("cual es la contraseña?");
if (nombreUsuario = Juan) {
    console.log(nombreUsuario + "el nombre de usuario es correcto");
}
else {
    console.log("intentelo de nuevo");
}
