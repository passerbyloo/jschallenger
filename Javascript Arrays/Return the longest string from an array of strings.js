// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {
  return arr.reduce((pv, cv) => pv.length >= cv.length ? pv : cv)
}
