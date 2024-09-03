let str = "hello";
let strReversa = "";

for (let i = str.length - 1; i >= 0; i--) {
  strReversa += str[i];
}

console.log(strReversa);