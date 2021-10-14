// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(d1, d2) {
  const hrs = Math.abs(d1.getHours() - d2.getHours());
  const min = Math.abs(d1.getMinutes() - d2.getMinutes());
  const sec = Math.abs(d1.getSeconds() - d2.getSeconds());
  return { hrs, min, sec }
}
