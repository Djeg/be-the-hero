import {Hero} from 'lib/core/domain/Hero';

let test: Hero;

describe('A core domain Hero', () => {
    beforeEach(() => {
        test = new Hero('Test', 'Some test')
    });

    it('Has a name and a story', () => {
        expect(test.name).toBe('Test');
        expect(test.story).toBe('Some test');
    });

    it('Has 10 health and hands weapon by defaults', () => {
        expect(test.weapon.name).toBe('Hands');
        expect(test.weapon.damages).toBe(1);
        expect(test.health).toBe(10);
    })

    it('Can attack an other hero', () => {
        let otherHero = new Hero('Big monster', 'a very ugly monster');

        test.attack(otherHero);

        expect(otherHero.health).toBe(9);
    });
});
