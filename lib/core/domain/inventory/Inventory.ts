import {Item} from 'lib/core/domain/inventory/Item';

export interface InventoryItems
{
    [index: string]: Array<Item>;
}

export interface Inventory
{
    items: InventoryItems;

    gold: number;
}
