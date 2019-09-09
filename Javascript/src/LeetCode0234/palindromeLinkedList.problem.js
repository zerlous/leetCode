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

const helper = require('../helper');
const {
  buildLinkedList
} = helper;
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
    if (stacks[i] != stacks[l - 1 - i]) return false;
  }
  return true;
};

// Time: O(n), Space: O(1)
const isPalindromeReverseList = (head) => {
  let len = 0;
  for (let node = head; node != null; node = node.next, ++len) ;

  // 反转一半的链表
  // 4 -> 2 -> 2 -> 4
  // 4 -> 2 -> 1 -> 2 -> 4
  let cur = head, pre = null;
  for (let i = 0; i < len / 2; ++i) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  if (len % 2 == 1) pre = pre.next;
  // 左右一分为二，中心二分，cur链表反转  pre后半段链表
  // cur  2 -> 4       pre  2 -> 4
  while (cur != null && pre != null) {
    if (cur.val !== pre.val) return false;
    cur = cur.next;
    pre = pre.next;
  }
  return true;
};

console.log(isPalindromeReverseList(buildLinkedList(4,2,1,2,4)));

module.exports = {
  isPalindromeUsingStack,
  isPalindromeReverseList
};