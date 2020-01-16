'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function countCandies(students: any[]): number {
    let candies: number = 0;
    for (let student of students) { //(let XY of objectname)
      candies += student.candies;   // xy.objectname
    }
    return candies;
}
console.log(countCandies(students));

function countIf(students: any[]): number {
    let age: number = 0;
    for (let student of students) {
            if (student.candies < 5) {
                age += student.age;    
            }
        }
    return age;
}

console.log(countIf(students));
  