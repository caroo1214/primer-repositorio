import * as readlineSync from 'readline-Sync'

// el finde semana 

// variable-- cual es - y el tipo de la variable
let llegoFinde : string;

//plantear pregunta 
llegoFinde =readlineSync.question ("llego el fin de semana?)(S/N");

while (llegoFinde == "N"){
    console.log ("todavia no llego");

    llegoFinde =readlineSync.question ("llego el fin de semana?)(S/N");

};

console.log ("llego el Finde gracias a dios!!!")


