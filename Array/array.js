let mark = [10 , 20 ,30,50 ,40];
// console.log(marks);
// console.log(marks[5]);
// marks[1]=100;
console.log(mark);
let nameList = ["jahin","jihan","jidan","alavi","shohan"];
for(i=0; i<nameList.length;i++ ){
    console.log(nameList[i]);
};
for( let el of nameList){
   console.log(el.toUpperCase())
};
let sum = 0 ;
for( let val of mark){
    sum += val;
}
result = `your Avarege mark is ${sum/mark.length}`;
console.log(result)
let price = [250,645,300,900,50];
let j =0;
for (let ele of price){
   offer = ele/10;
   price[j]=price[j]-offer;
   console.log(`offer price = ${price[j]}`);
j++;
};
console.log(price)
for (j =0; j<price.length; j++){
    offer = price[j]/10;
    price[j]=price[j]-offer;
    console.log(`offer price = ${price[j]}`);
}
let foodItems = ["apple", "litchi","mango","jango"];
foodItems.push("Grape","Chips");
console.log(foodItems);
let deleteItem = foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);
let com = foodItems.concat(nameList);
console.log(com);
com.unshift("my food");
console.log(com);
com.shift();
console.log(com);
console.log(com.slice(2,4));
mark.splice(2,2,100,300);
console.log(mark);
mark.splice(2,0,1100,2300);
console.log(mark);
mark.splice(4);
console.log(mark);
//practise
let company = ["bloomberg","Microsoft","Uber","google", "Ibm"];
company.shift();
console.log(company);
company.splice(1,1,"Ola");
console.log(company);
company.push("Amazon");
console.log(company);