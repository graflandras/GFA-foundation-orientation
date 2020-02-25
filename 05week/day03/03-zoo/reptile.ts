import {Animal} from './animal';
'use strict';

export class Reptile extends Animal{
    constructor(name: string, age: number = 3, breed: string = "laying eggs", spiece: string = 'reptile'){
        super(name, age, breed, spiece);
    }
}