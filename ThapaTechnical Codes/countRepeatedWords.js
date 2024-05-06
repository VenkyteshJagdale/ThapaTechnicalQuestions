// missicippi   find i how mich time come

// let output = (word,char)=>{
// word = word.toLowerCase();
// char = char.toLowerCase();
// finalCount = word.split("").reduce((accu,currunt)=>{
//   if(currunt === char){
//     accu++
//   }
//   return accu
// },0)
// console.log(finalCount)
// }

// console.log(output("thhhihhhohhh","H"))





let output= (word,char)=>{
  words = word.toLowerCase();
  char = char.toLowerCase();
final = words.split("").reduce((accum,currunt)=>{
  if(currunt === char){
    accum++
  }
  return accum
},0)
console.log(final)
}
console.log(output("Mississippi","S"))