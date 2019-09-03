const helper = require('../helper');
const {
  buildTree,
} = helper;

module.exports = [
  {
    input:[null, null],
    output: true
  },
  {
    input: [buildTree(1, 2, 3), buildTree(1, 2, 3)],
    output: true
  },
  {
    input: [buildTree(1,2,null), buildTree(1,null,2)],
    output: false
  },
  {
    input: [buildTree(1,2,1), buildTree(1,1,2)],
    output: false
  }
];