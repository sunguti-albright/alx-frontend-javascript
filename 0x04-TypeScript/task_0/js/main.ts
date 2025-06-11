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
