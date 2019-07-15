/**
 * @Author: zerlous
 * @Date: 2019-07-13
 * @Description: 测试用例
 */

var TreeNode = require('../../dataStructure/TreeNode');

module.exports = [
  {
    input: [TreeNode.generateTree([1,2,2,3,4,4,3])],
    output: true
  },
  {
    input: [TreeNode.generateTree([1,2,2,null,3,null,3])],
    output: false
  },
];