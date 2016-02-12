import {StarterEquipment} from 'lib/core/domain/hero/equipment/StarterEquipment';

let equip: StarterEquipment;

describe('A core domain hero equipment StarterEquipment', () => {
    beforeEach(() => {
        equip = new StarterEquipment();
    });

    it('contains the most basic armor and weapon', () => {
        expect(equip.weapon.name).toBe('hands');
        expect(equip.armor.name).toBe('clothing');
    });
});
