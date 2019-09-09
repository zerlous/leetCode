/*
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
const {expect} = require('chai');
const MinStack = require('./minStack.problem');

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
describe('LeetCode0155 #minStack', function () {
  it('should return -3', function () {
    expect(stack.getMin()).to.equal(-3);
  });
  it('should return 0', function () {
    stack.pop();
    expect(stack.top()).to.equal(0);
  });
  it('should return -2', function () {
    expect(stack.getMin()).to.equal(-2);
  })
});
