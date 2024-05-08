import * as rls from 'readline-sync' ;

let nroDeseado: number = rls.questionInt ("escriba el numero que desea verificar si es mayor o no a 20:");
//hacer esto
if (nroDeseado > 20) {
        console.log ('el numero es  mayor a 20:' + nroDeseado);
        // sino esto 
}else {
        console.log ('el numero es menor o igual a 20:' + nroDeseado)};


        // float es para usar numero decimal