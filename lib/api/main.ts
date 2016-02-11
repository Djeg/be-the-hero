import {Hero} from 'lib/core/domain/Hero';
import {Battle} from 'lib/core/domain/Battle';
import {BattleHooks} from 'lib/core/domain/BattleHooks';

let david      = new Hero('David', 'The hero you need !');
let bigMonster = new Hero('Big Monster', 'A very very nasty monster');

let repository = {
    getRandomForKilledHero: (hero) => {
        return {
            health: 1,
            weapon: {
                name: 'Dagger',
                damages: 2
            }
        };
    }
};

let epicBattle = new Battle(repository);

epicBattle.on(BattleHooks.End, (hero, attacked) => {
    console.log(`${hero.name} attacked ${attacked.name} with ${hero.weapon.name} (-${hero.weapon.damages} pv, ${hero.health} pv left)`);
});

epicBattle.on(BattleHooks.Win, (hero, attacked) => {
    console.log(`${hero.name} win ! (weapon: ${hero.weapon.name}, dammages: ${hero.weapon.damages})`);
});

console.log('Game started !');

epicBattle.engage(david, bigMonster);
epicBattle.engage(bigMonster, david);
epicBattle.engage(david, bigMonster);
epicBattle.engage(bigMonster, david);
epicBattle.engage(david, bigMonster);
