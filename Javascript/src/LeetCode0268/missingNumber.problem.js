/**
 * https://leetcode-cn.com/problems/missing-number/
 * 268-缺失数字
 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 求和计算
const missingNumberSum = (nums) => {
const len = nums.length;
let total = (1 + len) * len / 2;
for (let i = 0; i < len; i++) {
  total -= nums[i];
}
return total;
};

// 异或计算     x^x=0
const missingNumberXOR = (nums) => {
  const len = nums.length;
  let result = len;
  for (let i = 0; i < len; i++) {
    result = result ^ i ^ nums[i];
  }
  return result;
};

module.exports = {
  missingNumberSum,
  missingNumberXOR
};