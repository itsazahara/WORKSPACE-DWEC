import { Persona } from "./persona";

export class Profesor extends Persona {

    private _telefono: number;
    private _salarioBruto: number;

    constructor(dni: string, nombre: string, apellidos: string, telefono: number, salarioBruto: number) {
        super(dni, nombre, apellidos);
        this._telefono = telefono;
        this._salarioBruto = salarioBruto;
    }

    public get telefono(): number { return this._telefono; }
    public set telefono(telefono: number) { this._telefono = telefono; }

    public get salarioBruto(): number { return this._salarioBruto; }
    public set salarioBruto(salarioBruto: number) { this._salarioBruto = salarioBruto; }

    public getSalarioNeto(irpf: number): number { return this._salarioBruto - (this._salarioBruto * irpf) / 100; }
}
