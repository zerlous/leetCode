/**
 * https://leetcode-cn.com/problems/min-stack/
 * 155-最小栈
 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 push(x) -- 将元素 x 推入栈中。
 pop() -- 删除栈顶的元素。
 top() -- 获取栈顶元素。
 getMin() -- 检索栈中的最小元素。

 示例:
 MinStack minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.getMin();   --> 返回 -3.
 minStack.pop();
 minStack.top();      --> 返回 0.
 minStack.getMin();   --> 返回 -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stacks = [];
  this.min = Infinity;
  return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stacks.push(x);
  this.min = Math.min(this.min,x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stacks.length) {
    let one = this.stacks.pop();
    if (one === this.min) this.min = Math.min(...this.stacks);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const len = this.stacks.length;
  if (len) return this.stacks[len - 1];
  return 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

module.exports = MinStack;