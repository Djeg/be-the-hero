import {WeaponInterface} from 'lib/core/domain/WeaponInterface';
import {LootInterface} from 'lib/core/domain/LootInterface';
import {AvatarInterface} from 'lib/core/domain/AvatarInterface';

export interface HeroInterface
{
    health: number;

    name: string;

    story: string;

    weapon: WeaponInterface;

    avatar: AvatarInterface;

    attack(otherHero: HeroInterface): HeroInterface;

    upgrade(loot: LootInterface): HeroInterface;

    isDead(): boolean;
}
