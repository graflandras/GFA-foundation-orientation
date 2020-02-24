import {Aircraft} from './aircraft';

'use strict';

export class F16 extends Aircraft {
    constructor(){
        super(30, 8, false); //baseDamage, maxAmmo, isPriority
    }
}

export let testF16 = new F16();