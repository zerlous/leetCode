/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * 160-相交链表
 编写一个程序，找到两个单链表相交的起始节点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// Time: O(m+n), Space: O(1)
const getIntersectionNodeWithoutLen = (headA, headB) => {
  if (headA === null || headB === null) return null;
  let a = headA, b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};

// Time: O(m+n), Space: O(1)
const getIntersectionNodeWithLen = (headA, headB) => {
  let lenA = 0, lenB = 0, a = headA, b = headB;
  for (let p = headA; p != null; ++lenA, p = p.next);
  for (let q = headB; q != null; ++lenB, q = q.next);
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; ++i) a = a.next;
  } else {
    for (let j = 0; j < lenB - lenA; ++j) b = b.next;
  }
  while (a != b) {
    a = a.next;
    b = b.next;
  }
  return a;
};

module.exports = {
  getIntersectionNodeWithoutLen,
  getIntersectionNodeWithLen
};



