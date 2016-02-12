import {Equipment} from 'lib/core/domain/hero/Equipment';
import {Hands} from 'lib/core/domain/inventory/weapon/Hands';
import {Clothing} from 'lib/core/domain/inventory/armor/Clothing';
import {Weapon} from 'lib/core/domain/inventory/Weapon';
import {Armor} from 'lib/core/domain/inventory/Armor';

export class StarterEquipment implements Equipment
{
    public weapon: Weapon;

    public armor: Armor;

    constructor()
    {
        this.weapon = new Hands();
        this.armor  = new Clothing();
    }
}
