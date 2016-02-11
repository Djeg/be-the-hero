import {WeaponInterface} from 'lib/core/domain/WeaponInterface';

export interface LootInterface
{
    health: number;
    weapon: WeaponInterface;
}
