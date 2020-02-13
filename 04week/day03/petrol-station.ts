'use strict';
/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100*/

class CarClass {

    gasAmountOfCar: number; 
    capacity: number;

    constructor (gasAmountOfCar: number = 0, capacity: number = 100) {
        this.gasAmountOfCar = gasAmountOfCar;
        this.capacity = capacity;
    }

}

class StationClass {

    gasAmountOfStation: number = 200;

    refill(car: CarClass) {
        this.gasAmountOfStation -= car.capacity;
        console.log('Car capacity after refill: '+car.capacity);
        console.log('Gas amount of Station after refill: '+this.gasAmountOfStation);
    }

}

let volkswagen = new CarClass;
let agip = new StationClass;

console.log('Original gas amount of car: ' + volkswagen.gasAmountOfCar);
console.log('Capacity of car: ' + volkswagen.capacity);
console.log('Original gas amount of station: ' + agip.gasAmountOfStation);
console.log('---------------------------------');

agip.refill(volkswagen);