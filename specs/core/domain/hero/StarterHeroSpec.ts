import {StarterHero} from 'lib/core/domain/hero/StarterHero';

let goliath: StarterHero;

describe('A core domain hero StarterHero', () => {
    beforeEach(() => {
        goliath = new StarterHero('Goliath', 'A very big monster that can crush your bones ^.^');
    });

    it('contains basicly 10 of health', () => {
        expect(goliath.health).toBe(10);
        expect(goliath.maxHealth).toBe(10);
    });

    it('has a name and a story', () => {
        expect(goliath.name).toBe('Goliath');
        expect(goliath.story).toBe('A very big monster that can crush your bones ^.^');
    });

    it('contains default starter inventory and equipment', () => {
        expect(goliath.equipment.armor.name).toBe('clothing');
        expect(goliath.equipment.weapon.name).toBe('hands');

        expect(goliath.inventory.gold).toBe(10);

        expect(goliath.inventory.items['clothing'][0].name).toBe('clothing');
    });

    it('contains 10 of initiative', () => {
        expect(goliath.initiative).toBe(10);
    });

    it('has changeable maxHealth that impact current health', () => {
        goliath.maxHealth = 2;

        expect(goliath.health).toBe(2);
    });
});
