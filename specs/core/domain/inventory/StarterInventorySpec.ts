import {StarterInventory} from 'lib/core/domain/inventory/StarterInventory';
import {InventoryItems} from 'lib/core/domain/inventory/Inventory';
import {Item} from 'lib/core/domain/inventory/Item';

let i: StarterInventory;
let something: Item;
let potion: Item;

describe('a core domain inventory StarterInventory', () => {
    beforeEach(() => {
        i = new StarterInventory(10);
        something = {
            name: 'something',
            description: 'du no dude :/',
            price: 10
        };
        potion = {
            name: 'potion of frozen frogs',
            description: 'This potion restore health',
            price: 30
        };
    });

    it('contains gold', () => {
        expect(i.gold).toBe(10);
    });

    it('can pay things', () => {
        let price: number = 2;

        expect(i.canPay(price)).toBe(true);
        expect(i.pay(price)).toBe(i);
        expect(i.gold).toBe(8);
    });

    it('can add golds', () => {
        i.addGold(10);

        expect(i.gold).toBe(20);
    });

    it('can collect items', () => {
        i.collect(something, potion);

        expect(i.items['something'].length).toBe(1);
        expect(i.items['something'][0]).toBe(something);
        expect(i.items['potion of frozen frogs'].length).toBe(1);
        expect(i.items['potion of frozen frogs'][0]).toBe(potion);
    });
});
