export class Direccion {

    private _id: number;
    private _codPostal: string;
    private _ciudad: string;
    private _municipio: string;
    private _provincia: string;


    constructor(id: number, codPostal: string, ciudad: string, municipio: string, provincia: string) {
        this._id = id;
        this._codPostal = codPostal;
        this._ciudad = ciudad;
        this._municipio = municipio;
        this._provincia = provincia;
    }

    public get id(): number { return this._id; }
    public set id(id: number) { this._id = id; }

    public get codPostal(): string { return this.codPostal; }
    public set codPostal(codPostal: string) { this._codPostal = codPostal; }

    public get ciudad(): string { return this._ciudad; }
    public set ciudad(ciudad: string) { this._ciudad = ciudad; }

    public get municipio(): string { return this._municipio; }
    public set municipio(municipio: string) { this._municipio = municipio; }

    public get provincia(): string { return this._provincia; }
    public set provincia(provincia: string) { this._provincia = provincia; }

}
