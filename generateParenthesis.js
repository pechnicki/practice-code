/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  let stack = [];
  let result = [];

  function addParenthesis(open, close) {
    if (open == close && open == n) {
      result.push(stack.join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      addParenthesis(open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      addParenthesis(open, close + 1);
      stack.pop();
    }
  }
  addParenthesis(0, 0);
  return result;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
