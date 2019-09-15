const helper = require('../helper');
const {
  buildLinkedList
} = helper;

const p = buildLinkedList(5,0,1,8,4,5);
module.exports = [
  {
    input: [ p, p.next ],
    output: 0
  }
];