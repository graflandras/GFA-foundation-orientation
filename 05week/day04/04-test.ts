declare function require(path:string): any;
const test = require('tape');
import {occurrences} from './04-countletters';

'use strict';

test("Testing no's of chars", (testCase) => {
    const testobject = {
        'a': 2,
        'l': 1,
        'm': 1,
    }
    testCase.plan(3)
    testCase.deepEqual(occurrences('alma'), testobject); //pass
    testCase.notDeepEqual(occurrences('alma'), 'alma'); //pass
    testCase.deepEqual(occurrences('alma'), 'alma'); //fail
  })

