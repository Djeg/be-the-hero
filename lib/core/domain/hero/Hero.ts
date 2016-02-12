import {Equipment} from 'lib/core/domain/hero/Equipment';
import {Inventory} from 'lib/core/domain/inventory/Inventory';

export interface Hero
{
    name: string;

    story: string;

    maxHealth: number;

    health: number;

    initiative: number;

    equipment: Equipment;

    inventory: Inventory;
}
