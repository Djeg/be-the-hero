import {Item} from 'lib/core/domain/inventory/Item';

export interface Armor extends Item
{
    protection: number;
}
