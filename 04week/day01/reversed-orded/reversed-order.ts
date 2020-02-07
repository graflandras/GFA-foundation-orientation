'use strict';

// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function reversedOrder(fileName: string){

    let fileContent: string[]= readFromFile(fileName).split('\r\n');
    let reversO: string[]=[];

    fileContent.forEach(element => {
        reversO.push(element)
    });
    
    return reversO.reverse().join('\r\n');
       
};

console.log(reversedOrder("reversed-order.txt"));