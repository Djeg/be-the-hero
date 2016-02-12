/// <reference path="/typings/tsd.d.ts" />

import {Dice} from 'lib/core/domain/Dice';

describe('A core domain Dice', () => {
    it('Contains a range between two number', () => {
        let dice = new Dice(1, 10);

        expect(dice.min).toBe(1);
        expect(dice.max).toBe(10);

        let dice2 = new Dice(2, 12);

        expect(dice2.min).toBe(2);
        expect(dice2.max).toBe(24);
    });

    it('can generate a random value when it rolls', () => {
        let dice = new Dice(2, 6);

        for (let n = 0; n < 500; n++) {
            let r = dice.roll();

            expect(r).toBeGreaterThan(1);
            expect(r).toBeLessThan(13);
        }
    });
});
