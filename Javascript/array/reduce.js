/**
 * grammar: reduce(function(precoiusValue, currentValue, array, index ){}, initailValue)
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr.reduce((pre, cur) => {
    return pre + cur
}, 0)
console.log(sum) // 55
let sum1 = arr.reduce((pre, cur) => pre + cur)
console.log(sum1) // 55


const arr1 = [{ label: '苹果', value: '1' }, { label: '香蕉', value: '2' }]
let obj = arr1.reduce((pre, cur) => {
    pre[cur.value] = cur.label
    return pre
}, {})
console.log(obj) // { '1': '苹果', '2': '香蕉' }


let sunRight = arr.reduceRight((pre,cur)=>{
    console.log(cur)
    return pre+cur
})
console.log(sunRight) // 55
