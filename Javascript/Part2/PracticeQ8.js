//to check last digit is same or not

let a = 32;
let b = 47853;

let modA = a % 10;
let modB = b % 10;

if(modA == modB){
    console.log("same");
}else{
    console.log("different");
}