function removeDuplicates(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
  //   return Array.from(new Set(arr));
  //   The reason that this works is because a Set can only contain unique values. So when we create a Set from an array, it will remove all the duplicates automatically.
}

module.exports = removeDuplicates;
