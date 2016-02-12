import {Armor} from 'lib/core/domain/inventory/cArmor';

export class Clothing implements Armor
{
    private _name: string;

    private _description: string;

    private _price: number;

    private _protection: number;

    constructor()
    {
        this._name        = 'clothing';
        this._description = 'it is just a simple clothing.';
        this._price       = 0;
        this._protection  = 0;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get protection(): number {
        return this._protection;
    }
}

