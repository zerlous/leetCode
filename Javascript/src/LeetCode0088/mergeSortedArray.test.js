const { expect } = require('chai');
const { merge } = require('./mergeSortedArray.problem');
const cases = require('./mergeSortedArray.case');

describe('LeetCode0088 #mergeSortedArray', function () {
  describe('merge Version', function () {
    it('should return success', function () {
      expect(merge(...cases[0].input)).to.have.deep.members(cases[0].output);
      expect(merge(...cases[1].input)).to.have.deep.members(cases[1].output);
      expect(merge(...cases[2].input)).to.have.deep.members(cases[2].output);
      expect(merge(...cases[3].input)).to.have.deep.members(cases[3].output);
    });
  });
});