// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function myFunction(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
}
