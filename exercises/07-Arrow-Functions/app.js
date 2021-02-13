const rapid = (x)=>{
x = x.toLowerCase()
let newStr = ''
for (i=0; i<x.length;i++){
if (x[i] !== 'a' && x[i] !== 'e' && x[i] !== 'i' && x[i] !== 'o' && x[i] !== 'u'){
newStr += x[i].toUpperCase()
}
}
return newStr
}

// From this line up Do not change code below
let str = "John";

console.log(rapid(str));

