let arr = [23,11,12,14,15,15]
let output = (arr) => {
  let total = arr.reduce((cur,pre)=> cur+pre)
console.log(total)
return total/arr.length
}

console.log(output(arr))