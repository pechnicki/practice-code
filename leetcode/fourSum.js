/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  let result = new Set();
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length-3; i++) {
    for (let j = i + 1; j < nums.length-2; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.add([nums[i], nums[j], nums[left], nums[right]].toString());
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  let listResult = [];
  result.forEach((v) => listResult.push(v.split(",")));
  return listResult;
};

console.log(fourSum([-1, 0, 1, 2, -1, -4], -1));
