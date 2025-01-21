import { Profesor } from "./profesor";

export class Asignatura {

    private _nombre: string;
    private _descripcion: string;
    private _numHoras: number;
    private _profesor: Profesor;

    constructor(nombre: string, descripcion: string, numHoras: number, profesor: Profesor) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._numHoras = numHoras;
        this._profesor = profesor;
    }

    public get nombre(): string { return this._nombre; }
    public set nombre(nombre: string) { this._nombre = nombre; }

    public get descripcion(): string { return this._descripcion; }
    public set descripcion(descripcion: string) { this._descripcion = descripcion; }

    public get numHoras(): number { return this._numHoras; }
    public set numHoras(numHoras: number) { this._numHoras = numHoras; }

    public get profesor(): Profesor { return this._profesor; }
    public set profesor(profesor: Profesor) { this._profesor = profesor; }

}
