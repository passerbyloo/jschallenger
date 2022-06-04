// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction(a, n) {
  return a.filter((_, index) => !((index + 1) % n))
}
