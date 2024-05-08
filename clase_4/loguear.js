"use strict";
//desarrolle un algoritomo que permita loguearse. con elnombre de usuario y contraseña juan
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nombreUsuario;
var contraseña;
contraseña = "clavejuan";
nombreUsuario = readlineSync.question("cual es el nombre de usuario?");
if (nombreUsuario == "Juan") {
    console.log("ingrese" + contraseña);
    nombreUsuario = readlineSync.question("contraseña?");
}
else {
    console.log("ingrese la contraseña");
}
