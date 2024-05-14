// Convert Currency
const rates = {
  USD:1,
  EUR:0.9,
  GBP:0.8,
  INR:82
}

const convertCurrency = (ammount,fc,tc) => {
let ammountInUsd = 0;
if(fc !== "USD"){
ammountInUsd = ammount/rates[fc]
} else {
  ammountInUsd = ammount
}

let convertedAmount = 0;
if(tc !== "USD"){
convertedAmount=ammountInUsd * rates[tc]
} else {
  convertedAmount = ammountInUsd
}
return convertedAmount
}

console.log(convertCurrency(100,"INR","EUR"))