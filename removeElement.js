/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let removed = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === Infinity) {
      continue;
    }

    if (nums[i] === val) {
      nums[i] = Infinity;
      removed++;
    }
  }
  nums = nums.sort((a, b) => a - b);
  return nums.length - removed;
};

console.log(removeElement([1, 1, 2], 1));
console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1));
