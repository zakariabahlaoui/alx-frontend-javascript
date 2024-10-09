export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const output = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      output.push(value.slice(startString.length));
    }
  }

  return output.join('-');
}
