import {Animal} from './animal';
'use strict';

export class Mammal extends Animal{
    constructor(name: string, age: number = 2, breed: string = "pushing miniature version out", spiece: string = 'mammal'){
        super(name, age, breed, spiece);
    }
}