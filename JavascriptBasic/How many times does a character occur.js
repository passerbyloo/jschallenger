// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(pattern, match) {
  return match.split(new RegExp('\\'+pattern, "gi" )).length - 1
}
