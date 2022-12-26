// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
  // find the quotient
  const q = ~~(x / y);
     
  // 1st possible closest number
  const n1 = y * q;
     
  // 2nd possible closest number
  const n2 = (x * y) > 0 ?
    (y * (q + 1)) : (y * (q - 1));
     
  return x > n1 ? n2 : n1
}
