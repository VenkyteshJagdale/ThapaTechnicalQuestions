let arr = [1,1,3,4,4,5,6,6,5,4,7,7]

let output = (arr) => {
  let newArr = [...new Set(arr)]
  console.log(newArr)
}


console.log(output(arr))