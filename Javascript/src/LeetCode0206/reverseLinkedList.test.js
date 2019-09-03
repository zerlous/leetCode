const expect = require('chai').expect;
const { reverseList } = require('./reverseLinkedList.problem');
const cases = require('./reverseLinkedList.case');
const helper = require('../helper');
const {
  linkedList2Array,
} = helper;

describe('LeetCode0206 #reverseLinkedList', function() {
  it('should return reverseList2Array is same', function() {
    expect(linkedList2Array(reverseList(...cases[0].input))).deep.equal(cases[0].output);
  });
});