// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

function myFunction(d1, d2) {
  return Math.abs(d1 - d2) <= 60 * 60 * 1000
}
