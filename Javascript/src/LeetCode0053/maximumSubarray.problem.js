/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 53-最大子序和
 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let max = -Infinity, cur = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    cur = cur <= 0 ? nums[i] : (cur + nums[i]);
    max = Math.max(max, cur);
  }
  return max;
};


module.exports = {
  maxSubArray
};