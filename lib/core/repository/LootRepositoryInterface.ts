import {HeroInterface} from 'lib/core/domain/HeroInterface';
import {LootInterface} from 'lib/core/domain/LootInterface';

export interface LootRepositoryInterface
{
    getRandomForKilledHero(killedHero: HeroInterface): LootInterface;
}
