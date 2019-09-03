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
const powSimple = function(x, n) {
  let result = 1;
  const N = Math.abs(n);
  for (let i = 0; i < N; ++i)
    result *= x;
  return n < 0 ? 1/result : result;
};

// 进位
// T:O(log(n))  S: O(1)
const powFast = function (x, n) {
  let result = 1;
  let N = Math.abs(n);
  while (N != 0) {
    if ((N & 1) == 1) result *= x;
    x *= x;
    N >>= 1;
  }
  return n < 0 ? 1/result : result;
};

module.exports = {
  powSimple,
  powFast
};