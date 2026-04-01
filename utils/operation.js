function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(numbers) {
  return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

function divide(numbers) {
  return numbers.slice(1).reduce((result, num) => {
    if (num === 0) return NaN;
    return result / num;
  }, numbers[0]);
}

module.exports = { add, subtract, multiply, divide };