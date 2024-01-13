/*function myFunction(){
    console.log("Handler3");
} */

/* Method-2

 let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("Hi");
};

btn1.onclick=()=>{
    let a=10;
    a++;
    console.log(a);
}        //when we call 2 events for same button, in this methid 2nd one wil call and 1st one will overhide


let div=document.querySelector("#div1");

div.onmouseover=()=>{
    console.log("hi");
}
*/

/* Methos-3 

//Event listener
let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
    console.log("Handler1")
});

btn1.addEventListener("click",myFunction);

btn1.addEventListener("click",()=>{
    console.log("Handler2");
});  //in previous method 1st event will be over hiding but here both will run
//using eventlistener wecan call the events multiple time


//removing event listener
//NOTE : condition is we should pass the exact callback function here

btn1.removeEventListener("click",myFunction);

*/

/*small project of toggling  light and dark mode
let btn1=document.querySelector("#button1");
let body=document.querySelector('body');
let curMode="light";
btn1.addEventListener("click",()=>{
    if(curMode==="light"){
        curMode="dark"
      //  body.style.backgroundColor="black";  //method 1
          body.classList.add('dark');
          body.classList.remove('light')
    } else {
        curMode="light"
      //  body.style.backgroundColor="white";  //method 1
      body.classList.add('light');
      body.classList.remove('dark')
    }
    console.log(curMode);



    
    
    
});  */


//above everything can be writtern in single line
/*let btn1=document.querySelector("#button1");
let body=document.querySelector('body');
let curMode="light";
btn1.addEventListener("click",()=>{
 body.classList.toggle('dark');

});  */






