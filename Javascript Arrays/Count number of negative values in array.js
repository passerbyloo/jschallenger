// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function myFunction(a) {
  return a.filter(num => num < 0).length
}
