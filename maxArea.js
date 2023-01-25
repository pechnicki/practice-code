/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    area = Math.max(
      area,
      Math.min(height[left], height[right]) * (right - left)
    );
    height[left] <= height[right] ? left++ : right--;
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
