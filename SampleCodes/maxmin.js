let a=[1,2,3,4,5,6]
let max = (a)=>{
  return a.reduce((pre,cur)=>{
   // return pre < cur ? pre : cur;
   return pre + cur
  })
}
console.log(max(a))