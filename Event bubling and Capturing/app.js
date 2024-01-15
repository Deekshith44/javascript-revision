/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
});

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
});

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
});

//In above example we have not mentioned anything so default it is BUBLING(false)

*/


/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},false);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},false);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},false);


//In above example we have  mentioned FALSE for "usecapture" so  it is BUBLING(false) and default also same

*/


/* useCapture=true, setting it to true
document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},true);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},true);

//in capturing/trickling method if we click child , capturing method call the grand parent 1st, parent next and child at the end
*/

/*
document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},false);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},true);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},false);

//here if I clicked Child div, so 1st will check all the 3 div and check for any capturing, if the event capturing is there than that will call first only after it finish bubling will start
//if we click parent than there is no connection for child and same if we click grand parent than there is no connection for parent and child to be called
*/

/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},false);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},true);
*/

/*document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},false);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},false);
*/


/*===Stop Propogation===*/

/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},false);

document.querySelector("#parents").addEventListener("click",(e)=>{
    console.log("Parents is clicked");
    e.stopPropagation();
},false);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},false);

//here if we click child bubbling will start out and when the stopPropagation encounters bubling will stop then and there
 */

/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},true);

document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("Child is clicked");
    e.stopPropagation();
},true);

//here if we click child, as capturing it will start call it from the top
*/

/* document.querySelector("#grandparent").addEventListener("click",(e)=>{
    console.log("Grand Parent is clicked");
    e.stopPropagation();
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},true);

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child is clicked");
},true);

//now if we click child , 1stly grandparent will call call and stop the propogation there it self
//if we clcik parent, 1stly grandparent will call call and stop the propogation there it self
*/

/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
    
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents is clicked");
},false);

document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("Child is clicked");
    e.stopPropagation();
},true);

//here 1stly capturing will start and while traversing in capturing stoppropagation encounters so it is stop then and there and not going to print bubling
*/

/* document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("Grand Parent is clicked");
    
},true);

document.querySelector("#parents").addEventListener("click",(e)=>{
    console.log("Parents is clicked");
    e.stopPropagation();
},true);

document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("Child is clicked");
   
},false);
//now only grandparent and parent will be called and propogation will stop, so child will not be called
*/




