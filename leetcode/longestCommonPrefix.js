/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  const word = strs[0];
  prefix = "";
  for (let i = 0; i < word.length; i++) {
    let previousPrefix = prefix;
    prefix = `${prefix}${word.charAt(i)}`;
    let havePrefixList = strs.filter((w) => w.startsWith(prefix));
    if (havePrefixList.length !== strs.length) {
      return previousPrefix;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight", "flag"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
