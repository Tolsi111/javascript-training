function countVowels(str) {
  const vowels = /[aeiouAEIOU]/g;
  return str.length - str.replace(vowels, "").length;
}

console.log(countVowels("hello"));

module.exports = countVowels;
