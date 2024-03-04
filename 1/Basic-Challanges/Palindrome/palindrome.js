const reverseString = require("../ReverseString/reverse-string");

function palindrome1(str) {
  let reverse = reverseString(str);
  reverse = reverse.toLowerCase().split(/[, ]/).join("");
  str = str.toLowerCase().split(/[, ]/).join("");
  return reverse === str;
}

function palindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); //any non-alphanumeric characters
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}

module.exports = palindrome;
