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