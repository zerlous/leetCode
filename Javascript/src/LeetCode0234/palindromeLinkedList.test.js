const expect = require('chai').expect;
const {isPalindromeUsingStack, isPalindromeReverseList} = require('./palindromeLinkedList.problem');
const cases = require('./palindromeLinkedList.case');

describe('LeetCode0234 #palindromeLinkedList', function () {
  describe('isPalindromeUsingStack Version', function () {
    it('should return success', function () {
      expect(isPalindromeUsingStack(...cases[0].input)).to.equal(cases[0].output);
      expect(isPalindromeUsingStack(...cases[1].input)).to.equal(cases[1].output);
      expect(isPalindromeUsingStack(...cases[2].input)).to.equal(cases[1].output);
    });
  });
  describe('isPalindromeReverseList Version', function () {
    it('should return success', function () {
      expect(isPalindromeReverseList(...cases[0].input)).to.equal(cases[0].output);
      expect(isPalindromeReverseList(...cases[1].input)).to.equal(cases[1].output);
      expect(isPalindromeReverseList(...cases[2].input)).to.equal(cases[1].output);
    });
  });
});