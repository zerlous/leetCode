/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 111-二叉树的最小深度
 给定一个二叉树，找出其最小深度。
 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// BFS  T:O(n)  S:O(n)
const minDepthBFS = (root) => {
  if (!root) return 0;
  let depth = 1, stacks = [root], stacksLength = 1;
  while (stacksLength != 0) {
    --stacksLength;
    const item = stacks.shift();
    if (item.left === null && item.right === null ) return depth;
    if (item.left) stacks.push(item.left);
    if (item.right) stacks.push(item.right);
    if (stacksLength == 0) {
      stacksLength = stacks.length;
      ++depth;
    }
  }
  return depth;
};

// DFS T:O(n)  S:O(n)
const minDepthRecursive = (root) => {
  if (!root) return 0;
  if (root.left && root.right) return 1 + Math.min(minDepthRecursive(root.left), minDepthRecursive(root.right));
  else if (!root.left) return 1 + minDepthRecursive(root.right);
  else if (!root.right) return 1 + minDepthRecursive(root.left);
};
/**
 * left   right   Result
 *  1      1        +1
 *  1      0        +1
 *  0      1        +1
 *  0      0        0
 */

module.exports = {
  minDepthBFS,
  minDepthRecursive
};