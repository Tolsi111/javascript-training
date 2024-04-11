function checkEven(n) {
  return n % 2 === 0;
}

function getSquared(n) {
  return n * n;
}

function getSum(totalValue, currentValue) {
  return totalValue + currentValue;
}

sumOfEvenSquares = function (arr) {
  return arr.filter(checkEven).map(getSquared).reduce(getSum, 0);
};

console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]));

module.exports = sumOfEvenSquares;
