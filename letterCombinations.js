/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letterByNum = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  result = [];

  const buildString = (digitIndex, currentString) => {
    if (digits[digitIndex]) {
      letterByNum[digits[digitIndex]].forEach((letter) => {
        buildString(digitIndex + 1, currentString + letter);
      });
    } else {
      result.push(currentString);
      return;
    }
  };

  if (digits.length > 0) {
    buildString(0, "");
  }

  return result;
};

console.log(letterCombinations("23"));
