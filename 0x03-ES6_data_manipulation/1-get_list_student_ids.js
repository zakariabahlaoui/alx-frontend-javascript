export default function getListStudentIds(arg) {
  // check if argument is an array
  if (!Array.isArray(arg)) return [];

  // return an array of ids from a list of object.
  return arg.map((x) => x.id);
}
