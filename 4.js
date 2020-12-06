let a = 4;
let b = 100000;
let r = 3;
let jumlah = 0;

for (let x = a; x <= b; x = x * r){
  console.log(x)
  jumlah += x;
}

console.log("Jumlah deret = " + jumlah);