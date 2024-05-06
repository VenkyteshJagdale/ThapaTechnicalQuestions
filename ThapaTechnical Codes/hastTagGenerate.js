// Create hashTag
// ex. "this is my string"
//outut:- #ThisIsMyString


// 1).
// let string =  "this is my string"
// let output = () =>{

// if(string.trim().length === 0){
//   return false
// }
// word = string.split(" ");
// word = word.map((str)=>{
//   return str.replace(str[0],str[0].toUpperCase());
// })
// word = `#${word.join("")}`
// return word
// }
// console.log(output(string))




let string = "my name is venkytesh jagdale"
let output = (string) =>{
if(string.trim().length === 0){
return false
}
word = string.split(" ")
word = word.map((str)=>{
return str.replace(str[0],str[0].toUpperCase())
})
word = `#${word.join("")}`
return word
}
console.log(output(string));