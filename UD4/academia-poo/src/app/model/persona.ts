export class Persona {

    private _dni: string;
    private _nombre: string;
    private _apellidos: string;

    constructor(dni: string, nombre: string, apellidos: string) {
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

    public get dni(): string { return this._dni; }
    public set dni(dni: string) { this._dni = dni; }

    public get nombre(): string { return this._nombre; }
    public set nombre(nombre: string) { this._nombre = nombre; }

    public get apellidos(): string { return this._apellidos; }
    public set apellidos(apellidos: string) { this._apellidos = apellidos; }
}
