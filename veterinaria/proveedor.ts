/* Proveedores: nombre, teléfono y un id generado como los otros.
 la red debe contar con la opción de alta, baja y modificación de los mismos. 
 IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. 
 Si ya existe se debe volver a generar.*/

 // Clase Proveedor
  
  export class Proveedor {
    private nombreP: string;
    private telefonoP: number;
    private idP: number;

    //constructor
    public constructor (nombreP:string, telefonoP: number, idP:number){
        this.nombreP = nombreP;
        this.telefonoP = telefonoP;
        this.idP = idP
    }


    //getters
    public getNombreP(): string{
        return this.nombreP
    }

    public getTelefonoP(): number{
        return this.telefonoP
    }

    public getIdP(): number{
       return this.idP
    }

    
    //setters
    public setNombreP(nombreP: string): void{
        this.nombreP = nombreP
    }
    
    public setTelefonoP(nuevoTelefonoP: number): void{
        this.telefonoP = nuevoTelefonoP
    }

    public setIdP(nuevoIdP:number):void {
            this.idP = nuevoIdP;
    }
    }