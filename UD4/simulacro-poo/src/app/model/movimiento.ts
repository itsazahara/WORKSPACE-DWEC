import { Cuenta } from "./cuenta";
import { TipoMovimiento } from "./tipo-movimiento";

export class Movimiento {

    private _importe: number;
    private _tipoMovimiento: TipoMovimiento;
    private _fecha: Date;
    private _cuenta: Cuenta;

    constructor(importe: number, tipoMovimiento: TipoMovimiento, fecha: Date, cuenta: Cuenta) {
        this._importe = importe;
        this._tipoMovimiento = tipoMovimiento;
        this._fecha = fecha;
        this._cuenta = cuenta;
    }

    public get importe(): number { return this._importe; }
    public set importe(importe: number) { this._importe = importe; }

    public get tipoMovimiento(): TipoMovimiento { return this._tipoMovimiento; }
    public set tipoMovimiento(tipoMovimiento: TipoMovimiento) { this._tipoMovimiento = tipoMovimiento; }

    public get fecha(): Date { return this._fecha; }
    public set fecha(fecha: Date) { this._fecha = fecha; }

    public get cuenta(): Cuenta { return this._cuenta; }
    public set cuenta(cuenta: Cuenta) { this._cuenta = cuenta; }

    //Método toString() que muestra todo aquello de la clase Movimiento
    public toString(): string {
        return `Movimiento: ${this._importe}, ${this._tipoMovimiento}, ${this._fecha}, ${this._cuenta};`
    }
}
