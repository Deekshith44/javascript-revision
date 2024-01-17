/* 
document.querySelector("#laptops").addEventListener("click",()=>{
    console.log("Laptop is clicked!");
});

document.querySelector("#cameras").addEventListener("click",()=>{
    console.log("Camera is clicked!");
});

document.querySelector("#shoes").addEventListener("click",()=>{
    console.log("Shoe is clicked!");
});

document.querySelector("#phones").addEventListener("click",()=>{
    console.log("Mobile is clicked!");
});

document.querySelector("#cloths").addEventListener("click",()=>{
    console.log("Cloth is clicked!");
});

document.querySelector("#fans").addEventListener("click",()=>{
    console.log("Fan is clicked!");
});

//In big projects if we gave event handler like this for each and every child elements at the end it leads to performance issue
*/


//so in event delegation we are attaching the event handler direct to the parent of these elements


/* example 1
document.querySelector("#category").addEventListener("click",(e)=>{
//     console.log("Category is clicked! ");
//     console.log(e);
//     console.log(e.target);
   console.log(e.target.id);

   window.location.href="/" +e.target.id;

   });
*/

/* example-2

document.querySelector("#form").addEventListener("keyup",(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }

    if(e.target.dataset.lowecase!=undefined){
        e.target.value=e.target.value.toLowerCase();
    }
});


*/



















