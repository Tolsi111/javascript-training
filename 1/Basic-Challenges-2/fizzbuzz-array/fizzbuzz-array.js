function fizzBuzzArray(len) {
  let result = [];
  for (let i = 1; i <= len; i++) {
    let elem = "";
    if (i % 3 === 0) {
      elem += "Fizz";
    }
    if (i % 5 === 0) {
      elem += "Buzz";
    }
    if (elem === "") {
      result.push(i);
    } else {
      result.push(elem);
    }
  }
  return result;
}

console.log(fizzBuzzArray(20));

module.exports = fizzBuzzArray;
