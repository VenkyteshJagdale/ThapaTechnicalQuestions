// //FiND SECOUND HIGH FROM ARRRAY

let arr = [1,2,4,33,12,14,441,43,331]
let output = (arr)=>{
firtMaxNumber = Math.max(...arr)
index = arr.indexOf(firtMaxNumber)
arr.splice(index,1)
secoundMaxNumber = Math.max(...arr)
return secoundMaxNumber
}

console.log(output(arr))

// let arrList = [1,2,3,4,5]
// let largeValue = (arr)=>{
// firstLarge = Math.max(...arr)
// index = arr.indexOf(firstLarge);
// arr.splice(index,1)
// secoundLarge = Math.max(...arr)
// return secoundLarge;
// }  
// console.log(largeValue(arrList))