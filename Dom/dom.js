// alert("my dom")
// document.body.childNodes[1].innerText ="My Dom";
// document.getElementById(heading);
// let secondaryHeadings = document.getElementsByClassName('secondaryHeading');
// console.dir(secondaryHeadings);
// let secondaryHeadings = document.querySelectorAll("p")
// console.dir(secondaryHeadings)
let secondaryHeadings = document.querySelectorAll(".secondaryHeading")
console.dir(secondaryHeadings)
let button = document.querySelector("#myId");
console.dir(button);
// document.querySelector("div").children
let div = document.querySelector("div");
console.dir(div)
let heads = document.querySelector("h2");
heads.innerText =heads.innerText + "from MY College"
console.log(heads)
let divs = document.querySelectorAll(".box")
console.log(divs)
for(let i = 0;i<divs.length ;i++){
    divs[i].innerText=i;
}