let number = 12345;

let output = (num) =>{
  num = Array.from(String(num),Number)
  console.log(num)
  return num.reduce((accu,currunt)=> accu + currunt)
}

console.log(output(number))