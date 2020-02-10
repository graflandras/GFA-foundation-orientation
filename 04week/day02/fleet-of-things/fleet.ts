import { ThingClass } from "./thing";

class FleetClass {
    private thingsToDo: ThingClass[]; 

    constructor() {
        this.thingsToDo = [];
    }

    add(thingToAdd: ThingClass) {
        this.thingsToDo.push(thingToAdd);
    }

    print() {
        for (let i: number = 0; i < this.thingsToDo.length; i++) {

        if (this.thingsToDo[i].checkIfComplete() !== true) { // checkIfComplete: thing.ts függvénye 

            console.log(`[ ] ${this.thingsToDo[i].getName()}`); //getName: thing.ts függvénye
            
        } else {
            console.log(`[x] ${this.thingsToDo[i].getName()}`); //getName: thing.ts függvénye
        }
    }
    }
}
export { FleetClass };
