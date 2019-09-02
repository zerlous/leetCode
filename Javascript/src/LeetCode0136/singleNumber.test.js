const { expect } = require('chai');
const { singleNumberWithSet, singleNumberWithXOR } = require('./singleNumber.problem');
const cases = require('./singleNumber.case');

describe('LeetCode0136 #singleNumber', function () {
  describe('singleNumberWithSet Version', function () {
    it('should return success', function () {
      expect(singleNumberWithSet(...cases[0].input)).to.equal(cases[0].output);
      expect(singleNumberWithSet(...cases[1].input)).to.equal(cases[1].output);
    });
  });

  describe('singleNumberWithXOR Version', function () {
    it('should return success', function () {
      expect(singleNumberWithXOR(...cases[0].input)).to.equal(cases[0].output);
      expect(singleNumberWithXOR(...cases[1].input)).to.equal(cases[1].output);
    });
  });
});