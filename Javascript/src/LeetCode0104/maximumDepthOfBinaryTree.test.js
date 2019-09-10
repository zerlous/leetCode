const { expect } = require('chai');
const { maxDepthBFS, maxDepthDFS } = require('./maximumDepthOfBinaryTree.problem');
const cases = require('./maximumDepthOfBinaryTree.case');
describe('LeetCode0104 #maximumDepthOfBinaryTree', function() {
  describe('maxDepthBFS Version', function () {
    it('should return success', function () {
      expect(maxDepthBFS(...cases[0].input)).equal(cases[0].output);
      expect(maxDepthBFS(...cases[1].input)).equal(cases[1].output);
      expect(maxDepthBFS(...cases[2].input)).equal(cases[2].output);
      expect(maxDepthBFS(...cases[3].input)).equal(cases[3].output);
    });
  });

  describe('maxDepthDFS Version', function () {
    it('should return success', function () {
      expect(maxDepthDFS(...cases[0].input)).equal(cases[0].output);
      expect(maxDepthDFS(...cases[1].input)).equal(cases[1].output);
      expect(maxDepthDFS(...cases[2].input)).equal(cases[2].output);
      expect(maxDepthDFS(...cases[3].input)).equal(cases[3].output);
    });
  });
});