import {HeroInterface} from 'lib/core/domain/HeroInterface';

export interface BattleHookInterface
{
    (attacker: HeroInterface, attacked: HeroInterface): void;
}
