/*
 * https://leetcode-cn.com/problems/powx-n/
 * 50-Pow(x, n)
 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 累乘
// T:O(n)  S: O(1)
const powSimple = function (x, n) {
  let result = 1;
  const N = Math.abs(n);
  for (let i = 0; i < N; ++i)
    result *= x;
  return n < 0 ? 1 / result : result;
};

// 进位
// T:O(log(n))  S: O(1)
const powFast = function (x, n) {
  let result = 1;
  const N = Math.abs(n);
  for (let i = N; i != 0; i = Math.floor(i / 2)) {
    if (i % 2 != 0) result *= x;
    x *= x;
  }
  return n < 0 ? 1 / result : result;
};

module.exports = {
  powSimple,
  powFast
};