// count 



// let arr = [1,2,3,4,5,1,2,2,3]

// count = {}
// for(let elements of arr){
// count[elements] = (count[elements] || 0) + 1;
// }
// console.log(count)






let arr = [1,2,3,4,5,1,2,2,3]
count = {}

for(let num of arr){
count[num] = (count[num]||0) + 1;
}
console.log(count)

