/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 104-二叉树的最大深度
 给定一个二叉树，找出其最大深度。
 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
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
// BFS  T:O(n)    S:O(n)
const maxDepthBFS = (root) => {
  if (!root) return 0;
  let depth = 1, stacks = [root], stacksLength = 1;
  while (stacksLength != 0) {
    let tmp = stacks;
    stacks = [];
    for (let i = 0; i < stacksLength; i++) {
      if (tmp[i].left) stacks.push(tmp[i].left);
      if (tmp[i].right) stacks.push(tmp[i].right);
    }
    stacksLength = stacks.length;
    if (stacksLength > 0) ++depth;
  }
  return depth;
};
// DFS  T:O(n)  S:O(n)
const maxDepthDFS = (root) => {
  if (!root) return 0;
  if (root.left && root.right) return 1 + Math.max( maxDepthDFS(root.left), maxDepthDFS(root.right));
  else if(root.left) return 1 + maxDepthDFS(root.left);
  else if(root.right) return 1 + maxDepthDFS(root.right);
  else return 1;
};

module.exports = {
  maxDepthBFS,
  maxDepthDFS
};