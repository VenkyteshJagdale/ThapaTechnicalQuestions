// Find missing Number From Array,

let arr = [1,2,3,8,10]
let output = (arr) => {
  let missingEle = [];
  maxNumber = Math.max(...arr);
  minNumber = Math.min(...arr);
  for(let i = minNumber; i<= maxNumber; i++){
   if(arr.indexOf(i)<0){
   missingEle.push(i)
   }
  }
  return missingEle;
}

console.log(output(arr))
