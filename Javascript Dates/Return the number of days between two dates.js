// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(d1, d2) {
  return Math.abs(d1 - d2) / (24 * 60 * 60 * 1000)
}
