function findMissingNumber(arr) {
  let n = arr.length;
  let sum = 0;
  // compute actual sum
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  n += 1; // assume there is no missing number
  if (sum === 0) {
    return 1;
  } else {
    return (n * (n + 1)) / 2 - sum;
  }
}

module.exports = findMissingNumber;
