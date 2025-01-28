export class Sucursal {

    private _direccion: string;
    private _telefono: number;
    private _poblacion: string;
    private _capitalAnioAnterior: number;
    private _nombreDirector: string;

    constructor(direccion: string, telefono: number, poblacion: string, capitalAnioAnterior: number, nombreDirector: string) {
        this._direccion = direccion;
        this._telefono = telefono;
        this._poblacion = poblacion;
        this._capitalAnioAnterior = capitalAnioAnterior;
        this._nombreDirector = nombreDirector;
    }

    public get direccion(): string { return this._direccion; }
    public set direccion(direccion: string) { this._direccion = direccion; }

    public get telefono(): number { return this._telefono; }
    public set telefono(telefono: number) { this._telefono = telefono; }

    public get poblacion(): string { return this._poblacion; }
    public set poblacion(poblacion: string) { this._poblacion = poblacion; }

    public get capitalAnioAnterior(): number { return this._capitalAnioAnterior; }
    public set capitalAnioAnterior(capitalAnioAnterior: number) { this._capitalAnioAnterior = capitalAnioAnterior; }

    public get nombreDirector(): string { return this._nombreDirector; }
    public set nombreDirector(nombreDirector: string) { this._nombreDirector = nombreDirector; }

    //Método toString() que muestra todo aquello de la clase Sucursal
    public toString(): string {
        return `Sucursal: ${this._direccion}, ${this._telefono}, ${this._poblacion}, ${this._capitalAnioAnterior}, ${this._nombreDirector}`;
    }

}
