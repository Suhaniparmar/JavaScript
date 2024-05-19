let moveBtn = document.querySelector("#move");

// moveBtn.addEventListener("click",()=>{
//     console.log("hello");
// });

let body = document.querySelector("body");
let currmode = "light";

moveBtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
        

})