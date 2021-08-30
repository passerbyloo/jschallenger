// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr
}
