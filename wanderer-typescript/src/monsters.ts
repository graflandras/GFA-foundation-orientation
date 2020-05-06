import { Characters } from "./chars";

'use strict';

export abstract class Monsters extends Characters {
    protected level: number;

    constructor(name: string, maxHPoint: number, currHPoint: number, defendPoint: number, strikePoint: number, d6: number, coordX: number, coordY: number, level: number){
        super(name, maxHPoint, currHPoint, defendPoint, strikePoint, d6, coordX, coordY)
        this.level = level;
    }
    drawMonster(){};
}