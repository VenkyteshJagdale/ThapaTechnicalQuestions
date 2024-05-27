// find array pairs 

// let arr = [10,8,9,9,12,6,16,2,1,2,4,1,2,4,2,3,15,17]
// let target = 18;
// let output = (arr,target) => {
// pair = []
// for(let i = 1 ;i <= arr.length;i++){
//   for(let j = i+1;j<=arr.length;j++){
//   if(arr[i]+arr[j]===target){
//     pair.push([arr[i],arr[j]])
//   }
//   }
// }
// return pair;
// }
// console.log(output(arr,target))





// let arr = [10,8,9,9,12,6,16,2,1,2,4,1,2,4,2,3,15,17]
// let target = 18
// let output = (arr,target) => {
// let pair =[];
// for(let i = 1; i <= arr.length; i++){
//   for(let j = i+1; j <= arr.length; j++){
//     if(arr[i]+arr[j]===target){
//       pair.push([arr[i],arr[j]])
//     }
//   }
// }
// return pair;
// }
// console.log(output(arr,target))





let arr = [10,8,9,9,12,6,16,2,1,2,4,1,2,4,2,3,15,17]
let target = 18;
let output = (arr,target) => {
  pairs = [];
  for(let i = 1;i<=arr.length;i++){
    for(let j = i+1;j<=arr.length;j++){
if(arr[i]+arr[j]===target){
pairs.push([arr[i],arr[j]])
}
    }
  }
  return pairs;
}
console.log(output(arr,target))










