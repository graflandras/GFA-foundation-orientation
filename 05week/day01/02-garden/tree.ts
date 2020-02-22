import { Plant } from './plant';
'use strict';

export class Tree extends Plant {

    constructor(name: string){
        super(name);
        this.waterAbs = 0.4;
    }
    plantInfo(){
        return super.plantInfo();
    }
    getName(){
        return super.getName();
    }
}

