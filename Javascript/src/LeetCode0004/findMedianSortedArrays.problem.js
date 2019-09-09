/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 004-两个排序数组的中位数
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
 *
 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
 *
 * 你可以假设 nums1 和 nums2 不同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 中位数是 2.0
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 中位数是 (2 + 3)/2 = 2.5
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 分治排序
const mergeSort = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  let result = [];
  let nums1Length = nums1.length;
  let nums2Length = nums2.length;
  if (nums1Length === 0) {
    return nums2;
  }
  if (nums2Length === 0) {
    return nums1;
  }
  while (i !== nums1Length && j !== nums2Length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i = i + 1;
    } else {
      result.push(nums2[j]);
      j = j + 1;
    }
  }
  if (i === nums1Length) {
    result = result.concat(nums2.slice(j));
  } else if (j === nums2Length) {
    result = result.concat(nums1.slice(i));
  }
  let t = result;
  let l = t.length;
  return l % 2 === 0 ? (t[l / 2] + t[l / 2 - 1]) / 2 : t[parseInt(l / 2)];
}


// T: O(log(m+n))     S:O(1)
const findMedianSortedArrays = (nums1, nums2) => {
  const total = nums1.length + nums2.length;
  if ((total & 1) === 1) {
    // 奇数取中位数
    return findKthSmallestInSortedArrays(nums1, nums2, Math.floor(total / 2) + 1);
  } else {
    // 偶数取中间两位数的Avg
    return (findKthSmallestInSortedArrays(nums1, nums2, total / 2) + findKthSmallestInSortedArrays(nums1, nums2, total / 2 + 1)) / 2;
  }
};
/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 */
// [1,2,3]
// [4,5,6,7]
const findKthSmallestInSortedArrays = (nums1, nums2, k) => {
  console.log(k);
  let len1 = nums1.length, len2 = nums2.length, base1 = 0, base2 = 0;
  while (true) {
    if (len1 === 0) return nums2[base2 + k - 1];
    if (len2 === 0) return nums1[base1 + k - 1];
    if (k === 1) return Math.min(nums1[base1], nums2[base2]);

    let i = Math.min( Math.floor(k / 2), len1);
    let j = Math.min( k - i, len2);
    let a = nums1[base1 + i -1 ], b = nums2[base2 + j - 1];

    if (i + j == k && a===b) return a;

    if ( a <= b) {
      base1 += i;
      len1 -= i;
      k -= i;
    }
    if ( a >= b) {
      base2 += j;
      len2 -= j;
      k -= j;
    }
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));

module.exports = {
  mergeSort,
  findMedianSortedArrays
};