const _ = require("lodash");

function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

module.exports = { parseNumbers, isValidOperation };