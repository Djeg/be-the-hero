import {Inventory, InventoryItems} from 'lib/core/domain/inventory/Inventory';
import {Item} from 'lib/core/domain/inventory/Item';

export class StarterInventory implements Inventory
{
    private _items: IventoryItems;

    private _gold: number;

    constructor(gold: number)
    {
        this._items = <InventoryItems>{};
        this._gold  = gold;
    }

    pay(amount: number): StarterInventory
    {
        if (!this.canPay(amount)) {
            throw `Not enough gold to pay ${amount} (current amount: ${this._gold})`;

            return this;
        }

        this._gold -= amount;

        return this;
    }

    canPay(amount: number): boolean
    {
        return this._gold >= amount;
    }

    addGold(amount: number): StarterInventory
    {
        if (amount < 0) {
            throw `You can add ${amount} gold, it must be a positive value !`;

            return this;
        }

        this._gold += amount;

        return this;
    }

    collect(...items: Array<Item>): StarterInventory
    {
        for (let item of items) {
            if (!this._items[item.name]) {
                this._items[item.name] = <Array<Item>>[];
            }

            this._items[item.name].push(item);
        }

        return this;
    }

    get items(): InventoryItems {
        return this._items;
    }

    get gold(): number {
        return this._gold;
    }
}
