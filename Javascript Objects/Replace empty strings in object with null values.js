// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v])=> [k, !v.trim() ? null : v]))
}
