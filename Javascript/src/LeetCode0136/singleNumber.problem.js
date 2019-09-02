/*
 * https://leetcode-cn.com/problems/single-number/
 * 136-只出现一次的数字
 *
 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 PS: 使用线性复杂度，并不使用额外空间
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var hash = new Set();
  var onlyHash = new Set();
  var tmp;
  for(var i = 0, l = nums.length; i < l; i++) {
    var k = nums[i];
    if(!hash.has(k)) {
      hash.add(k);
      onlyHash.add(k);
    } else {
      onlyHash.delete(k);
    }
  }
  return Array.from(onlyHash);
};

// Set操作实现
// T:O(n) S:O(n)
const singleNumberWithSet = function (nums) {
  const hash = new Set();
  let uniqueSum = 0, sums = 0;
  for (let i = 0, l = nums.length; i< l;i++) {
    const v = nums[i];
    if (!hash.has(v)) {
      hash.add(v);
      uniqueSum += v;
    }
    sums += v;
  }
  return 2 * uniqueSum - sums;
};

// 异或操作
// x^x=0
const singleNumberWithXOR = function (nums) {
  let result = 0;
  for(let i = 0, l = nums.length; i < l;i++) {
    result ^= nums[i];
  }
  return result;
};

module.exports = {
  singleNumberWithSet,
  singleNumberWithXOR
};