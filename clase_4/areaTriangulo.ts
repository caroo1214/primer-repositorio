// calculo del area de un triangulo

//ingresar por teclado la base y altura de un triangulo
// el programa debe retornar el area del rangulo con la base y la altura proporcionada por el usuario 

import * as readlineSync from 'readline-sync'

let base : number = readlineSync.questionInt (" cual es la base?");

let altura : number = readlineSync.questionInt ("cual es la altura?");

let area: number = base * altura

console.log ( "el area del triangulo es "+ area)

