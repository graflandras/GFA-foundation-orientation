import {Animal} from './animal';
'use strict';

export class Bird extends Animal{
    constructor(name: string, age: number = 1, breed: string = "laying eggs", spiece: string = 'bird'){
        super(name, age, breed, spiece);
    }
}