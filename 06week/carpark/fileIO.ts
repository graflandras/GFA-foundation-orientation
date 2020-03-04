'use strict';

const fs = require('fs');

export abstract class FileIO {

}

export function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('Cannot read file');
    return null;
  }
}

export function writeToFile(fileName: string, content: string): void {
  if (fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    console.log('cannot write file');
  }
}

export function appendToFile(fileName: string, content: string): void {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, content);
  } else {
    console.log('cannott write to file');
  }
}
