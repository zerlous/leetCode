const { expect } = require('chai');
const { searchMatrix } = require('./searchA2dMatrix-ii.problem');
const cases = require('./searchA2dMatrix-ii.case');

describe('LeetCode0240 #searchA2dMatrix-ii', function () {
  describe('searchMatrix Version', function () {
    it('should return success', function () {
      expect(searchMatrix(...cases[0].input)).to.equal(cases[0].output);
      expect(searchMatrix(...cases[1].input)).to.equal(cases[1].output);
      expect(searchMatrix(...cases[2].input)).to.equal(cases[2].output);
      expect(searchMatrix(...cases[3].input)).to.equal(cases[3].output);
      expect(searchMatrix(...cases[4].input)).to.equal(cases[4].output);
    });
  });
});
