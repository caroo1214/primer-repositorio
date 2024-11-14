import { Cliente } from "./cliente";
import { Paciente } from "./paciente";

/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta) 
La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */


export class Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;
    private listaClientes: Cliente [];
    private listaPacientes:Paciente [];
   
  
    public constructor (nombre: string, direccion: string, id: number, listaClientes: Cliente[], listaPacientes: Paciente[]){
        this.nombre= nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = listaClientes;
        this.listaPacientes = listaPacientes;
    }
  
    //getters
    public getNombre():string{
        return this.nombre
    }
  
    public getDireccion():string{
        return this.direccion
    }
  
     public getId(): number{
        return this.id
    }
  
    public getListaClientes():Cliente[] {
        return this.listaClientes;                        //retorna lista de Clientes
    }
  
    public getListaPacientes():Paciente[]{                //retorna lista de Pacientes
        return this.listaPacientes;
    }
   
  
    /*
    // Getters
    public getListaVehiculo(): Vehiculo[] {
        return this.listaVehiculo; // Retorna la lista de vehículos
    }
  
    // Setters
    public setListaVehiculo(listaVehiculo: Vehiculo[]): void {
        this.listaVehiculo = listaVehiculo;
    }*/
  
    //setters
    public setId(nuevoId:number):void {
        this.id = nuevoId;
    }
  
    public setListaClientes(listaClientes: Cliente[]){
        this.listaClientes = listaClientes;
    }
    public setListaPacientes(listaPacientes:Paciente[]){
        this.listaPacientes = listaPacientes;
    }
  }
  


      agregarCliente(Cliente: Cliente) {
        this.clientes.push(Cliente);
      }
    
      agregarPaciente(Paciente: Paciente) {
        this.Paciente.push(Paciente);
      }
    
