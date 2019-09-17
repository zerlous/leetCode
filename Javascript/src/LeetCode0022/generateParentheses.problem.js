/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 22-括号生成
 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 */
/**
 *
 * @param result
 * @param str
 * @param left
 * @param right
 */
const generate = (result, str, left, right) => {
  if (left === 0 && right === 0) {
    result.push(str);
  } else {
    if (left > 0) generate(result, str + '(', left - 1, right);
    if (right > left) generate(result, str + ')', left, right -1);
  }
};
/**
 * @param {number} n
 * @return {string[]}
 */
// 递归 Time: O(4^n / sqrt(n)), Space: O(n)
const generateParentheses = (n) => {
  if (n <= 0) return [];
  let result = [];
  generate(result, "", n, n);
  return result;
};

// Time: O(4^n / n*sqrt(n)), Space: O(4^n / n*sqrt(n))
// TODO
const generateParenthesesDP = (n) => {
  if (n <= 0) return [];
  let d = [];
  for (let i = 0; i < n+1; ++i) d.push([]);
  d[0].push("");
};


module.exports = {
  generateParentheses,
  generateParenthesesDP
};