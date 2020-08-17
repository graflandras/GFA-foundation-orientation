'use strict';

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('Cannot read file');
    return null;
  }
}

function getMostRainy(fileName: string) {
  let content = readFromFile(fileName);
  let array = [];
  let m: number = 0;
  let mostFrequent: number = 1;
  let item: string = '';

  if (content !== null) {
    content.split('\r\n').forEach(e => {
      if (e.split(',')[2] === 'RAINY') {
        array.push(e.split(',')[1]);
      }
      for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
          if (array[i] == array[j])
            m++;
          if (mostFrequent < m) {
            mostFrequent = m;
            item = array[i];
          }
        }
        m = 0;
      }
    });
  }
  return item; //forrásfájl hiba miatt +1 Gyor sort felvettem a csv-be, így az eredmény Gyor
}

console.log(getMostRainy('cities.csv'));