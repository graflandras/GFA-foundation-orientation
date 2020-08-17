'use strict';
import { Books } from './bookclass';
import { Hardcover } from './hardcover';
import { Paperback } from './paperback';


export class Bookshelf {
  booksArray: Books[] = [];

  add(book: Books): void {
    this.booksArray.push(book);
  }

  authorOfTheLightest() {
    let index = 0;
    let smallest = 10000000;
    for (let i: number = 0; i < this.booksArray.length; i++) {
      if (this.booksArray[i].weight < smallest) {
        index = i;
        smallest = this.booksArray[i].weight;
      }
    }
    return `A legkonnyebb konyv iroja: ${this.booksArray[index].author} (konyv sulya: ${this.booksArray[index].weight} gramm).`;
  }

  authorOfMostPages() {
    let index = 0;
    let biggest = 0;
    for (let i: number = 0; i < this.booksArray.length; i++) {
      if (this.booksArray[i].pageNumber > biggest) {
        index = i;
        biggest = this.booksArray[i].pageNumber;
      }
    }
    return `A legtobb oldalt irta: ${this.booksArray[index].author} (oldalak szama: ${this.booksArray[index].pageNumber}).`;
  }
}

let bookshelf1 = new Bookshelf;
let book0 = new Hardcover('Elso kony', 'Zsiga', 1937, 236);
let book1 = new Hardcover('Masodik kony', 'Rezso', 1999, 130);
let book2 = new Paperback('Harmadik konyv', 'Bruno', 2005, 1300);

bookshelf1.add(book0);
bookshelf1.add(book1);
bookshelf1.add(book2);

console.log(bookshelf1.authorOfTheLightest());
console.log(bookshelf1.authorOfMostPages());




