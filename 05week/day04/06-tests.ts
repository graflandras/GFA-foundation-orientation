'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extensions';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 2 and 4 is 6', function (t: any): any {
  t.equal(add(2, 4), 6);
  t.end();
})

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(3, 5, 4), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: six', function (t: any): any {
  t.equal(median([7, 5, 3, 5, 4, 4]), 4.5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test("is vowel: k", function (t: any): any {
  t.notOk(isVowel("k"));
  t.end();
});

test('is vowel: E', function (t: any): any {
  t.ok(isVowel('E'));
  t.end();
});

test('translate: bemutatkozik', t => {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', t => {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});

test('translate: alma', t => {
  t.equal(translate('alma'), 'avalmava');
  t.end();
});

test('translate: kecske', function (t: any): any {
  t.equal(translate('kecske'), 'kevecskeve');
  t.end();
});

test('translate: txt', function (t: any): any {
  t.equal(translate('txt'), 'txt');
  t.end();
});

test('translate: ""', function (t: any): any {
  t.equal(translate(''), '');
  t.end();
});