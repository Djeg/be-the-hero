import {Clothing} from 'lib/core/domain/inventory/armor/Clothing';

let c: Clothing;

describe('A core domain inventory armor Clothing', () => {
    beforeEach(() => {
        c = new Clothing();
    });

    it('is a simple armor with no protection', () => {
        expect(c.price).toBe(0);
        expect(c.protection).toBe(0);
    });
});
