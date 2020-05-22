'use strict';
import { Books } from './bookclass';

export class Hardcover extends Books {
  constructor(title: string, author: string, releaseYear: number, pageNumber: number) {
    super(title, author, releaseYear, pageNumber);
    this.weight = (this.pageNumber*10)+100;
  }
  getWeight(): number{
    return (this.pageNumber*10)+100;
  }
  getInfo(): string{
    return `Author: ${this.author}, Title: ${this.title}, Year: ${this.releaseYear}.`;
  }
}