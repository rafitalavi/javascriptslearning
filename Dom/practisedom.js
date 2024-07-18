let newBtn = document.createElement("button");
newBtn.innerText="Click me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn)
let parag =document.querySelector("p");
parag.classList.add("newClass");