import {AnyItem} from 'lib/core/domain/inventory/item/AnyItem';

let i: AnyItem;

describe('A core domain inventory item AnyItem', () => {
    beforeEach(() => {
        i = new AnyItem('Something', 'I do not know really what it is :/', 10);
    });

    it('contains name, description and a price', () => {
        expect(i.name).toBe('Something');
        expect(i.description).toBe('I do not know really what it is :/');
        expect(i.price).toBe(10);
    });
});
