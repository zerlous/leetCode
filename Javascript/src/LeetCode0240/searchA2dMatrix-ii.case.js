module.exports = [
  {
    input: [null,1],
    output: false
  },
  {
    input: [[],1],
    output: false
  },
  {
    input: [[[1]],1],
    output: true
  },
  {
    input: [[[1,3,5],[2,4,6],[3,7,8]], 8],
    output: true
  },
  {
    input: [[[1,3,5],[2,4,6],[3,7,8]], 9],
    output: false
  }
];