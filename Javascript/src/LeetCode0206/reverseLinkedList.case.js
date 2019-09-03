const helper = require('../helper');
const {
  buildLinkedList
} = helper;

module.exports = [
  {
    input: [ buildLinkedList(1,2,3,4,5)],
    output: [5,4,3,2,1]
  },
];