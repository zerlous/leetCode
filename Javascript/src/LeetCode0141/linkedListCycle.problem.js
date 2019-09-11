/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 141-环形链表
 给定一个链表，判断链表中是否有环。
 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 */
/**
 *
 * @param {NodeList} head
 * @returns {boolean}
 */
// T: O(n)    S: O(n)
const hasCycleWithHashSet = (head) => {
  const set = new Set();
  let p = head;
  while (p) {
    if (set.has(p)) {
      return true;
    }
    set.add(p);
    p = p.next;
  }
  return false;
};

// T:O(n)   S:O(1)  快慢双指针
const hasCycleWithTwoPointer = (head) => {
  let fast = head, slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};

module.exports = {
  hasCycleWithHashSet,
  hasCycleWithTwoPointer
};
