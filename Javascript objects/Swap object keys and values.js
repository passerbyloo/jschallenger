// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]))
}
