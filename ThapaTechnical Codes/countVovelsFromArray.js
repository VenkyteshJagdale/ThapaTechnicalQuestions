// Count Vovels From ARRAY


let arr = ["apple","youur","fish","cat","mouse"]
let moreThanTwoVovels = (word) => {
vovels = ["a","e","o","u","i"]
count = 0;
for(let char of word){
if(vovels.includes(char)){
count ++;
}
}
return count >=2
}

const output = (arr) => {
 return arr.filter((word)=> moreThanTwoVovels(word))
}

console.log(output(arr))