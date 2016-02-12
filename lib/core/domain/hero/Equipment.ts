import {Weapon} from 'lib/core/domain/inventory/Weapon';
import {Armor} from 'lib/core/domain/inventory/Armor';

export interface Equipment
{
    weapon: Weapon;
    armor: Armor;
}
