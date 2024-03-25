/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  console.log(result);
  return result;
  /*
  console.log(s.length);
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    console.log(i + " - " + romanValue(s.charAt(i)));
    let curRomanValue = romanValue(s.charAt(i));
    let nextRomanValue = 0;
    if (i + 1 < s.length) {
      nextRomanValue = romanValue(s.charAt(i + 1));
    }

    if (i === 0) {
      total = romanValue(s.charAt(i));
    } else {
      if (nextRomanValue > curRomanValue) {
      }
    }
  }*/
};
romanToInt("IIX");
romanToInt("MCMXCIV");
