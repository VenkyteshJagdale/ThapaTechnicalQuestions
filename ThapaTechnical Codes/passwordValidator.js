//Simple Password validator
// using ascci  value

let password = "Absdffscd1"
let output = (pwd) => {
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumber = false;

for(let char of pwd){
if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
hasLowerCase = true
} else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
hasUpperCase = true
}else if(!isNaN(Number(char))){
hasNumber = true
}
}

if(!hasLowerCase || !hasUpperCase || !hasNumber || pwd.length < 8){
return false
}

return true
}


console.log(output(password))