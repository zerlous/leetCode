/*
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * 240-搜索二维矩阵 II
 *
 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
 */

// T:O(m+n) S:O(1)
const searchMatrix = function (matrix, target) {
  if (matrix === null || matrix.length === 0 ||
    matrix[0] === null || matrix[0].length === 0)
    return false;
  // m 行数 n 列数
  const m = matrix.length, n = matrix[0].length;
  // 初始阵列坐标，右上角
  let i = 0, j = n - 1;
  while(i < m && j >= 0) {
    if(target < matrix[i][j]) --j;
    else if (target > matrix[i][j]) ++i;
    else return true;
  }
  return false;
};

module.exports = {
  searchMatrix
};

