import { Garden } from "./garden";
import { Flower } from "./flower";
import { Tree } from "./tree";

'use strict';

let myGarden = new Garden('My Garden');

myGarden.addPlants(new Flower('Yellow'));
myGarden.addPlants(new Flower('Blue'));
myGarden.addPlants(new Tree('Purple'));
myGarden.addPlants(new Tree('Orange'));

myGarden.gardenInfo();
myGarden.wateringPlants(40);
myGarden.gardenInfo();
myGarden.wateringPlants(70);
myGarden.gardenInfo();

