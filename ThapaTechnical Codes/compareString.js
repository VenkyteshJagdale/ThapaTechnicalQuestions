// find logenst word from string

//1).
// let string = "This is javascript code by thapathechical and javascriptCommunity"
// let output=(string) =>{
// word = string.split(" ")
// word = word.sort((a,b)=> b.length-a.length)
// return word[0]
// }

// console.log(output(string))


// 2).
// let string = "This is javascript code by thapathechical and javascriptCommunity"
// let output = (string)=>{
//   word = string.split(" ")
//   word = word.sort((a,b)=> a.length - b.length)
//   console.log("largest word from string",word)
//   return word.at(-1)
// }
// console.log(output(string))


//3).
// let string = "This is javascript code by thapathechical and javascriptCommunity"
// let output = (string)=>{
//   word = string.split(" ");
//   return word.reduce((accu,curunt)=> accu.length > curunt.length ? accu : curunt)
// }

// console.log(output(string))




let string = "This is javascript code by thapathechical and javascriptCommunity"

let output = (string) => {
str = string.split(" ")
str = str.sort((a,b)=> a.length - b.length)
console.log("🚀 ~ output ~ str:", str)
return str.at(-1)
}



console.log(output(string))











