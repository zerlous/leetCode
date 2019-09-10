const { expect } = require('chai');
const {
  getMajority,
  getMajorityWithHashMap
}  = require('./majorityElement.problem');
const cases = require('./majorityElement.case');

describe('LeetCode0169 #majorityElement', function () {
  describe('getMajority Version', function () {
    it('should return success', function () {
      expect(getMajority(...cases[0].input)).to.deep.equal(cases[0].output);
      expect(getMajority(...cases[1].input)).to.deep.equal(cases[1].output);
      expect(getMajority(...cases[2].input)).to.deep.equal(cases[2].output);
    });
  });

  describe('getMajorityWithHashMap Version', function () {
    it('should return success', function () {
      expect(getMajorityWithHashMap(...cases[0].input)).to.deep.equal(cases[0].output);
      expect(getMajorityWithHashMap(...cases[1].input)).to.deep.equal(cases[1].output);
      expect(getMajorityWithHashMap(...cases[2].input)).to.deep.equal(cases[2].output);
    });
  });
});