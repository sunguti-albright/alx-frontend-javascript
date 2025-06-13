interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Mombasa'
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table in vanilla JS
const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();

const headerCell1 = headerRow.insertCell();
headerCell1.textContent = 'First Name';

const headerCell2 = headerRow.insertCell();
headerCell2.textContent = 'Location';

const tableBody = table.createTBody();

studentsList.forEach((student) => {
  const row = tableBody.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
