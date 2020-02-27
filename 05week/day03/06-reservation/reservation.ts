import {ForReservation} from './interface';

export class Reservation implements ForReservation{
    name: string = 'Booking#';
    bookingID: string;
    dayArray: string[] = ['MON', 'THU', 'WED', 'THI', 'FRI', 'SAT', 'SUN'];
    idArray: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    randID: string = '';
    
    constructor(){
    }
    getCodeBooking(): string{
        if (this.randID.length === 8){
            return this.randID;
        }
        this.randID += this.idArray[Math.floor(Math.random() * this.idArray.length)];
        return this.getCodeBooking();

    }
    getDowBooking(): string{
        let randDay: string = this.dayArray[Math.floor(Math.random() * this.dayArray.length)];
        return randDay;
    }
}
let test1 = new Reservation();
let test2 = new Reservation();
let test3 = new Reservation();
let test4 = new Reservation();
let test5 = new Reservation();




console.log(`${test1.name} ${test1.getCodeBooking()} for ${test1.getDowBooking()}`);
console.log(`${test2.name} ${test2.getCodeBooking()} for ${test2.getDowBooking()}`);
console.log(`${test3.name} ${test3.getCodeBooking()} for ${test3.getDowBooking()}`);
console.log(`${test4.name} ${test4.getCodeBooking()} for ${test4.getDowBooking()}`);
console.log(`${test5.name} ${test5.getCodeBooking()} for ${test5.getDowBooking()}`);

