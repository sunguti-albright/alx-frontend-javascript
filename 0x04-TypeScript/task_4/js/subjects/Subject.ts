//<reference path="./Teacher.ts" />
namespace Subjects {
  export interface Subject {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  export class Subject implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

  