declare function require(path:string): any;
const test = require('tape');

import {Anagram} from './03-anagram';

'use strict';

test("Testing anagram or not", (testCase) => {
    let test1 = new Anagram('Apple', 'elppA');
    let test2 = new Anagram('Apple', 'elppa');
    let test3 = new Anagram('Apple', 'eldxvdbgppA');
  
    testCase.plan(3);
    testCase.ok(test1, true, "This should be ok");
    testCase.ok(test2, true, "This should be ok");
    testCase.notOk(test3, false, "This should fail");
  })

