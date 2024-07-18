let div = document.querySelector("div");
console.log(div);

//div.style.backgroundColor="gray"
let cClass = div.getAttribute("class");
// let cClass = div.setAttribute("class");

console.log(cClass);


let name =  div.getAttribute("name");
console.log(name);
let newBtn = document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
//div.append(newBtn)
//div.prepend(newBtn)
//div.before(newBtn)
div.after(newBtn)
let newHeading =document.createElement("h3");
newHeading.innerHTML = "<i>Hi , I am new!</i>";
document.querySelector("body").prepend(newHeading);

