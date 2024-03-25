/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let re = new RegExp(p);
  if (p.includes("*") || p.includes(".")) {
    let match = s.match(re);
    return match ? match[0] === match.input : false;
  } else {
    return s === p;
  }
};

//console.log(isMatch("mississippi", "mis*is*p*."));
//console.log(isMatch("ab", ".*c"));
console.log(isMatch("aa", "a*"));
