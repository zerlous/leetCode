/**
 * @Author: zerlous
 * @Date: 2018/10/16
 * @Description:
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = module.exports = function(s) {
    return rulerTake(s);
};

// 尺取法 best
function rulerTake(s) {
    var map = {};
    var left = 0;
    return s.split('').reduce(function(max, current, idx) {
        left = map[current] >= left ? map[current] + 1 : left;
        map[current] = idx;
        return Math.max(max, idx - left + 1);
    },0);
}

// 动态规划法 转成二维矩阵取最大值
// function bruteForce(s) {
//     if (s.length === 0 ) return 0;
//     var result = 1;
//     var i = 0;
//     var j;
//     for (j = ) {
//
//     }
// }