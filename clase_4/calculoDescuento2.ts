// calculo de descuento
//implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto despues de 
//aplicarle un descuento. el precio y el descuento deben ser guardados en variables, no aplicados por teclado
// recio inicial 450.50 descuento 10%

import * as readlineSync from 'readline-sync'


let precioInicial : number = 450.50

let descuento : number = precioInicial * 0.1
    console.log ( "el precio que queda con el descuento es de " + descuento)
    