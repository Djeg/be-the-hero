import {WeaponInterface} from 'lib/core/domain/WeaponInterface';
import {HeroInterface} from 'lib/core/domain/HeroInterface';
import {AvatarInterface} from 'lib/core/domain/AvatarInterface';
import {LootInterface} from 'lib/core/domain/LootInterface';

export class Hero implements HeroInterface
{
    public health: number;

    public avatar: AvatarInterface;

    private _name: string;

    private _story: string;

    public weapon: WeaponInterface;

    constructor(
        private _name: string,
        private _story: string
    ): void {
        this.health = 10;
        this.weapon = {
            name: 'Hands',
            damages: 1
        };
    }

    attack(enemi: Hero): Hero
    {
        enemi.health -= this.weapon.damages;

        return this;
    }

    upgrade(loot: LootInterface): Hero
    {
        this.health += loot.health;

        if (loot.weapon && loot.weapon.damages > this.weapon.damages) {
            this.weapon = loot.weapon;
        }

        return this;
    }

    isDead(): boolean
    {
        return this.health < 1;
    }

    get name(): string {
        return this._name;
    }

    get story(): string {
        return this._story;
    }
}
