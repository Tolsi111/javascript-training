function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// const countOccurrences = (str, char) => str.split(char).length - 1;

// The split() method splits a string into an array of substrings.
//  split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

/*
Splitting the string removes the character, the resulting array will have 
one less element than the number of occurrences of the character. 
Therefore, we can simply subtract 1 from the length of the array to get the count of occurrences.
*/

module.exports = countOccurrences;
