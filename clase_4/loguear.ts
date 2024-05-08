//desarrolle un algoritomo que permita loguearse. con elnombre de usuario y contraseña juan


import * as readlineSync from 'readline-sync'


let nombreUsuario: string;
let contraseña : string;
contraseña= "clavejuan"
    
    nombreUsuario = readlineSync.question("cual es el nombre de usuario?");

    if (nombreUsuario == "Juan"){ 
        console.log("ingrese" + contraseña);

    
        nombreUsuario = readlineSync.question ("contraseña?");
    } else
     {
    console.log ("ingrese la contraseña")}