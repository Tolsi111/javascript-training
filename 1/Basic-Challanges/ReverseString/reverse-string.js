function reverseString1(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

function reverseStringWrong(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // console.log(str[i]);
    // console.log(str[str.length - 1 - i]);
    let aux = str[i];
    console.log(str[i]);
    str[i] = str[str.length - 1 - i];
    console.log(str[i]);
    str[str.length - 1 - i] = aux;
    console.log(str);
  }
  return str;
  // Strings in JavaScript are immutable, meaning that individual characters within a string cannot be modified directly.
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("Hello");

module.exports = reverseString;
