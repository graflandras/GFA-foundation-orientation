'use strict';

import { Person } from './person';
import { Mentor } from './mentor';
import { Sponsor } from './sponsor';
import { Student } from './student';

export class Cohort {
    protected name: string;
    protected students: string[];
    protected mentors: string[];

    constructor(name: string = '', students: string[] = [], mentors: string[] = []){
        this.name = name;
        this.students = students;
        this.mentors = mentors;
    }
    info (){
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`);
    }
    addStudent(Student){
        this.students.push(Student);
    }
    addMentor(Mentor){
        this.mentors.push(Mentor);
    }
}