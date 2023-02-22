let arr1 = [1]
arr1.push(2,3,4)
console.log(arr1) //  [1,2,3,4]

arr1.pop()
console.log(arr1) // [1,2,3]

arr1.unshift('a', 'b')
console.log(arr1) // ['a','b',1,2,3]

arr1.shift()
console.log(arr1) // ['b',1,2,3]
