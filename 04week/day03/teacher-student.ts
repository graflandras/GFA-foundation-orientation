'use strict';
/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/

class Student {
    learn (){
        console.log('Peti: Ertem, tanarneni!');
    }
    question (teacher: Teacher): any {
        console.log('Peti: Azt szeretnem kerdezni hogy...')
        teacher.answer();
    }
}

class Teacher {
    answer () {
        console.log('Erika neni: Ne okoskodj Petike');
    }
    teach(student: Student): any {
        console.log('Erika neni: Most megmondom a tutit');
        student.learn();
    }
}

let Peti = new Student;
let Erikaneni = new Teacher;

Peti.question(Erikaneni);
console.log('----------------------------')
Erikaneni.teach(Peti);