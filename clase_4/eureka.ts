/*Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje
indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa*/
import * as readlineSync from 'readline-sync'

let contador: number= 1
let suma: number
let  clave: string= "eureka"


     while (contador <=3){
       clave= readlineSync.question ("cual es la clave" + clave)}
       contador = contador + 1;
        suma= suma + clave
        if (clave) {
            console.log('salimos')
        } else {
             console.log ("error")}