// function hasTwoOrMoreVowels(word) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelCount = 0;
  
//   for (let char of word) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }
  
//   return vowelCount >= 2;
// }

// function wordsWithTwoOrMoreVowels(words) {
//  return words.filter(word => hasTwoOrMoreVowels(word));
// }

// const words = ["dog", "cat", "mouse", "sky", "eleven"];
// console.log(wordsWithTwoOrMoreVowels(words));



const words = ["dog", "cat", "mouse", "sky", "eleven"];
console.log(twoOrMoreVovelsIncude(words))


function twoOrMoreVovelsIncude(word){
return word.filter(word=> toWords(word))
}

function toWords(word){
let vovels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let str of word){
if(vovels.includes(str)){
count ++;
}
}
return count>=2;
}