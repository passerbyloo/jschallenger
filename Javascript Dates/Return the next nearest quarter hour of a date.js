// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
  return ((~~(date.getMinutes() / 15) + 1) * 15) % 60
}
