// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(n) {
  function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
  }
  function getNextPrime(n) {
    let count = n + 1;
    while(!isPrime(count)) {
      count++;
    }
    return count
  }
  return isPrime(n) ? n : getNextPrime(n)
}
