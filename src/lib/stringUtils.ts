export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// a function that returns all of a string except the last character if it is an 's'
export function singularize(str: string) {
  return str.endsWith("s") ? str.slice(0, -1) : str;
}
