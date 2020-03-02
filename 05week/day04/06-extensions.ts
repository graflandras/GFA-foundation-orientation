'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  let orderedPool = pool.sort(function (a, b) {
    return a - b;
  });
  if (pool.length % 2 !== 0) {
    return orderedPool[Math.floor(pool.length / 2)]
  } else {
    return (orderedPool[Math.floor((pool.length) / 2)] + orderedPool[Math.floor((pool.length) / 2) - 1]) / 2;
  }
}

export function isVowel(character: string): boolean {
  let lowerCaseChar = character.toLowerCase();
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === lowerCaseChar);
}

export function translate(hungarian: string): string {
  let teve: string = hungarian;
  let length: number = teve.length;
  let checkedVowels: string[] = [];

  for (let i: number = 0; i < length; i++) {
    let c: string = teve[i];
    if (isVowel(c) && checkedVowels.indexOf(c) === -1) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
      checkedVowels.push(c);
    }
  }
  return teve;
}

console.log('alma'.split('a').join());