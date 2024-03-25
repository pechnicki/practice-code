/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  /*
  let num = parseInt(s);
  if (num > 2147483647) num = 2147483647;
  else if (num < -2147483648) num = -2147483648;
  return (num = isNaN(num) ? 0 : num);
  */
  s = s.trim();
  const regex = /^[-|\+]?[0-9]+/;
  let match = s.match(regex);
  if (!match) {
    return 0;
  } else if (match[0] < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (match[0] >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  }
  return parseInt(s.match(regex)[0]);
};

console.log(myAtoi("2147483648"));
