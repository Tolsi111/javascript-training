const products = [
  { name: "Apple", price: 0.5, quantity: 10 },
  { name: "Banana", price: 0.3, quantity: 20 },
  { name: "Orange", price: 0.6, quantity: 15 },
];

function getSum(totalValue, currentObj) {
  return totalValue + currentObj.price * currentObj.quantity;
}

function calculateTotalSalesWithTax(arr, taxRate) {
  const totalSales = arr.reduce(getSum, 0);
  const taxAmount = (totalSales * taxRate) / 100;
  return totalSales + taxAmount;
}

module.exports = calculateTotalSalesWithTax;
