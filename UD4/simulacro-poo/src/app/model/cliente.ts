import { Sucursal } from "./sucursal";

export class Cliente {

    private _nombre: string;
    private _apellidos: string;
    private _dni: string;
    private _sucursal: Sucursal;

    constructor(nombre: string, apellidos: string, dni: string, sucursal: Sucursal) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._dni = dni;
        this._sucursal = sucursal;
    }

    public get nombre(): string { return this._nombre; }
    public set nombre(nombre: string) { this._nombre = nombre; }

    public get apellidos(): string { return this._apellidos; }
    public set apellidos(apellidos: string) { this._apellidos = apellidos; }

    public get dni(): string { return this._dni; }
    public set dni(dni: string) { this._dni = dni; }

    public get sucursal(): Sucursal { return this._sucursal; }
    public set sucursal(sucursal: Sucursal) { this._sucursal = sucursal; }

    //Método toString() que muestra todo aquello de la clase Cliente
    public toString(): string {
        return `Cliente: ${this._nombre}, ${this._apellidos}, ${this._dni}, ${this._sucursal}`;
    }

}
