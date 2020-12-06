let TB = 1.70;
let BB = 90;

let BMI = BB/(TB * TB);

console.log(BMI);;
if(BMI < 18.5){
    console.log("Kekurangan berat badan");
}else if (BMI >= 18.5, BMI <= 24.9){
    console.log("Normal(Ideal)");
}else if (BMI >= 25.0, BMI <= 29.0){
    console.log("Kelebihan berat badan");
}else{
    console.log("Kegemukan(Obesitas)");
}