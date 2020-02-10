import { ThingClass } from "./thing";
import { FleetClass } from "./fleet";

let fleet = new FleetClass();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let thing1 = (new ThingClass('Get milk')); //változónak definiáljuk, hogy tudjunk rá hivatkozni
let thing2 = (new ThingClass('Remove the obstacles')); //változónak definiáljuk, hogy tudjunk rá hivatkozni
let thing3 = (new ThingClass('Stand up')); //változónak definiáljuk, hogy tudjunk rá hivatkozni
let thing4 = (new ThingClass('Eat lunch')); //változónak definiáljuk, hogy tudjunk rá hivatkozni

thing3.complete();
thing4.complete();

fleet.add(thing1); //a fleet.ts add függvényével beraktuk a Fleet class thingsToDo tömbjébe
fleet.add(thing2); //a fleet.ts add függvényével beraktuk a Fleet class thingsToDo tömbjébe
fleet.add(thing3); //a fleet.ts add függvényével beraktuk a Fleet class thingsToDo tömbjébe
fleet.add(thing4); //a fleet.ts add függvényével beraktuk a Fleet class thingsToDo tömbjébe

fleet.print();




