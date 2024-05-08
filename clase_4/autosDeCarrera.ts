//en una prueba un piloto tiene que completar 4 vueltas
// ingresar por teclado el tiempo de cada vuelta y el promedio total.

import * as readlineSync from 'readline-sync';
                                 
let vuelta1 : number = readlineSync.questionFloat("ingrese el tiempo de la primer vuelta");

let vuelta2 : number = readlineSync.questionFloat("ingrese el tiempo de la segunda vuelta");

let vuelta3 : number = readlineSync.questionFloat("ingrese el tiempo de la tercer vuelta");

let vuelta4 : number = readlineSync.questionFloat("ingrese el tiempo de la cuarta vuelta");

let tiempoTotal : number = vuelta1 + vuelta2 + vuelta3 + vuelta4
      
console.log ( "el tiempo toTal de la carrera fue de" + tiempoTotal)

let promedio: number = (vuelta1 + vuelta2 + vuelta3 + vuelta4) /4
console.log ("el promedio total fue de " + promedio)


