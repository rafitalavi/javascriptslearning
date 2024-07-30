const student={
fullName :"alavi",
marks : 94.4,
printMarks : function(){
    console.log("mark =", this.marks);
},
};
const employee ={
    calcTax(){
        console.log("Tax increases 10%");
    }
};
const rafitAlavi ={
salary:10000,
calcTax(){
    console.log("Tax increases 20%");
},
};
 rafitAlavi.__proto__=employee;
 class toyotaCar {
    constructor(brand,milege){
        console.log("creating new object");
        
            this.brandName = brand;
            this.milege = milege;
        
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stap");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }

 }
 const corollaCar = new toyotaCar();
 console.log(corollaCar)
 const premioCar = new toyotaCar("premio",10);
 console.log(premioCar);
//  premioCar.setBrand();
class parent {
    
    hel () {
        console.log('august hello');
    }
};
// class child extends parent{

// }
// let obj = new child();
class Person  {
    constructor(name){
        this.name = name;
        this.species = "homo sapience";
        console.log("home spience");
    }
    eat (){
        console.log("Eat");
    };
    sleep(){
        console.log("sleep")
    };
    work(){
        console.log("do nothing")
    }
}
class Engineer extends Person {
    constructor(name ,branch){
        console.log("enter child");
        super(name);
        this.branch =branch;
        console.log("exit child");

    }
    code()
    {
        console.log("do code")
    }
  
    work(){
        super.eat();
        console.log("do ");
    }
}
let ahona = new Engineer("Ahona","CSE");
let data = "Secret info";
class User {
    constructor(name , mail){

        this.name = name;
        this.mail = mail;
    }
    viewData(){
        console.log("Data",data);
    }
}
class Admin extends User {
    constructor(name, mail){
        super(name,mail)
    }
    editData(){
        data = prompt("Enter New data");
    }
}
let std = new User("ALAVI","abs@mail.com");
let admin = new Admin("AhonaI","ahonas@mail.com");
let a =10;
let b =11;
console.log("a+B=",a+b ) ; 
console.log("a+B=",a+b ) ; 
try{console.log("a+B=",a+c ) ; }
catch(err){
    console.log(err);
}

console.log("a+B=",a+b ) ; 
console.log("a+B=",a+b ) ; 