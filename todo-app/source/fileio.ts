'use strict';

const fs = require('fs');

export abstract class FileIO {
    protected readFile(fileName: string): string {
        try {
            return fs.readFileSynch(fileName, 'utf-8');
        } catch (e) {
            console.log('Cannot read file');
            return null;
        }
    }

    protected writeFile(fileName: string, content: string): void {
        if (fs.existsSync(fileName)) {
            fs.writeFileSync(fileName, content);
        } else {
            console.log('Cannot write file, file doesnt exists');
        }
    }

    protected appendFile(fileName: string, content: string): void {
        if (fs.existsSync(fileName)) {
            fs.appendFileSync(fileName, content);
        } else {
            console.log('Cannot append to file, file doesnt exists');
        }
    }
}