let output = (n) => {
  if(n <= 1){
    return 1;
  }
  return n * output(n-1)
}
console.log(output(5))

