const helper = require('../helper');
const {
  buildLinkedList,
} = helper;

module.exports = [
  {
    input: [buildLinkedList(1, 2, 3), buildLinkedList(6, 7, 8, 9)],
    output: [1,2,3,6,7,8,9]
  },
  {
    input: [buildLinkedList(3, 5, 8), buildLinkedList(1)],
    output: [1,3,5,8]
  },
  {
    input: [buildLinkedList(1,2,3), buildLinkedList(2)],
    output: [1,2,2,3]
  },
  {
    input: [buildLinkedList(1,2,4), buildLinkedList(1,3,4)],
    output: [1,1,2,3,4,4]
  }
];