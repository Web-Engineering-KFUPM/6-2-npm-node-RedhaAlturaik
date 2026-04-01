import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return numbers.filter(num => !isNaN(num));
}

export function isValidOperation(operation) {
  return _.includes(["add", "subtract", "multiply", "divide"], operation);
}