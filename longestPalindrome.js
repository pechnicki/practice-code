/**
 * @param {string} s
 * @return {string}
 */

const isPalindrome = (s) => {
  let first = 0;
  let last = s.length - 1;
  while (first < last) {
    if (s.charAt(first) !== s.charAt(last)) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};

var longestPalindrome = function (s) {
  if (s.length < 2 || (s.length === 2 && s[0] === s[1])) {
    return s;
  }
  let longest = "";
  for (let first = 0; first < s.length; first++) {
    let last = s.length;
    let currentSubstring = s.substring(first, last);
    while (!isPalindrome(currentSubstring) && first < last) {
      last--;
      currentSubstring = s.substring(first, last);
    }
    if (currentSubstring.length > longest.length) {
      longest = currentSubstring;
    }
  }
  return longest;
};

console.log(longestPalindrome("babad")); //bab or aba
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("ccc")); // bb
console.log(longestPalindrome("ccd")); // bb
