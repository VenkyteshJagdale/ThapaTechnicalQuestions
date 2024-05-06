let a = [1,2,3,4,5]
let b = [6,7,8,9,10]
let c = [...a,...b]
c.sort((a,b)=>{
  return a-b
})

console.log(c)