/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i);
    let repeated = false;
    let j = i + 1;
    while (!repeated && j < s.length) {
      if (current.includes(s.charAt(j))) {
        repeated = true;
      } else {
        current += s.charAt(j);
        j++;
      }
    }
    if (j - i > longest) {
      longest = j - i;
    }
  }
  return longest;
};

lengthOfLongestSubstring("abcabcbb"); // abc - 3
lengthOfLongestSubstring("bbbbb"); // b - 1
lengthOfLongestSubstring("pwwkew"); // wke - 3
