// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(arr, n) {
  return arr.reduce((pv, cv) => pv + (cv > n ? cv : 0), 0)
}
