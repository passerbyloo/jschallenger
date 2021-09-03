// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(set1, set2) {
  return [...new Set([...set1, ...set2])]
}
