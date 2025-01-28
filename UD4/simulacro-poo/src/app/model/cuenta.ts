import { Cliente } from "./cliente";

export class Cuenta {

    private _iban: string;
    private _saldo: number;
    private _cliente: Cliente;

    constructor(iban: string, saldo: number, cliente: Cliente) {
        this._iban = iban;
        this._saldo = saldo;
        this._cliente = cliente;
    }

    public get iban(): string { return this._iban; }
    public set iban(iban: string) { this._iban = iban; }

    public get saldo(): number { return this._saldo; }
    public set saldo(saldo: number) { this._saldo = saldo; }

    public get cliente(): Cliente { return this._cliente; }
    public set cliente(cliente: Cliente) { this._cliente = cliente; }

    //Método que devuelve el país según los 4 primero dígitos del código
    public getCodigoPais(): string {
        return this.iban.slice(0, 4);
    }

    //Método toString() que muestra todo aquello de la clase Cuenta
    public toString(): string {
        return `Cuenta: ${this._iban}, ${this._saldo}, ${this._cliente};`
    }
}
