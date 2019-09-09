/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 88-合并两个有序数组
 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

 说明:
 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

 输入:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 输出: [1,2,2,3,5,6]
 */


/**
 * @param {number[]} nums1  [1,2,3,0,0,0]
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 双指针  从nums1尾部进行存放，不需要额外的空间复杂度
  // T:O(m+n)   S:O(1)
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while ( (p1 >= 0) && (p2 >= 0)) {
    nums1[p--] = (nums1[p1] >= nums2[p2]) ? nums1[p1--] : nums2[p2--];
  }
  // nums2更替
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
  // TODO: leetcode remove next lines.
  return nums1;
};

module.exports = {
  merge
};
