/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = { "(": ")", "{": "}", "[": "]" };
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      res.push(s[i]);
    } else {
      if (map[res.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return res.length === 0;
};

console.log(isValid("(])"));
