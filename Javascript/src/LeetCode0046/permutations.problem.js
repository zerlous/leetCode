/**
 * https://leetcode-cn.com/problems/permutations/
 * 46-全排列
 给定一个没有重复数字的序列，返回其所有可能的全排列。
 */

/**
 * 递归调用实现排列
 * @param nums
 * @param start
 * @param result
 */
const permuteRec =  (nums, start, result) => {
  if (start === nums.length) {
    result.push([...nums]);
  } else {
    for (let i = start; i < nums.length; i++) {
      [nums[i], nums[start]] = [nums[start], nums[i]];// swap
      permuteRec(nums, start + 1, result);
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// T: O(n*n!)   S:O(n)
const permute = (nums = []) => {
  if (nums.length === 0) return nums;
  let result = [];
  // 0, 1, 2
  permuteRec(nums, 0, result);
  return result;
};

module.exports = {
  permute
};