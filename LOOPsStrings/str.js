let str = "Rafit Alavi";
 console.log(str.length);
 console.log(str[7]);//printig the specific position
 //special string
 let name = `     mec alavi`
 console.log(name)
 let obj = {
   item : "Pen",
   price :10,
 };
 // teplates literals string inter pulations
 let output = ` the price of ${obj.item} is ${obj.price} taka`; 
 console.log(output);
 name = name.toUpperCase()
 str = name.trim()
 console.log(str)
 str = str.slice(1,4);
 console.log(str)
 res = str.concat(obj.item);
 console.log(res)
 console.log(name.replace("M","b"));
let fullName = prompt("enter your full name");
let userName ="@"+ fullName + fullName.length;
console.log(userName);
