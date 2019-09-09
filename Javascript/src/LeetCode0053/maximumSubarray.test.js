const { expect } = require('chai');
const { maxSubArray } = require('./maximumSubarray.problem');
const cases = require('./maximumSubarray.case');

describe('LeetCode0053 #maximumSubarray', function () {
  describe('maxSubArray Version', function () {
    it('should return success', function () {
      expect(maxSubArray(...cases[0].input)).to.equal(cases[0].output);
      expect(maxSubArray(...cases[1].input)).to.equal(cases[1].output);
      expect(maxSubArray(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});