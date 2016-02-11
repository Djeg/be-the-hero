import {LootRepositoryInterface} from 'lib/core/repository/LootRepositoryInterface';
import {HeroInterface} from 'lib/core/domain/HeroInterface';
import {BattleHookInterface} from 'lib/core/domain/BattleHookInterface';
import {BattleHooks} from 'lib/core/domain/BattleHooks';

export interface BattleHookCollection
{
    [index: BattleHooks]: Array<BattleHookInterface>;
}

export class Battle
{
    private hooks: BattleHookCollection;

    constructor(
        private repository: LootRepositoryInterface
    ) {
        this.hooks = [];
    }

    engage(attacker: HeroInterface, attacked: HeroInterface): void
    {
        this.trigger(BattleHooks.Start, attacker, attacked);

        attacker.attack(attacked);

        this.trigger(BattleHooks.End, attacker, attacked);

        if (attacked.isDead()) {
            attacker.upgrade(this.repository.getRandomForKilledHero(attacked));

            this.trigger(BattleHooks.Win, attacker, attacked);
            this.trigger(BattleHooks.Die, attacker, attacked);
        }
    }

    on(name: BattleHooks, hook: BattleHookInteface): Battle
    {
        if (!this.hooks[name]) {
            this.hooks[name] = <Array<BattleHookInteface>>[];
        }

        this.hooks[name].push(hook);

        return this;
    }

    private trigger(type: BattleHooks, attacker: HeroInterface, attacked: HeroInterface): void
    {
        if (!this.hooks[type]) {
            return;
        }

        for (let hook of this.hooks[type]) {
            hook(attacker, attacked);
        }
    }
}
