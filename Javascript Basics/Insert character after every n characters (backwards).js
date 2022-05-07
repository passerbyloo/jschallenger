// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
  return a.split('').reverse().map((c, index) => {
    return index % 3 == 2 ? b + c : c
  }).reverse().join('')
}
