/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  if (num < 1 || num > 3999) {
    return "";
  }
  let result = "";
  while (num > 0) {
    if (num >= 1000) {
      result += "M";
      num = num - 1000;
    } else if (num >= 900) {
      result += "CM";
      num = num - 900;
    } else if (num >= 500) {
      result += "D";
      num = num - 500;
    } else if (num >= 400) {
      result += "CD";
      num = num - 400;
    } else if (num >= 100) {
      result += "C";
      num = num - 100;
    } else if (num >= 90) {
      result += "XC";
      num = num - 90;
    } else if (num >= 50) {
      result += "L";
      num = num - 50;
    } else if (num >= 40) {
      result += "XL";
      num = num - 40;
    } else if (num >= 10) {
      result += "X";
      num = num - 10;
    } else if (num >= 9) {
      result += "IX";
      num = num - 9;
    } else if (num >= 5) {
      result += "V";
      num = num - 5;
    } else if (num >= 4) {
      result += "IV";
      num = num - 4;
    } else {
      while (num > 0) {
        result += "I";
        num--;
      }
    }
  }
  return result;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
