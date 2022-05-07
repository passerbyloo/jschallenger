// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100
}

/*
bug found in the author's solution

function myFunction(num) {
  return Number(num.toFixed(2));
}

myFunction(24.235), author's function will return 24.23.
expected: 24.24
*/
