//Convert Object Into Arrays.

let obj = {
  "name": "Venkytesh",
  "age":22,
  "state":"maharashtra"
}


//convert object into arrys
let entries = Object.entries(obj)
console.log(entries.flat())


// convert arrays into objecte
let newObje = Object.fromEntries(entries)
console.log("🚀 ~ entries:@@@@@@@@@", newObje)
