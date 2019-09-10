const helper  = require('../helper');
const {
  buildTree
} = helper;

module.exports = [
  {
    input: [buildTree(3,9,20,null,null,15,7)],
    output: 3
  },
  {
    input: [buildTree(null)],
    output: 0
  },
  {
    input: [buildTree(1,null,2,null,4,null,8,null,16)],
    output: 5
  },
  {
    input: [buildTree(1,2,3,4)],
    output: 3
  }
];