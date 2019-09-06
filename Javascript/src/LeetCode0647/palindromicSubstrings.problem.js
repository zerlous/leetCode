/**
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 647-回文子串
 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
 */

/**
 * @param {string} s
 * @return {number}
 */

// Plan1 暴力穷举  T:O(n^3)   S:O(1)
/**
 * 是否是回文字符串
 * @param s
 */
const isPalindromEV = (s) => {
  const len = s.length;
  for (let i = 0, j = len - 1; i < (len / 2); i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};
const countPalindromicSubstringsEV = (s) => {
  if (!s || s.length === 0) return 0;
  let count = 0, n = s.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (isPalindromEV(s.substring(i, j))) {
        count++;
      }
    }
  }
  return count;
};

// Plan2 动态规划   T:O(n^2)  S:O(n^2)
const countPalindromicSubstringsDP = (s) => {
  if (!s || s.length === 0) return 0;
  let count = 0, n = s.length;
  let isPalindromic = {};
  for (let i = 0; i < n; ++i) {
    for (let j = i; j >= 0; --j) {
      // [j,i]之间的字符串是否回文判定
      if (j === i) isPalindromic[(j + '') + (i + '')] = true;
      else if (j + 1 === i)
        isPalindromic[(j + '') + (i + '')] = s[j] === s[i];
      else
        isPalindromic[(j + '') + (i + '')] = s[j] === s[i] && isPalindromic[((j + 1) + '') + ((i - 1) + '')];
      if (isPalindromic[(j + '') + (i + '')]) ++count;
      // console.log(j,i,s.substring(j,i+1), isPalindromic[(j+'')+(i+'')])
    }
  }
  return count;
};


// 由中心向两边扩展 T:O(n^2)  S:O(1)  Best
const expand = (s, left, right) => {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    ++count;
    --left;
    ++right;
  }
  return count;
};
const countPalindromicSubstringsExpand = (s) => {
  const len = s.length;
  if (!s || len === 0) return 0;
  let count = 0;
  let i = 0;
  while (i < len) {
    count += expand(s, i, i);
    count += expand(s, i, i + 1);
    ++i;
  }
  return count;
};

module.exports = {
  countPalindromicSubstringsEV,
  countPalindromicSubstringsDP,
  countPalindromicSubstringsExpand
};