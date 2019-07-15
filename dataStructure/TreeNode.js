/**
 * @Author: zerlous
 * @Date: 2019-07-13
 * @Description:
 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.generateTree = function(arr) {
  var array = arr instanceof Array ? arr : [];
  var result;
  var stack = [];
  if (array.length == 0) return new TreeNode(null);
  array.forEach(function (value, index ) {
    if (index === 0) {
      result = new TreeNode(value);
      stack.push(result);
    } else {
      if ( stack[0].left && stack[0].right ) {
        stack.shift();
      }
      if (!stack[0].right && stack[0].left) {
        stack[0].right = new TreeNode(value);
        stack.push(stack[0].right);
      }
      if (!stack[0].left) {
        stack[0].left = new TreeNode(value);
        stack.push(stack[0].left);
      }
    }
  });
  return result;
};

module.exports = TreeNode;