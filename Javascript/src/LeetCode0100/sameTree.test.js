const { expect } = require('chai');
const { isSameTreeRecursive, isSameTreeIterative } = require('./sameTree.problem');
const cases = require('./sameTree.case');

describe('LeetCode0100 #sameTree', function () {
  describe('isSameTreeRecursive Version', function () {
    it('should return success', function () {
      expect(isSameTreeRecursive(...cases[0].input)).to.equal(cases[0].output);
      expect(isSameTreeRecursive(...cases[1].input)).to.equal(cases[1].output);
      expect(isSameTreeRecursive(...cases[2].input)).to.equal(cases[2].output);
    });
  });

  describe('isSameTreeIterative Version', function () {
    it('should return success', function () {
      expect(isSameTreeIterative(...cases[0].input)).to.equal(cases[0].output);
      expect(isSameTreeIterative(...cases[1].input)).to.equal(cases[1].output);
      expect(isSameTreeIterative(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});