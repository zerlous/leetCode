/**
 * @Author: zerlous
 * @Date: 2018/10/18
 * @Description:
 */

module.exports = [
    {
        input:['aa','a'],
        output:false
    },
    {
        input:['aa','a*'],
        output:true
    },
    {
        input:['ab','.*'],
        output:true
    },
    {
        input:['aab','c*a*b'],
        output:true
    },
    {
        input:['mississippi','mis*is*p*.'],
        output:false
    },
    {
        input:['assssdqfffz','qqqas*d.f*z'],
        output:false
    },
    {
        input:['assssdqfffz','as*d.f*z'],
        output:true
    }
];