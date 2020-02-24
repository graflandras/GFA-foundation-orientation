import { Aircraft } from "./aircraft";
import { F16 } from './f16';
import { F35 } from './f35';
import { runInThisContext } from "vm";

'use strict';

export class Carrier {
    airCrafts: Aircraft[] = [];
    initialAmmo: number;
    healthPoint: number;

    constructor(initialAmmo: number, healthPoint: number) {
        this.initialAmmo = initialAmmo;
        this.healthPoint = healthPoint;
    }

    add(aircraft: Aircraft): void {
        this.airCrafts.push(aircraft);
    }

    fill(): void {
        if (this.initialAmmo === 0) {
            throw `No ammo`;
        } else {
            this.airCrafts.forEach(element => {
                if (element.getPriority() && this.initialAmmo > 0) {
                    this.initialAmmo == element.refill(this.initialAmmo);
                }
            });
            this.airCrafts.forEach(element => {
                if (!element.getPriority() && this.initialAmmo > 0) {
                    this.initialAmmo = element.refill(this.initialAmmo);
                }
            });
        }
    }

    fight(enemyCarrier: Carrier): void {
        this.airCrafts.forEach(element => {
            enemyCarrier.healthPoint -= element.fight();
        });
    }

    getStatus(): string {
       let status =  `HP: ${this.healthPoint}, Aircraft count: ${this.airCrafts.length}, Ammo storage: ${this.initialAmmo}, Total damage: ${this.getAllDamage()}`
    
       this.airCrafts.forEach(element => {
           status += `\r\n${element.getStatus()}`
       });

       return this.healthPoint > 0 ? status: `It's dead Jim`;
    }

    getAllDamage(): number {
        let allDamage = 0;
        this.airCrafts.forEach(element => {
            allDamage += element.getAllDamage();
        });
        return allDamage;
    }
}

export let ferihegy = new Carrier(300, 1000);
export let ferihegy2 = new Carrier(100, 500)

for (let i: number = 0; i < 5; i++) {
 i % 2 === 0 ? ferihegy.add(new F16()) : ferihegy.add(new F35());
}

for (let i: number = 0; i < 5; i++) {
 i % 2 === 0 ? ferihegy2.add(new F16()) : ferihegy2.add(new F35());
}
ferihegy.fill();
ferihegy2.fill();
console.log(ferihegy.getStatus());
console.log(ferihegy2.getStatus());
ferihegy.fight(ferihegy2);
console.log(ferihegy.getStatus());
console.log(ferihegy2.getStatus());


