const { expect } = require('chai');
const {  getSumRecursive, getSumIterative } = require('./sumOfTwoIntegers.problem');
const cases = require('./sumOfTwoIntegers.case');

describe('LeetCode0371 #sumOfTwoIntegers', function () {
  describe('getSumRecursive Version', function () {
    it('should return success', function () {
      expect(getSumRecursive(...cases[0].input)).to.equal(cases[0].output);
      expect(getSumRecursive(...cases[1].input)).to.equal(cases[1].output);
    });
  });

  describe('getSumIterative Version', function () {
    it('should return success', function () {
      expect(getSumIterative(...cases[0].input)).to.equal(cases[0].output);
      expect(getSumIterative(...cases[1].input)).to.equal(cases[1].output);
    });
  });
});