//  Truncate string 

let string = "this is the trunkated strings"
let count = 10
let output = (string,count) => {
return count <= 0 ? string : string.slice(0, count).concat("...")

}
console.log(output(string,count))