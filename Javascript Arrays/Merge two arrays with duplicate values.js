// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
}
