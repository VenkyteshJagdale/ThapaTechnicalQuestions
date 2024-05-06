const { Console } = require("winston/lib/winston/transports");

let string = "This Is The Tune Fish"
let final = findVovels(string)
console.log(final)
function findVovels(){
  let str = string.toLocaleLowerCase();
  let vovels = ["a","e","o","i","u"];
  let count=0;
for(let char of str){
if(vovels.includes(char)){
console.log(">>>>>>>>.",char)
count++;
}
}
return count;
}