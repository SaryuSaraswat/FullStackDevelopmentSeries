//program to find largest from 3 numbers

let a = 45;
let b = 32;
let c = 78;

if(a < b ){
    if(b < c){
        console.log(c);
    }else{
        console.log(b);
    }
}else {
    if(a < c){
        console.log(c);
    }else{
        console.log(a);
    }
}