export default function updateStudentGradeByCity(
  students,
  location,
  newGrades,
) {
  return students
    .filter((student) => student.location === location)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      const studentGrade = gradeObj ? gradeObj.grade : 'N/A';
      return {
        ...student,
        grade: studentGrade,
      };
    });
}
