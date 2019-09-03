const { expect } = require('chai');
const {   powSimple, powFast } = require('./powx-n.problem');
const cases = require('./powx-n.case');

describe('LeetCode0050 #regularExpressionMatching', function () {
  describe('powSimple Version', function () {
    it('should return success', function () {
      expect(powSimple(...cases[0].input)).to.equal(cases[0].output);
      expect(powSimple(...cases[1].input)).to.equal(cases[1].output);
      expect(powSimple(...cases[2].input)).to.equal(cases[2].output);
    });
  });

  describe('powFast Version', function () {
    it('should return success', function () {
      expect(powFast(...cases[0].input)).to.equal(cases[0].output);
      expect(powFast(...cases[1].input)).to.equal(cases[1].output);
      expect(powFast(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});