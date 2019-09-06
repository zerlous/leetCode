const helper = require('../helper');
const {
  buildLinkedList
} = helper;

module.exports = [
  {
    input: [ buildLinkedList(1,2,3,4,5)],
    output: false
  },
  {
    input: [ buildLinkedList(1,2,2,1)],
    output: true
  }
];