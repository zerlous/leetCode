/**
 * https://leetcode-cn.com/problems/majority-element/
 * 169-求众数
 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 你可以假设数组是非空的，并且给定的数组总是存在众数。
 */
// Time: O(n), Space: O(n)
const getMajorityWithHashMap = (nums) => {
  const len = nums.length;
  const t = Math.ceil(len / 2);
  const hash = new Map();
  for (let i = 0; i < len; i++) {
    const k = nums[i];
    const v = (hash.get(k) || 0);
    hash.set(k, v + 1);
    if (i + 1 >= t && v + 1 >= t) return k;
  }
};

// Time: O(n), Space: O(1)  BEST
const getMajority = (nums) => {
  let num = nums[0], count = 1;
  for (let i = 1,len = nums.length; i < len;++i) {
    if (count === 0) {
      num = nums[i];
      count = 1;
    } else if (nums[i] === num) {
      ++count;
    } else --count;
  }
  return num;
};

module.exports = {
  getMajority,
  getMajorityWithHashMap
};