//Count The Total Numbers Of Vovels From String

let string = "This is the fish you a "
let output = (string) =>{
  string = string.toLowerCase()
  vovels = ['a',"e","o","u","i"]
  count = 0
  for(let char of string){
    if(vovels.includes(char)){
      console.log("vovels are :-",char)
      count++;
    }
  }
  return count
}

console.log(output(string))