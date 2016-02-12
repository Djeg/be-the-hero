/// <reference path="/typings/tsd.d.ts" />

import {Hands} from 'lib/core/domain/inventory/weapon/Hands';

let hands = Hands;

describe('A core domain inventory weapon Hands', () => {
    beforeEach(() => {
        hands = new Hands();
    });

    it('is a weapon containing name and description', () => {
        expect(hands.name).toBe('hands');
        expect(hands.description).toBe('bare hands');
    });

    it('cost 0', () => {
        expect(hands.price).toBe(0);
    });

    it('do between 1 and 2 damages', () => {
        expect(hands.damages.min).toBe(1);
        expect(hands.damages.max).toBe(2);
    });
});
