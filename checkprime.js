
let gg= 12;

let count=0;

for(let i=1; i<=gg; i++){
    if(gg%i==0){
        count++
    }

}

if (count == 2){
    console.log("Yes, It is a prime number")
}
else{
    console.log("No, It is not a prime number")
}