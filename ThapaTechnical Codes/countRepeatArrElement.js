// this for the how much repeted elements are avaiable in array 
// let arr = [1,2,3,4,5,1,2,2,3]

// count = {}
// for(let elements of arr){
// count[elements] = (count[elements] || 0) + 1;
// }
// console.log(count)





// //this is for only return one paticular elementts from array
// let arr = [1,2,3,4,5,1,2,2,3]
// let count = {}
// let maxNumber = 0;
// let mode;
// for(let num of arr){
// count[num] = (count[num]||0) + 1;
// if(count[num]>maxNumber){
// maxNumber = count[num];
// mode = num
// console.log("🚀 ~ mode:", mode)
// }
// }
// console.log(count)
// return mode


let arr = [1,2,3,4,5,1,2,2,3]
let output = (arr) => {
  let count = {}
   for(let num of arr){
    count[num]= (count[num] || 0) + 1;
   }
   
   //console.log(count)
   return count
}


console.log(output(arr))