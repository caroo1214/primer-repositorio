import * as readlineSync from 'readline-sync';
//llegada de colectivo

let llegadaColectivo: string;


llegadaColectivo = readlineSync.question("llego el colectivo? (s/n)");

while (llegadaColectivo == "n"){ 
    console.log("todavia no llego");

    llegadaColectivo = readlineSync.question ("llego el colectivo? (s/n)");
}
console.log ("llego el colectivo")
 
