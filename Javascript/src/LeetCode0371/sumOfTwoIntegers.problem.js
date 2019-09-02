/*
 * https://leetcode-cn.com/problems/sum-of-two-integers/
 * 371-两整数之和
 *
 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
 */
// 位运算
/*
  0 0 0
  0 1 1
  1 0 1
  1 1 0
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// T:O(n) S:O(1)
// 递归实现
const getSumRecursive = function (a, b) {
  return b == 0 ? a : getSumRecursive(a^b, (a&b) << 1);
};

// 迭代实现
const getSumIterative = function (a, b) {
  while (b != 0) {
    const sum = a ^ b;
    const carry = ( a & b) << 1;
    a = sum;
    b = carry;
  }
  return a;
};

module.exports = {
  getSumRecursive,
  getSumIterative
};