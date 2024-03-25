/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === Infinity) {
      continue;
    }
    diff++;
    let next = i + 1;
    while (nums[i] === nums[next]) {
      nums[next] = Infinity;
      next++;
    }
  }
  nums = nums.sort((a, b) => a - b);
  return diff;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
