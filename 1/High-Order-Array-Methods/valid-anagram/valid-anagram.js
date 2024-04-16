function getLetterFrequency(letter, hashMap) {
  if (hashMap.hasOwnProperty(letter)) {
    hashMap[letter] = hashMap[letter] + 1;
  } else {
    hashMap[letter] = 1;
  }
}

function validAnagrams(str1, str2) {
  hashMap1 = {};
  hashMap2 = {};

  Array.from(str1).map((letter) => {
    getLetterFrequency(letter, hashMap1);
  });
  Array.from(str2).map((letter) => {
    getLetterFrequency(letter, hashMap2);
  });

  return (
    Object.keys(hashMap1).every((char) => hashMap1[char] === hashMap2[char]) &&
    Object.keys(hashMap2).every((char) => hashMap1[char] === hashMap2[char])
  );
}
// Object.keys(hashMap1).every()
module.exports = validAnagrams;
