/**
 * @Author: zerlous
 * @Date: 2019-07-13
 * @Problem: 回文字符串判断
 * @Copyright: https://algocasts.io/series/algo-problems-1-50/episodes/4rpaqpZb
 * @Description: Time: O(n), Space: O(1)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = module.exports = function (s) {
  var isAlphanumeric = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
  };

  var isEqualIgnoreCase = function (a, b) {
    if (a >= 'A' && a <= 'Z') a = String.fromCharCode(a.charCodeAt() + 32);
    if (b >= 'A' && b <= 'Z') b = String.fromCharCode(b.charCodeAt() + 32);
    return a === b;
  };

  if (!s) return true;
  var i = 0, j = s.length - 1;
  for (; i < j; ++i, --j) {
    while (i < j && !isAlphanumeric(s[i])) ++i;
    while (i < j && !isAlphanumeric(s[j])) --j;
    if (i < j && !isEqualIgnoreCase(s[i], s[j])) return false;
  }
  return true;
};