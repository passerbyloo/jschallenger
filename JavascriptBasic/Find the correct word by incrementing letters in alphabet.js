// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(s) {
  return [...s].reduce((p, v) => p + String.fromCharCode(v.charCodeAt(0) + 1), '')
}
