const helper = require('../helper');
const {
  buildTree,
} = helper;

module.exports = [
  {
    input:[null],
    output: 0
  },
  {
    input: [buildTree(1, 2, 3)],
    output: 2
  },
  {
    input: [buildTree(3,9,20,null,null,15,7)],
    output: 2
  },
  {
    input: [buildTree(1,2)],
    output: 2
  }
];