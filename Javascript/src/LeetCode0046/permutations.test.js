const { expect } = require('chai');
const { permute } = require('./permutations.problem');
const cases = require('./permutations.case');

describe('LeetCode0046 #permutations', function () {
  describe('permute Version', function () {
    it('should return success', function () {
      expect(permute(...cases[0].input)).to.have.deep.members(cases[0].output);
      expect(permute(...cases[1].input)).to.have.deep.members(cases[1].output);
      expect(permute(...cases[2].input)).to.have.deep.members(cases[2].output);
      expect(permute(...cases[3].input)).to.have.deep.members(cases[3].output);
    });
  });
});