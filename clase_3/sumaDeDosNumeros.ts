
import * as readlineSync from 'readline-sync';
//variante primer numero                                  
let primerNumero : number = readlineSync.questionInt ("ingrese el primer numero");

//consola primer numero.. lo rojo se mostraria por consola
console.log ("\'el primer numero es\'" + primerNumero);

// variante segundo numero
let segundoNumero : number = readlineSync.questionInt ("ingrese el segundo numero")
// consola
console.log ("\'el segundo numero es\'"  + segundoNumero);

//resultado que quiero 
let resultado: number = primerNumero + segundoNumero
//consola
console.log("el resultado de la suma es:" + resultado);
