'use strict';

const fs = require('fs');

export abstract class FileIO {
    protected readFile(fileName: string): string{
        try {
            return fs.readFileSynch(fileName, 'utf-8');
        } catch(error){
            console.log(`Cannot read ${fileName}, file not found`);
            return null;
        }
    }
    protected writeFile(){}
    protected appendFile(){}
}

