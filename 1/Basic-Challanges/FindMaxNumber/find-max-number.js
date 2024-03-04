function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
  //   return Math.max(...arr);
  //   'spread syntax' / 'spread operator'
  // const arr1 = [1, 2, 3];
  // const arr2 = [...arr1, 4, 5, 6]; // arr2 will be [1, 2, 3, 4, 5, 6]
}

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]));

module.exports = findMaxNumber;
