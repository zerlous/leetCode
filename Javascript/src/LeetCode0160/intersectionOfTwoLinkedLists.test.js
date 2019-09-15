const { expect } = require('chai');
const { getIntersectionNodeWithoutLen, getIntersectionNodeWithLen }  = require('./intersectionOfTwoLinkedLists.problem');
const cases = require('./intersectionOfTwoLinkedLists.case');

describe('LeetCode0160 #intersectionOfTwoLinkedLists', function () {
  describe('getIntersectionNodeWithoutLen Version', function () {
    it('should return success', function () {
      expect(getIntersectionNodeWithoutLen(...cases[0].input).val).to.equal(cases[0].output);
    });
  });

  describe('getIntersectionNodeWithLen Version', function () {
    it('should return success', function () {
      expect(getIntersectionNodeWithLen(...cases[0].input).val).to.equal(cases[0].output);
    });
  });
});