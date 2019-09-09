const { expect } = require('chai');
const { mergeTwoLists } = require('./mergeTwoSortedLists.problem');
const cases = require('./mergeTwoSortedLists.case');
const { linkedList2Array } = require('../helper');

describe('LeetCode0021 #mergeTwoSortedLists', function () {
  describe('mergeTwoLists Version', function () {
    it('should return success', function () {
      expect(linkedList2Array(mergeTwoLists(...cases[0].input))).to.have.deep.members(cases[0].output);
      expect(linkedList2Array(mergeTwoLists(...cases[1].input))).to.have.deep.members(cases[1].output);
      expect(linkedList2Array(mergeTwoLists(...cases[2].input))).to.have.deep.members(cases[2].output);
      expect(linkedList2Array(mergeTwoLists(...cases[3].input))).to.have.deep.members(cases[3].output);
    });
  });
});