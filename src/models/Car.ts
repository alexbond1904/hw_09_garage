export default class Car {
    private readonly _regNumber: string;
    private _model: string;
    private _company: string;
    private _engine: number;
    private _color: string;


    constructor(regNumber: string, model: string, company: string, engine: number, color: string) {
        this._regNumber = regNumber;
        this._model = model;
        this._company = company;
        this._engine = engine;
        this._color = color;
    }

    get regNumber(): string {
        return this._regNumber;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get company(): string {
        return this._company;
    }

    set company(value: string) {
        this._company = value;
    }

    get engine(): number {
        return this._engine;
    }

    set engine(value: number) {
        this._engine = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}