/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  allNums = nums1.concat(nums2).sort((a, b) => a - b);
  if (allNums.length === 0) {
    result = 0;
  } else if (allNums.length === 1) {
    // 1 element
    result = allNums[0];
  } else if (allNums.length % 2) {
    // odd - get the middle element
    result = allNums[Math.floor(allNums.length / 2)];
  }
  // even - get the medium from the middle +1
  else {
    const mid = allNums.length / 2;
    result = (allNums[mid - 1] + allNums[mid]) / 2;
  }
  console.log(result);
  return result;
};

findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([], [1]);
findMedianSortedArrays([2], []);
findMedianSortedArrays([1, 3], [2, 7]); // 2 + 4.5 // 1 + 2 + 3 + 7
