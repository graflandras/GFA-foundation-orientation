'use strict';

export class Cars {
  private id: number;
  private licensePlate: string;
  private mnfYear: number;
  private ticket: number;

  constructor(id: number, licensePlate: string, mnfYear: number, ticket: number) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.mnfYear = mnfYear;
    this.ticket = ticket;
  }
  getID(){
    return this.id;
  }
  getlicensePlate(){
    return this.licensePlate;
  }
  getmnfYear(){
    return this.mnfYear;
  }
  getTicket(){
    return this.ticket;
  }
}