import { Flower } from './flower';
import { Tree } from './tree';

'use strict';

export class Garden {
    plants: Flower[] | Tree[]; //a tömbben virág VAGY fa típusú elemek lesznek
    name: string;

    constructor(name) {
        this.name = name;
        this.plants = []; //üres array definiálása, enélkül nem lehet bele pusholni
    }

    addPlants(newplant: Flower | Tree) {
        this.plants.push(newplant);
    }

    gardenInfo() {
        console.log(`There are ${this.plants.length} plants in the garden`);
        this.plants.forEach(element => {
            if (element.plantInfo()) {
                console.log(`The ${element.getName()} ${element.constructor.name} needs water.`);
                console.log(element.constructor)
            } else {
                console.log(`The ${element.getName()} ${element.constructor.name} doesn't need water.`);
            }
        });
        console.log('--------------------------------------------------------');
    }
    wateringPlants(amount: number) {
        console.log(`Watering with ${amount}`);
        let thirstyPlants: number = 0;
        this.plants.forEach(element => {
            if (element.plantInfo()) { // === true nem kell, mert csak akkor lép be, ha igaz
                thirstyPlants++;
            }
        }); this.plants.forEach(element => {
            if (element.plantInfo()) { // === true nem kell, mert csak akkor lép be, ha igaz
                element.waterLevel = element.waterAbs * (amount / thirstyPlants);
            }
        })
    }

}