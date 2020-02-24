import {Aircraft} from './aircraft';

'use strict';

export class F35 extends Aircraft {
    constructor(){
        super(50, 12, true); //baseDamage, maxAmmo, isPriority
    }
}