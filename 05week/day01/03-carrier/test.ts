declare function require(path:string): any;
const test = require('tape');

import {F35} from './f35';


'use strict';

test ('f35 refill', t => {
    let testf35 = new F35;
    t.plan(3);
    t.equal(testf35.refill(5), 0);
    t.equal(testf35.refill(7), 0);
    t.equal(testf35.refill(1), 1);
    t.end();
});



