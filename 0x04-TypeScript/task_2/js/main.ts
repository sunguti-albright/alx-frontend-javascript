// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Mombasa"
};

const studentsList: Student[] = [student1, student2];

window.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table") as HTMLTableElement;

  // create header <thead><tr><th>First Name</th><th>Location</th></tr></thead>
  const thead = document.createElement("thead") as HTMLTableSectionElement;
  const headerRow = document.createElement("tr") as HTMLTableRowElement;
  const thName = document.createElement("th") as HTMLTableCellElement;
  thName.textContent = "First Name";
  const thLocation = document.createElement("th") as HTMLTableCellElement;
  thLocation.textContent = "Location";
  headerRow.appendChild(thName);
  headerRow.appendChild(thLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // create body <tbody> with one <tr> per student
  const tbody = document.createElement("tbody") as HTMLTableSectionElement;
  for (const student of studentsList) {
    const row = document.createElement("tr") as HTMLTableRowElement;

    const tdFirst = document.createElement("td") as HTMLTableCellElement;
    tdFirst.textContent = student.firstName;

    const tdLoc = document.createElement("td") as HTMLTableCellElement;
    tdLoc.textContent = student.location;

    row.appendChild(tdFirst);
    row.appendChild(tdLoc);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
});


// Define the Teacher interface
interface Teacher {
  readonly firstName: string;         // readonly so only set on initialization
  readonly lastName: string;          // readonly so only set on initialization
  fullTimeEmployee: boolean;          // always defined
  yearsOfExperience?: number;         // optional
  location: string;                   // always defined
  [key: string]: any;                 // allow any other property (like contract)
}

// Create an example teacher object
// const teacher3: Teacher = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: false,
//   location: 'London',
//   contract: false,   // extra property not defined in the interface
// };

// console.log(teacher3);


// // Directors interface extending Teacher
// interface Directors extends Teacher {
//   numberOfReports: number;
// }

// // Example usage
// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };

// console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
// Example usage (optional test)
// console.log(printTeacher("John", "Doe")); // J. Doe

// Interface describing the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor signature
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implementation of the class
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName());    // Alice
console.log(student.workOnHomework()); // Currently working


// 1. DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3. Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 4. Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 5. createEmployee function
function createEmployee(salary: any) {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director

export function isDirector(){
  
}
// Type predicate to check if employee is a Director
// export function isDirector(employee: TeacherInterface | DirectorInterface): employee is DirectorInterface {
//   return (employee as DirectorInterface).workDirectorTasks !== undefined;
// }


// Function to execute work based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// String literal type
type Subjects = 'Math' | 'History';

// Function to teach class based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
