import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {

    private _alumno: Alumno;
    private _asignatura: Asignatura;
    private _notaTrim1: number;
    private _notaTrim2: number;
    private _notaTrim3: number;

    constructor(alumno: Alumno, asignatura: Asignatura, notaTrim1: number, notaTrim2: number, notaTrim3: number) {
        this._alumno = alumno;
        this._asignatura = asignatura;
        this._notaTrim1 = notaTrim1;
        this._notaTrim2 = notaTrim2;
        this._notaTrim3 = notaTrim3;
    }

    public get alumno(): Alumno { return this._alumno; }
    public set alumno(alumno: Alumno) { this._alumno = alumno; }

    public get asignatura(): Asignatura { return this._asignatura; }
    public set asignatura(asignatura: Asignatura) { this._asignatura = asignatura; }

    public get notaTrim1(): number { return this._notaTrim1; }
    public set notaTrim1(notaTrim1: number) { this._notaTrim1 = notaTrim1; }

    public get notaTrim2(): number { return this._notaTrim2; }
    public set notaTrim2(notaTrim2: number) { this._notaTrim2 = notaTrim2; }

    public get notaTrim3(): number { return this._notaTrim3; }
    public set notaTrim3(notaTrim3: number) { this._notaTrim3 = notaTrim3; }

    //Si no ponemos la _ accedemos a los getter y setter, y nosotros queremos acceder al objeto
    public getNotaMedia(): number { return (this._notaTrim1 + this._notaTrim2 + this._notaTrim3) / 3; }

    //Diferencia entre método y función
    //Método: tiene la capacidad de diferneciar a la clase que pertenece
    //Función: no sabe a la clase que pertenece, con lo cual necesita parámetros

}
