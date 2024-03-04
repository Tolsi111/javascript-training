function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  // Split the string into an array of words and put them all in lowercase.
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // Iterate through the array and capitalize the first letter of each word
    // by using the 0 index of the word and concatenating it with the rest of the word.
  }
  return words.join(" ");
  //   return str.replace(/\b\w/g, (match) => match.toUpperCase());
  //   '/' delimiter, marks the begining of the regular expression
  //   '\b' word boundary,  matches a position where one side is a word character (like letters, digits, or underscore) and the other side is not a word character (like whitespace or punctuation)
  //   '\w' word character, matches the first letter of each word
  //   '/' Another forward slash marks the end of the regular expression pattern
  //   'g' flag in JavaScript regular expressions that stands for "global." When this flag is used, the regular expression will search for all matches within the entire input string rather than stopping after the first match.
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase("plmcsf"));

module.exports = titleCase;
