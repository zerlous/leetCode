const { expect } = require('chai');
const { generateParentheses, generateParenthesesDP } = require('./generateParentheses.problem');
const cases = require('./generateParentheses.case');

describe('LeetCode0022 #generateParentheses', function () {
  describe('generateParentheses Version', function () {
    it('should return success', function () {
      expect(generateParentheses(...cases[0].input)).to.have.deep.members(cases[0].output);
      expect(generateParentheses(...cases[1].input)).to.have.deep.members(cases[1].output);
      expect(generateParentheses(...cases[2].input)).to.have.deep.members(cases[2].output);
    });
  });

  // describe('generateParenthesesDP Version', function () {
  //   it('should return success', function () {
  //     expect(generateParenthesesDP(...cases[0].input)).to.have.deep.members(cases[0].output);
  //     expect(generateParenthesesDP(...cases[1].input)).to.have.deep.members(cases[1].output);
  //     expect(generateParenthesesDP(...cases[2].input)).to.have.deep.members(cases[2].output);
  //   });
  // });

});