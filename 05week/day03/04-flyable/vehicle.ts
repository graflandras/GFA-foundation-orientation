import {Flyable} from './flyable';
'use strict';

export abstract class Vehicle{
    name: string;
    brand: string;
    engine: string;

    constructor(name: string, brand: string, engine: string){
        this.name = name;
        this.brand = brand;
        this.engine = engine;
    }
}
