/*
 * https://leetcode-cn.com/problems/same-tree/
 * 100-相同的树
 *
 给定两个二叉树，编写一个函数来检验它们是否相同。
 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// T:O(n) S:O(n)
// 递归实现
const isSameTreeRecursive = function (p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  return p.val === q.val && isSameTreeIterative(p.left, q.left) && isSameTreeIterative(p.right, q.right);
};

// 迭代实现
const isSameTreeIterative = function (p, q) {
  const stack = [];
  stack.push(p);
  stack.push(q);
  while (stack.length != 0) {
    const l = stack.pop(), r = stack.pop();
    if (l == null && r == null) continue;
    if (l == null || r == null) return false;
    if (l.val != r.val ) return false;
    // 相等
    stack.push(l.left);
    stack.push(r.left);
    stack.push(l.right);
    stack.push(r.right);
  }
  return true;
};

module.exports = {
  isSameTreeRecursive,
  isSameTreeIterative
};