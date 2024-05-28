let output = (n) => {
  let fiboo = [0,1]
  for(let i=2;i<=n;i++){
   fiboo.push(fiboo[i-1] + fiboo[i-2])
  }
  return fiboo
}
console.log(output(5).join(" "))