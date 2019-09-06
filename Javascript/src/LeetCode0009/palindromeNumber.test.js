const { expect } = require('chai');
const { isPalindromeString, isPalindrome } = require('./palindromeNumber.problem');
const cases = require('./palindromeNumber.case');

describe('LeetCode0009 #palindromeNumber', function () {
  describe('isPalindromeString Version', function () {
    it('should return success', function () {
      expect(isPalindromeString(...cases[0].input)).to.equal(cases[0].output);
      expect(isPalindromeString(...cases[1].input)).to.equal(cases[1].output);
      expect(isPalindromeString(...cases[2].input)).to.equal(cases[2].output);
    });
  });

  describe('isPalindrome Version', function () {
    it('should return success', function () {
      expect(isPalindrome(...cases[0].input)).to.equal(cases[0].output);
      expect(isPalindrome(...cases[1].input)).to.equal(cases[1].output);
      expect(isPalindrome(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});