let mode = document.querySelector("#mode");
let crmod= "light";
let body = document.querySelector("body");
mode.addEventListener("click", () =>{
    if(crmod==="light"){
        crmod="dark";
        body.classList.add("dark")
        body.classList.remove("light");
    
    }
    else{
        crmod="light";
        body.classList.add("light");
        body.classList.remove("dark");
    };
    console.log("")
})


let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     alert("myfr");
//     console.log(e);
//     console.log(e.type );
    
//     console.log(e.target );

//     console.log("button clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };
let divs = document.querySelector("div");
divs.onmouseover = (evt) =>{
    // alert("hlw");
    console.log(evt);
    console.log(evt.type );
    
    console.log(evt.target ); 
    if(crmod==="light"){
        crmod="dark";
        body.classList.add("dark")
        body.classList.remove("light");
    
    }
    else{
        crmod="light";
        body.classList.add("light");
        body.classList.remove("dark");
    };
    console.log("")
  
}
btn1.addEventListener("click", (e) =>{
    alert("myfr");
    console.log(e);
    console.log(e.type );
    
    console.log(e.target );

    console.log("button clicked");
    let a = 25;
    a++;
    console.log(a);
}


)