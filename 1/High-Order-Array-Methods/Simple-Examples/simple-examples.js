const numbers = [1, 2, 3, 4, 5];
//  The map method takes in a function as an argument and returns a new array with the result of calling the function on each element in the array.
const squaredNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(squaredNumbers);
//  The filter method takes in a function as an argument and returns a new array with all the elements that pass the test implemented by the function
