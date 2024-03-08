function displayLikes(names) {
  let result = "";
  if (names.length <= 1) {
    if (names.length === 0) {
      result += "no one";
    } else {
      result += names[0];
    }
    return (result += " likes this");
  } else {
    if (names.length === 2) {
      result += names[0] + " and " + names[1];
    } else if (names.length === 3) {
      result += names[0] + ", " + names[1] + " and " + names[2];
    } else {
      result +=
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2).toString() +
        " others";
      // names[0] + ", " + names[1] + " and " + names.length - 2 + " others";
      // why this didn't work?
    }
    return (result += " like this");
  }
}

console.log(displayLikes([]));
console.log(displayLikes(["Peter"]));
console.log(displayLikes(["Jacob", "Alex"]));
console.log(displayLikes(["Max", "John", "Mark"]));
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max"]));
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"]));

module.exports = displayLikes;
