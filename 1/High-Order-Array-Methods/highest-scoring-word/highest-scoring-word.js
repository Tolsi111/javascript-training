function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) =>
    Array.from(word).reduce(
      (totalScore, letter) => totalScore + letter.charCodeAt(0) - 96,
      0
    )
  );

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

module.exports = highestScoringWord;

// array.from, reduce function, .charCodeAt()
