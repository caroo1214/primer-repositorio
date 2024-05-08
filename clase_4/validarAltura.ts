// desarrolle un algoritmo que de acuerdo a la altura de una persona. decida si puede entrar a un juego en un parque
// la persona debe medir 1.30 ms o mas 

import * as readlineSync from 'readline-sync'

let alturaPersona: number = readlineSync.questionFloat ("cuanto medis?");

if (alturaPersona >= 1.30 ) { 
    console.log ("la persona puede subirse a la montaña rusa") 
}
else {
    console.log ("lo siento, no puede subirse ya que no cumple con los requisitos minimos de altura")
}
