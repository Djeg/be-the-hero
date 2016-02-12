import {Item} from 'lib/core/domain/inventory/Item';

export class AnyItem implements Item
{
    private _name: string;

    private _description: string;

    private _price: number;

    constructor(name: string, description: string, price: number)
    {
        this._name        = name;
        this._description = description;
        this._price       = price;
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
}
