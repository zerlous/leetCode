/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 21-合并两个有序链表
 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
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
  buildLinkedList,
  linkedList2Array
} = helper;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// T:O(m+n)   S:O(1)
const mergeTwoLists = (l1, l2) => {
  let dummy = {next:null}, p = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  if (l1 !== null) p.next = l1;
  if (l2 !== null) p.next = l2;
  return dummy.next;
};
module.exports = {
  mergeTwoLists
};