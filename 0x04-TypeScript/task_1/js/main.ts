interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // This allows any additional properties
}

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher);

// Directors interface extends Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director);

// print a teacher name
function printTeacher(firstName: string, lastName: string): void {
  const name = `${firstName[0]}. ${lastName}`;
  console.log(name);
}

// define an interface for printTeacher function
interface PrintTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => void;
}

printTeacher('John', 'Doe');

// student class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

const student = new StudentClass('ouadia', 'el-ouardy');
console.log(student);
