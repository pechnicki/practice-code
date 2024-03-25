/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const maxSize = l1.length > l2.length ? l1.length : l2.length;
  let result = 0;
  for (let i = 0; i < maxSize; i++) {
    let multiplier = 10 ** i;
    if (i < l1.length) {
      result += l1[i] * multiplier;
    }
    if (i < l2.length) {
      result += l2[i] * multiplier;
    }
  }
  console.log(result);
  return Array.from(result.toString(), Number).reduce(
    (next, val) => ({ val, next }),
    null
  );
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([2, 4, 9], [5, 6, 4, 9]));
