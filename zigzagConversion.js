/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = {};
  let curRow = 0;
  let increasing = true;
  for (let i = 0; i < s.length; i++) {
    if (!result[curRow]) {
      result[curRow] = [];
    }
    result[curRow].push(s.charAt(i));

    if (!increasing && curRow === 0) {
      increasing = true;
    } else if (increasing && curRow === numRows - 1) {
      increasing = false;
    }
    if (increasing) {
      curRow++;
    } else {
      curRow--;
    }
  }
  let flattenResult = [];

  Object.values(result).forEach((values, key) => {
    flattenResult = flattenResult.concat(values);
  });
  return flattenResult.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("ABC", 1));
