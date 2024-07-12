//conditions
let age =18;
if (age >= 18){
    console.log("you can buy")
}
let color
let mode = "dark";
if (mode === "dark"){
    color = " black";
}
else{
    color = "white";
}
let num
let x = 4;
let y = 5;
if (x%2==0){
   num="even";
}
else{
    num= "odd";
}
console.log(num)

//ternary operator condition ? true : false;
result = age >= 18 ? "Adult":"Not Adult";
console.log(result)
//d=prompt("Enter Your number");
// if (d%5===0) {
//     console.log(d,"is muliple of 5 ");

    
// }else{
//     console.log(d ,"is not multuiple of 5");
// }
score = prompt("enter the mark")
if (score >=90 && score <= 100){
    console.log("congatulations ! You hve got A")
}
else if (score >=70 && score <= 89){
    console.log("congatulations ! You hve got B")
}
else if (score >=60 && score <= 69){
    console.log("congatulations ! You hve got C")
}
else if (score >=50 && score <= 59){
    console.log("congatulations ! You hve got D")
}
else{
    console.log("Sorry , You failed")
}
