import { Direccion } from "./direccion";
import { Persona } from "./persona";

export class Alumno extends Persona {


    private _fechaNac: Date;
    private _direccion: Direccion;


    constructor(dni: string, nombre: string, apellidos: string, fechaNac: Date, direccion: Direccion) {
        super(dni, nombre, apellidos);
        this._fechaNac = fechaNac;
        this._direccion = direccion;
    }

    public get fechaNac(): Date { return this._fechaNac; }
    public set fechaNac(fechaNac: Date) { this._fechaNac = fechaNac; }

    public get direccion(): Direccion { return this._direccion; }
    public set direccion(direccion: Direccion) { this._direccion = direccion; }

    public getEdad(): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNac.getFullYear();
        if (hoy.getMonth() < this._fechaNac.getMonth()) {
            edad--;
            //Si una variable cambia durante le método, se usa LET. En este caso estamos modificando "edad"
        }
        return edad;
    }

    //Si va a cambiar se usa LET, si no va a cambiar se usa CONST y VAR no se usa porque es muy antiguo
    //Si una variable cambia durante le método, se usa LET

    public getIniciales(): string {
        let iniciales = "";
        const nombres = super.nombre.split("");
        const apellidos = super.apellidos.split(" ");

        for (let nombre of nombres){
            iniciales += nombre.charAt(0);
        }

        for (let apellido of apellidos){
            iniciales += apellido.charAt(0);
        }

        return iniciales;
    }
}
