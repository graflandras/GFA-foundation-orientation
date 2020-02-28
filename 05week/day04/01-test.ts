declare function require(path:string): any;
const test = require('tape');

import { Apple } from './01-apple';


test('It is equal', t => {
    let apple = new Apple('Test string');
    t.equal(apple.getString(), 'Test string');
    t.end;
});
