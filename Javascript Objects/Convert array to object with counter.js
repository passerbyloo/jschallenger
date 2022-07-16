// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction(a) {
  return a.reduce((pv, cv) => 
    ({...pv, [cv]: pv[cv] ? pv[cv] + 1 : 1}), {})
}
