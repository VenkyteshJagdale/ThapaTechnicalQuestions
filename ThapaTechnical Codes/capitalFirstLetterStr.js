// Captial First Letter of string 

let string = "this is the apple fruit"
let output = (string) => {
str = string.split(" ")
str = str.map((str)=>{
  return str.replace(str[0],str[0].toUpperCase())
})
return str.join("_")//onsole.log(str)
}
console.log(output(string))




<<<<<<< HEAD
// let string = "this is the apple fruit"
// let output = (str) => {
// str = str.split(" ");
// console.log("🚀 ~ output ~ srt:", str)
// str = str.map((str)=> {
//   return str.replace(string[0],str[0].toUpperCase())
// })
// return str.join(" ")
// }
// console.log(output(string))











=======
let string = "this is the apple fruit"
let output = (string) => {
str = string.split(" ")
str = str.map((str)=>{
  return str.replace(str[0],str[0].toUpperCase())
})
return str.join(" ")//onsole.log(str)
}
console.log(output(string))
>>>>>>> 98c7ba76ff7b351ca5051ad95b17ff884f630157
