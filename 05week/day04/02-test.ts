declare function require(path:string): any;
const test = require('tape');

"use strict"
import { Sum } from './02-sum';


test("Testing sum method in MyNumbers class", (testCase) => {
  let testNumbers = new Sum([2, 2, 2, 2, 2]);
  let actual = testNumbers.sum();

  testCase.plan(2);
  testCase.equal(actual, 10, "This should be ok");
  testCase.equal(actual, 2, "This should fail");
})