const expect = require('chai').expect;
const { isPalindromeUsingStack } = require('./palindromeLinkedList.problem');
const cases = require('./palindromeLinkedList.case');

describe('LeetCode0234 #reverseLinkedList', function() {
  it('should return success', function() {
    expect(isPalindromeUsingStack(...cases[0].input)).to.equal(cases[0].output);
    expect(isPalindromeUsingStack(...cases[1].input)).to.equal(cases[1].output);
  });
});