let arrList = [1,2,3,4,5]
let largeValue = (arr)=>{
firstLarge = Math.max(...arr)
index = arr.indexOf(firstLarge);
arr.splice(index,1)
secoundLarge = Math.max(...arr)
return secoundLarge;
}  
console.log(largeValue(arrList))