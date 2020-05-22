'use strict';

export abstract class Books {
  title: string;
  author: string;
  releaseYear: number;
  pageNumber: number;
  weight: number;

  constructor(title: string, author: string, releaseYear: number, pageNumber: number){
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.pageNumber = pageNumber;
  }
  getWeight(){}
  getInfo(){
      
  }
}