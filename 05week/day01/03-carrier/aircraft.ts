import {F16} from './f16';
'use strict';

export class Aircraft {
  protected baseDamage: number;
  protected maxAmmo: number;
  protected currAmmo: number = 0;
  protected isPriority: boolean;

  constructor(baseDamage: number, maxAmmo: number, isPriority: boolean) {
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.isPriority = isPriority;
  }

  getBaseDamage() {
    return this.baseDamage;
  }

  getMaxAmmo() {
    return this.maxAmmo;
  }

  getCurrAmmo() {
    return this.currAmmo;
  }

  fight(): number {
    let dealedDamage: number = this.baseDamage * this.currAmmo;
    this.currAmmo = 0;
    return dealedDamage;
  }
  refill(input: number): number {
    let missingAmmo: number = this.maxAmmo - this.currAmmo;
    let remainingAmmo: number = 0;
    if (missingAmmo === input) {
      this.currAmmo += input;
      return remainingAmmo = 0;
    } else if (missingAmmo > input) {
      this.currAmmo += input;
      return remainingAmmo = 0;
    } else if (missingAmmo < input) {
      this.currAmmo += missingAmmo;
      return remainingAmmo = input - missingAmmo;
    }
    return remainingAmmo;
    }

  getType(): string {
    return this.constructor.name;
  }
  getStatus(): string {
    return `Type: ${this.constructor.name}, Ammo: ${this.getCurrAmmo()}, Base Damage: ${this.getBaseDamage()}, All damage: ${this.getAllDamage()}`;
  }
  getPriority() {
    return this.isPriority;
  }
  getAllDamage(): number {
    return this.getBaseDamage() * this.getCurrAmmo();
  }
}
