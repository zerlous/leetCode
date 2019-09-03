/*
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 206-反转链表
 反转一个单链表
 */
const helper = require('../helper');
const {
  buildLinkedList,
} = helper;
// T:O(n)   S:O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head, prev = null;
  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

module.exports = {
  reverseList
};