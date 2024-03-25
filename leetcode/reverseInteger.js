/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negative = "";
  if (x < 0) {
    x *= -1;
    negative = "-";
  }
  let newInt = parseInt(
    `${negative}${x.toString().split("").reverse().join("")}`
  );
  if (newInt < Math.pow(-2,31) || newInt > Math.pow(2,31)) {
    return 0;
  }
  return newInt;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1563847412));
