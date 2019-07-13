/**
 * @Author: zerlous
 * @Date: 2019-07-13
 * @Problem: 回文字符串判断
 * @Copyright: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @Description: Time: O(n), Space: O(1)
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = module.exports = function (numbers, target) {
  var i = 0, j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] > target) {
      --j;
    } else if (numbers[i] + numbers[j] < target) {
      ++i
    } else {
      return [i + 1, j + 1]
    }
  }
  return [-1, -1];
};