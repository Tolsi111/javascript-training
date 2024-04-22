function generateHashtag(str) {
  if (str === null || str === "") {
    return false;
  }
  return str
    .split(" ")
    .reduce(
      (finalString, word) =>
        finalString + word[0].toUpperCase() + word.slice(1),
      "#"
    );
}

generateHashtag("sa moara mama varcolacilor");

module.exports = generateHashtag;
