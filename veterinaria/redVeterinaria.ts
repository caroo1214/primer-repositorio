import * as readlineSync from 'readline-sync';
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./sucursalVeterinaria";
import { Cliente} from './cliente';
import { Paciente } from './paciente';

/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
 ● Sucursales de Veterinarias ● Clientes ● Pacientes (mascotas) ● Proveedores  */

  //Clase RedVeterinarias

  export  class RedVeterinaria{

    private veterinarias: Veterinaria [];
    private proveedores:  Proveedor [];


//constructor
    public constructor(veterinarias: Veterinaria [], proveedores: Proveedor[]){

        this.veterinarias = veterinarias;
        this.proveedores = proveedores;
    }

    //getters
    public getVeterinarias() :Veterinaria []{
        return this.veterinarias;
    }
    
    public getProveedores() : Proveedor []{
        return this.proveedores;
    }

  
    //setters
    public setVeterinarias(veterinarias: Veterinaria[]) : void {
        this.veterinarias = veterinarias;

    }
    
    public setProveedores(proveedores: Proveedor []) {
        this.proveedores = proveedores;
    }


  


// ------------------------------------------metodos para Veterinarias---------------------------------------------------- 

//Cargar Veterinarias

 public cargarVeterinarias(elemento: string, Veterinarias: Veterinaria[], arrClientes: Cliente[], arrPacientes: Paciente[]): Veterinaria[{
	let datos = elemento.split(',');
	let nombre : string = datos[0];
	let direccion : string = datos[1];
	let id: number = crearNumRandom(1000);
    
  while(existeId(Veterinarias,id)==true){
    id=crearNumRandom(1000);
  }
	let listaClientes: Cliente[]= arrClientes;
	let listaPacientes: Paciente[] = arrPacientes;
  let nuevaVeterinaria: Veterinaria = new Veterinaria (nombre, direccion, id, listaClientes,listaPacientes);
  Veterinaria.push(nuevaVeterinaria)
  return Veterinarias;
}
/*


//Crear Veterinaria

public crearVeterinaria(arrVeterinaria: Veterinaria[], arrClientes: Cliente[], arrPacientes: Paciente[]>){
	let nombre : string = readlineSync.question("Ingrese el nombre de la veterinaria: ");
	let direccion: string = readlineSync.question("ingrese dirección: ")
	let id: number = crearNumRandom(1000);
    
  while(existeId(arrVeterinaria,id)==true){
    id=crearNumRandom(1000);
  }
	
	let listaClientes: Cliente[] = arrClientes;
	let listaPacientes: Paciente[] = arrPacientes;

  let nuevaVeterinaria: Veterinaria = new Veterinaria(nombre, direccion, id, listaClientes, listaPacientes);
  arrVeterinaria.push(nuevaVeterinaria)
	console.log(arrVeterinaria)

}

//Modificar veterinaria

 public modificarVeterinaria(arrVeterinarias: Veterinaria [], posicion: number, arrClientes: Cliente [], arrPacientes: Paciente []){
	let nombre : string = readlineSync.question("Ingrese el nuevo nombre: ");
	let direccion: string = readlineSync.question("ingrese nueva dirección: ");

  let id: number = arrVeterinarias[posicion].getId()    

	let veterinariaModificada : Veterinaria = new Veterinaria (nombre, direccion, id, arrClientes, arrPacientes);
	arrVeterinarias[posicion] = veterinariaModificada;
	console.log(arrVeterinarias)

}


//Borrar Veterinaria  

 public eliminarVeterinaria(arrVeterinarias: Veterinaria[], id: number):void{

  for (let i= 0; i< arrVeterinarias.length; i++){
    if (id === arrVeterinarias[i].getId()){
      arrVeterinarias.splice(i,1)
    }
  }
  console.log(arrVeterinarias)
}
  }

