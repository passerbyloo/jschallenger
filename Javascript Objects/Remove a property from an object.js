// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

function myFunction(obj) {
  const { country, ...newObj } = obj;
  return newObj
}
