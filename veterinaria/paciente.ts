import { Cliente } from "./cliente";

  /*Pacientes (mascotas): nombre, especie (si no es perro o gato, deberá registrarse como exótica), 
  id del dueño, las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */


   // Clase Paciente
  export class Paciente{
    private nombre: string;
    private especie: string;
    private idDueño: number; 

    //constructor

    public constructor(nombre: string, especie: string, idDueño: number){
        this.nombre = nombre;
        this.especie = especie;
        this.idDueño = idDueño;
    }

    //getters
    public getNombre():string{
        return this.nombre
    }
    
    public getEspecie():string{
        return this.especie
    }

   public getIdDueño():number{
        return this.idDueño
    }       
    

    //setters
    public setEspecie(Especie:string):void{
        this.especie=Especie
    }

    public setNombre(nuevoNombre:string):void{
        this.nombre=nuevoNombre
    }


    // mascota exotica
    public esExotica():boolean{
        let ok:boolean = false;
        if (this.especie != "perro" && this.especie != "gato"){
            ok = true;
            console.log("el paciente " + this.nombre + " es una especie exotica")
        }else {
            console.log("el paciente " + this.nombre + " no es una especie exotica")
        }
        return ok
    }
}
/*
public getCostoTotal(): number {
  let precio = this.getPrecioBase();
  if (this.limpieza) {
      precio *= 1.10; // 10% adicional de limpieza
  }
  return precio * this.iva; // Se agrega 21% de IVA
}*/