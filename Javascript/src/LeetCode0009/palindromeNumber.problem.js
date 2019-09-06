/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 009-回文数
 *
 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

 示例 1:

 输入: 121
 输出: true
 示例 2:

 输入: -121
 输出: false
 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 示例 3:

 输入: 10
 输出: false
 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 */

/**
 * @param {number} x
 * @return {boolean}
 */
// Time: O(m), Space: O(1)
const isPalindromeString = (x) => {
  if (x < 0) return false;
  let s = x.toString();
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

// Time: O(m), Space: O(1)
const isPalindrome = (x) => {
  if (x < 0) return false;
  let tmp = x;
  let remainder = tmp % 10;
  let y = 0;
  while (tmp != 0 && remainder != 0) {
    console.log(tmp, remainder)
    y = y * 10 + remainder;
    tmp = Math.floor(tmp / 10);
    remainder = tmp % 10;
  }
  return x === y;
};

module.exports = {
  isPalindromeString,
  isPalindrome
};