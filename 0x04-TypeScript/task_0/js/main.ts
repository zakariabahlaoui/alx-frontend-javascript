interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create two student objects
const s1: Student = {
  firstName: 'Ouadia',
  lastName: 'EL_OUARDY',
  age: 27,
  location: 'Morocco',
};

const s2: Student = {
  firstName: 'Julien',
  lastName: 'Barbier',
  age: 30,
  location: 'USA',
};

// create a students list that contains s1 and s2
const studentsList: Student[] = [s1, s2];

// render an HTML table that displays our students
const table = document.createElement('table');
// create the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
['First Name', 'Location'].forEach((headerText) => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
// create table body
const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});
table.appendChild(tbody);

// append table to the body
document.body.appendChild(table);
