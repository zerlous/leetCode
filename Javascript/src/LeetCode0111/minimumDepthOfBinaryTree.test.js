const { expect } = require('chai');
const { minDepthBFS, minDepthRecursive } = require('./minimumDepthOfBinaryTree.problem');
const cases = require('./minimumDepthOfBinaryTree.case');

describe('LeetCode0111 #minimumDepthOfBinaryTree', function () {
  describe('minDepthBFS Version', function () {
    it('should return success', function () {
      expect(minDepthBFS(...cases[0].input)).to.equal(cases[0].output);
      expect(minDepthBFS(...cases[1].input)).to.equal(cases[1].output);
      expect(minDepthBFS(...cases[2].input)).to.equal(cases[2].output);
      expect(minDepthBFS(...cases[3].input)).to.equal(cases[3].output);
    });
  });

  describe('minDepthRecursive(DFS) Version', function () {
    it('should return success', function () {
      expect(minDepthRecursive(...cases[0].input)).to.equal(cases[0].output);
      expect(minDepthRecursive(...cases[1].input)).to.equal(cases[1].output);
      expect(minDepthRecursive(...cases[2].input)).to.equal(cases[2].output);
      expect(minDepthRecursive(...cases[3].input)).to.equal(cases[3].output);
    });
  });
});