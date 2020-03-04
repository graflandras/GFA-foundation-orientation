'use strict';
import { Cars } from './car';
import { appendToFile, readFromFile } from './fileIO';

export class CarPark {
  private myCars: Cars[] = [];

  addCar(car: Cars): void {
    this.myCars.push(car);
  }

  getMyCars(): Cars[] {
    return this.myCars;
  }

  addCarToFile(car: Cars) {
    appendToFile('cars.csv', `${car.getlicensePlate()},${car.getmnfYear()},${car.getTicket}\r\n`);
  }

  /*removeCar(car: Cars) {
    this.myCars.splice(this.myCars.indexOf(car), 1);
  }*/

  removeById(id: number) {
    this.myCars.forEach((e, i) => {
      if (e.getID() === id) {  //ha megtalálja a megadott ID-jű kocsit akkor
        this.myCars.splice(i, 1); //vágjon ki az indexétől kezdve 1 elemet (az adott kocsit)
      }
    });
    return this.myCars;
  }

  getOldest(fileName: string): string {
    let content = readFromFile(fileName);
    let array = [];
    if (content !== null) {
      content.split('\r\n').forEach(e => { //soronként bontja
        array.push(e.split(',')); //vesszőnként bontja és pusholja
      });

      let index = 0;
      let smallest = 2019;  //kezdő érték, amihez a gyártási évet viszonyítjuk 
      array.forEach((element, i) => {
        if (element[1] < smallest) {  //a kezdő értékhez képest megnéz egy autót, aztán ami annál kisebb, ahhoz viszonyít a továbbiakban
          index = i;
          smallest = element[i]; //a viszonyítási értéket cserélgeti az aktuális legkisebbre
        }
      });
      return array[index][0];
    }
  }

  getPenalty(fileName: string) {
    let content = readFromFile(fileName);
    let noParkingTicket: string[] = [];
    if (content !== null) {
      content.split('\r\n').forEach(e => {
        if (e.split(',')[2] === '0') { //azért 2, mert az id nem lett bepusholva (rendszám -0, gyév -1, ticket -2)
          noParkingTicket.push(e.split(',')[0]); //azért 0, mert a rendszámokat kell visszaadni
        }
      });
    }
    return noParkingTicket;
  }
}
let myCar1 = new Cars(12, 'ABCD-92', 1984, 1);
let myCar2 = new Cars(14, 'ABCD-92', 1984, 1);
let myCar3 = new Cars(2, 'ABCD-92', 1984, 1);
let myCarPark = new CarPark();
myCarPark.addCar(myCar1);
myCarPark.addCar(myCar2);
myCarPark.addCar(myCar3);

console.log(myCar1);

// console.log(myCarPark.removeCar(myCar));
// console.log(myCarPark.removeById(2));
// console.log(myCarPark.getMyCars());
// myCarPark.addCarToFile(myCar);

// console.log(myCarPark.getOldest('cars.csv'));
//console.log(myCarPark.getPenalty('cars.csv'));