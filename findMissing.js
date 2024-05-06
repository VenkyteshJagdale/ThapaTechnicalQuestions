const a = [1,2,5,6,7,10]
let missingList = [];
let missing = (a)=>{
  minNumber = Math.min(...a);
  maxNumber = Math.max(...a);
  for(let i=minNumber;i<=maxNumber;i++){
if(a.indexOf(i)<0){
  missingList.push(i)
}
  }
  return missingList;
}
console.log(missing(a))