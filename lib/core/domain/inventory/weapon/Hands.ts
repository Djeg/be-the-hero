import {Weapon} from 'lib/core/domain/inventory/Weapon';
import {Dice} from 'lib/core/domain/Dice';

export class Hands implements Weapon
{
    private _name: string;

    private _description: string;

    private _price: number;

    private _damages: Dice;

    constructor()
    {
        this._name        = 'hands';
        this._description = 'bare hands';
        this._price       = 0;
        this._damages     = new Dice(1, 2);
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

    get damages(): Dice {
        return this._damages;
    }
}
