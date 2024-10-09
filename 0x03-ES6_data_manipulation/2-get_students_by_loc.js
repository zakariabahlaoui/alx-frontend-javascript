export default function getStudentsByLocation(students, location) {
  return students.filter((x) => x.location === location);
}
