/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
let wordLength = 0;
let totalCount = 0;

let search = function (s, wordCounts, i, used, matched) {
  if (matched == totalCount) return true;
  if (i >= s.length) return false;

  var testStr = s.substring(i, wordLength);

  if (wordCounts.has(testStr)) {
    // we found the test...
    if (!used.has(testStr)) {
      // we haven't found it before
      used.set(testStr, 1);
    } else if (used.get(testStr) < wordCounts.get(testStr)) {
      // we have found it before, but we still have matches left
      used.set(testStr, used.get(testStr) + 1);
    } else {
      // we haven't any matches left for that word
      return false;
    }
    return search(s, wordCounts, i + wordLength, used, matched + 1); // continue searching
  }
  return false;
};

var findSubstring = function (s, words) {
  wordLength = words[0].length;
  let wordCounts = new Map();

  // initialize wordCounts
  totalCount = 0;
  words.forEach((word) => {
    if (wordCounts.has(word)) {
      wordCounts.set(word, wordCounts.get(word) + 1);
    } else {
      wordCounts.set(word, 1);
    }
    totalCount++;
  });

  let result = [];
  for (var i = 0; i < s.length; i++) {
    if (search(s, wordCounts, i, new Map(), 0)) {
      result.push(i);
    }
  }
  return result;
};

console.log(
  findSubstring(
    "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel",
    [
      "dhvf",
      "sind",
      "ffsl",
      "yekr",
      "zwzq",
      "kpeo",
      "cila",
      "tfty",
      "modg",
      "ztjg",
      "ybty",
      "heqg",
      "cpwo",
      "gdcj",
      "lnle",
      "sefg",
      "vimw",
      "bxcb",
    ]
  )
);
