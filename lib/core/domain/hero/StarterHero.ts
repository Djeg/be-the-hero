import {Hero} from 'lib/core/domain/hero/Hero';
import {Equipment} from 'lib/core/domain/hero/Equipment';
import {Inventory} from 'lib/core/domain/inventory/Inventory';
import {StarterEquipment} from 'lib/core/domain/hero/equipment/StarterEquipment';
import {StarterInventory} from 'lib/core/domain/inventory/StarterInventory';

export class StarterHero implements Hero
{
    public health: number;

    public equipment: Equipment;

    public inventory: Inventory;

    private _maxHealth: number;

    private _initiative: number;

    constructor(
        private _name: string,
        public story: string
    ) {
        this._maxHealth  = 10;
        this.health      = this._maxHealth;
        this._initiative = 10;
        this.equipment   = new StarterEquipment();
        this.inventory   = new StarterInventory(10);

        this.inventory.collect(this.equipment.weapon, this.equipment.armor);
    }

    get name(): string {
        return this._name;
    }

    get maxHealth(): number {
        return this._maxHealth;
    }

    set maxHealth(health: number) {
        if (health <= 0) {
            throw 'A hero can not have < 0 pv';
        }

        this._maxHealth = health;

        if (this.health > this._maxHealth) {
            this.health = this._maxHealth;
        }
    }

    get initiative(): number {
        return this._initiative;
    }
}
