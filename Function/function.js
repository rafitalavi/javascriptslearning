function myFunction(msg){
    console.log("my name is Alavi");
    console.log("I am learning  js");
    console.log(msg);

}
myFunction("jazin");
let a = 5;
let b = 6;
let sum= 0;
function add(a,b){
    sum = a+b;
    return sum;
};

console.log(add(a,b));
const muli = (c,d) =>{
 return c*d;
};
function countVowels(str) {
    let count = 0; // Declare count inside the function
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

// Print the result
const vowelCounter = (str) => {
    let count = 0; // Declare count inside the function
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
};

// //let str = prompt("Enter your word");
// str = str.toLowerCase(); // Convert the input string to lowercase
// //let vowelCount = vowelCounter(str); // Store the result in a variable
// console.log(vowelCount); // Print the result
let arr = [1,2,3,4,5]
arr.forEach((val,i,arr)=>{
    console.log(val*val,i,arr );
});
let newArr = arr.map((val)=>{
    return val+1;
});
console.log(newArr);
let evenArr = arr.filter((val)=>{
    return val%2===0;
}) ;
console.log(evenArr);
let output = arr.reduce((prev,curr)=>{
    return prev > curr ? prev:curr;
});
console.log(output);
let mark =[97,30,80,93,94,99,80]
let filMark = mark.filter((val)=>{
    return val>90;
}) ;
console.log(filMark);
let n = prompt("enter your number");
let arr1 =[];
for(let i=1;i<=n;i++){
    arr1[i-1]=i;
}
// let add1 = arr1.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(add1);
let fact = arr1.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(fact);



