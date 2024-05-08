// // Check given string start with sub string or not

// let output = (string,word) => {
// return string.toLowerCase().startsWith(word.toLowerCase())
// }

// console.log(output("This is mango","this"))

let string = "This Is The Array"
let word = "thiss"
let output = (string,word) => {
return string.toLowerCase().startsWith(word.toLowerCase());
}

console.log(output(string,word))