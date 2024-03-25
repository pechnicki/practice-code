function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  let result = new ListNode();
  let copy = result;
  for (let i = 0; i < array.length; i++) {
    if (array.length - 1 !== n) {
      copy.next = new ListNode(array[i]);
      copy = copy.next;
    }
  }
  return result.next;
};

