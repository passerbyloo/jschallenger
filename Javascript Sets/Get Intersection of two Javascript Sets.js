// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

function myFunction(setA, setB) {
  return new Set([...setA].filter(v => setB.has(v)))
}
