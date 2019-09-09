const { expect } = require('chai');
const { missingNumberSum,  missingNumberXOR } = require('./missingNumber.problem');
const cases = require('./missingNumber.case');

describe('LeetCode0258 #missingNumber', function () {
  describe('missingNumberSum Version', function () {
    it('should return success', function () {
      expect(missingNumberSum(...cases[0].input)).to.equal(cases[0].output);
      expect(missingNumberSum(...cases[1].input)).to.equal(cases[1].output);
      expect(missingNumberSum(...cases[2].input)).to.equal(cases[2].output);
    });
  });

  describe('missingNumberXOR Version', function () {
    it('should return success', function () {
      expect(missingNumberXOR(...cases[0].input)).to.equal(cases[0].output);
      expect(missingNumberXOR(...cases[1].input)).to.equal(cases[1].output);
      expect(missingNumberXOR(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});
