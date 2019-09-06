/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 234-回文链表
 请判断一个链表是否为回文链表。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  堆栈处理 Time: O(n), Space: O(n)
const isPalindromeUsingStack = (head) => {
  let stacks = [];
  for (let node = head; node != null; node = node.next) {
    stacks.push(node.val);
  }
  for (let i = 0, l = stacks.length; i < l / 2; i++) {
    console.log(stacks[i], stacks[l - 1 - i]);
    if (stacks[i] != stacks[l - 1 - i]) return false;
  }
  return true;
};

module.exports = {
  isPalindromeUsingStack
};