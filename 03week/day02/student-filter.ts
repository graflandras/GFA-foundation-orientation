'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function studentCandies(students: any[]): void {
    let nameOfStudents: string = "Students with more than 4 candies: ";
    for (let student of students) {
      if (student.candies > 4) {
        nameOfStudents += student.name + ', ';
      }
    }
    console.log(nameOfStudents);
  }
studentCandies(students);

let q: number = 0;
function studentAverage(students: any[]): void {
    for (let student of students) {
        q += student.candies;  
    }
    q = q/students.length; //átlag
    let averageOfStudents: string = "Students have "+q+" candies in average.";
    console.log(averageOfStudents);
}
studentAverage(students);