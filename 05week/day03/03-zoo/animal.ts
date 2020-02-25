'use strict';

export abstract class Animal {
    protected name: string;
    protected age?: number;
    protected breed?: string;
    protected spiece?: string;

    constructor(name: string, age: number, breed: string, spiece: string){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.spiece = spiece;
    }
    getName(){
        return this.name;
    }
    getBreed(){
        return this.breed;
    }
    getInfo(){
        return (`${this.name} is a ${this.age} year(s) old ${this.spiece}, breeding by ${this.breed}`);
    }
}