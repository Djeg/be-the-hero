import {Item} from 'lib/core/domain/inventory/Item';
import {Dice} from 'lib/core/domain/Dice';

export interface Weapon extends Item
{
    damages: Dice;
}
