'use strict';

export class Plant {
    protected name: string;
    waterLevel: number = 0;
    waterAbs: number;

    constructor(name: string){
        this.name = name;
        this.waterLevel = 0;
    }
    plantInfo(){
        return this.waterLevel < 5;
    }
    getName(){
        return this.name;
    }
}
