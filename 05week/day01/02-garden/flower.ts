import { Plant } from './plant';
'use strict';

export class Flower extends Plant {

    constructor(name: string){
        super(name);
        this.waterAbs = 0.75;
    }
    plantInfo(){
        return super.plantInfo();
    }
    getName(){
        return super.getName();
    }
}