/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const signal = dividend * divisor > 0 ? 1 : -1;
  const max = Math.pow(2, 31);
  let result = 0;
  if (Math.abs(divisor) !== 1) {
    let rest = Math.abs(dividend);
    let div = Math.abs(divisor);
    while (rest >= div) {
      rest = rest - div;
      result++;
    }
  } else {
    result = Math.abs(dividend);
  }
  result = signal * result;
  if (result >= max) {
    result = max - 1;
  }
  return result;
};

console.log(divide(-2147483648, -1));
console.log(divide(-2147483648, 1));
