
import * as readlineSync from 'readline-sync';


//declaramos una constante / es
// una pregunta sobre datos de tipo texto. aca pregunta la altura 
let alturaPersona: string = readlineSync.question ("ingrese la altura")

console.log ("la persona mide: " + alturaPersona);