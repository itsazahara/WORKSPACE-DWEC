export class TipoMovimiento {

    private _codTipoMov: number;
    private _descripcion: string;
    private _esEntradaSalida: string;

    constructor(codTipoMov: number, descripcion: string, esEntradaSalida: string) {
        this._codTipoMov = codTipoMov;
        this._descripcion = descripcion;
        this._esEntradaSalida = esEntradaSalida;
    }

    public get codTipoMov(): number { return this._codTipoMov; }
    public set codTipoMov(codTipoMov: number) { this._codTipoMov = codTipoMov; }

    public get descripcion(): string { return this._descripcion; }
    public set descripcion(descripcion: string) { this._descripcion = descripcion; }

    public get esEntradaSalida(): string { return this._esEntradaSalida; }
    public set esEntradaSalida(esEntradaSalida: string) { this._esEntradaSalida = esEntradaSalida; }

    //Método toString() que muestra todo aquello de la clase TipoMovimiento
    public toString(): string {
        return `TipoMovimiento: ${this._codTipoMov}, ${this._descripcion}, ${this._esEntradaSalida};`
    }

}
