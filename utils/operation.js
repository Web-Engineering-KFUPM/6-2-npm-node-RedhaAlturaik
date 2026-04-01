export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((res, num) => res - num, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((res, num) => res * num, 1);
}

export function divide(numbers) {
  return numbers.slice(1).reduce((res, num) => {
    if (num === 0) return NaN;
    return res / num;
  }, numbers[0]);
}