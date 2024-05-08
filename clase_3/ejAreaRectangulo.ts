//calcular area de un rectangulo peo para cualquier base o altura 




import * as readlineSync from 'readline-sync';
//variante primer numero                                  
let baseRectangulo : number = readlineSync.questionInt ("cual es la base del rectangulo");

//consola . lo rojo se mostraria por consola
console.log ("\'la base del rectangulo es \'" +  baseRectangulo);

// variante segundo numero
let alturaRectangulo : number = readlineSync.questionInt ("cual es la altura del rectangulo")
// consola
console.log ("\'la altura del rectangulo es \'" + alturaRectangulo);

//resultado que quiero 
let areaRectangulo: number = baseRectangulo * alturaRectangulo
//consola
console.log("el Area del rectangulo es:" + areaRectangulo);
