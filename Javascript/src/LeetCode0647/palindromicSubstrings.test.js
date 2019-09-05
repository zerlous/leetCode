const { expect } = require('chai');
const { countPalindromicSubstringsEV, countPalindromicSubstringsDP, countPalindromicSubstringsExpand } = require('./palindromicSubstrings.problem');
const cases = require('./palindromicSubstrings.case');

describe('LeetCode0647 #palindromicSubstrings', function () {
  describe('countPalindromicSubstringsEV Version', function () {
    it('should return success', function () {
      expect(countPalindromicSubstringsEV(...cases[0].input)).to.equal(cases[0].output);
      expect(countPalindromicSubstringsEV(...cases[1].input)).to.equal(cases[1].output);
      expect(countPalindromicSubstringsEV(...cases[2].input)).to.equal(cases[2].output);
    });
  });

  describe('countPalindromicSubstringsDP Version', function () {
    it('should return success', function () {
      expect(countPalindromicSubstringsDP(...cases[0].input)).to.equal(cases[0].output);
      expect(countPalindromicSubstringsDP(...cases[1].input)).to.equal(cases[1].output);
      expect(countPalindromicSubstringsDP(...cases[2].input)).to.equal(cases[2].output);
    });
  });

  describe('countPalindromicSubstringsExpand Version', function () {
    it('should return success', function () {
      expect(countPalindromicSubstringsExpand(...cases[0].input)).to.equal(cases[0].output);
      expect(countPalindromicSubstringsExpand(...cases[1].input)).to.equal(cases[1].output);
      expect(countPalindromicSubstringsExpand(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});