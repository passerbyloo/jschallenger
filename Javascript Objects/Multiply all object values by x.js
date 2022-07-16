// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction(a, b) {
  return Object.entries(a).reduce((pv, cv) =>
    ({...pv, [cv[0]]: cv[1] * b}), {});
}
