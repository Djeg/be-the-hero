export class Dice
{
    private _amount: number;

    private _faces: number;

    constructor(amount: number, faces: number)
    {
        if (amount < 1 || faces < amount) {
            throw `Invalid dice (${amount}d${faces}), be sure that the amount is > 1 and the faces > amount.`;
        }

        this._amount = amount;
        this._faces  = faces;
    }

    roll(): number
    {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    get min(): number {
        return this._amount;
    }

    get max(): number {
        return this._amount * this._faces;
    }
}
