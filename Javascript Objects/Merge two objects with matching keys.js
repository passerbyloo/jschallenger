// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(obj1, obj2) {
  //Must follow the expected order, why?
  const { country, ...restObj2 } = obj2;
  return {...obj1, ...restObj2, city: country}
}
