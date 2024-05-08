// implemente un algoritmo que calcule y muestre por pantalla el precio final 
//de un producto despues de aplicarle un descuento 



import * as readlineSync from 'readline-sync';
                                     //entero por el questionint
let precioInicial : number = readlineSync.questionInt ("ingrese el precio inicial");


// variante                             el 10% se obtiene multiplicando el valor po 0.1
let descuento : number = (precioInicial * 0.1)

//resultado que quiero 
let precioFinal: number = precioInicial - descuento
//consola
console.log("el precio final es:"  + precioFinal);
