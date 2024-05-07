// Find MINIMUM MAXIMUM FROM ARRAY

// let arr = [1,2,4,3,6,4,2,2,3,4,1,2,11,22,5,33,66]
// let output = (arr) => {
// return arr.reduce((cur,pre)=>{
//   return pre < cur ? pre : cur;
// })
// }

// console.log(output(arr))


let arr = [1,2,4,3,6,4,2,2,3,4,1,2,11,22,5,33,66]
let minimumVale = Math.min(...arr)
console.log(minimumVale)