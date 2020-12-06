let l = 20.5;
let p = 30;
let L = p * l;

let harga = 1500000;
let ppn = 0.15;

let hasil = L * harga;
let pajak = hasil * ppn ;
let total = hasil + pajak ;

console.log('Nominal harga yang harus dibayar =' + ' ' + total);