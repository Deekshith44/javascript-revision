/* window SIZE
//We will get the different result while expanding and shrinking the page
let x=window.innerHeight;
let y=window.innerWidth;

console.log(x,y);  */

/* window screen 
let a=screen.width;
let b=screen.height;
console.log(a,b);

let c=screen.availHeight;
let d=screen.availWidth;
console.log(c,d);

let e=screen.pixelDepth;
let f=screen.colorDepth;
document.write(e,"   ",f);

*/

/* Window Location 
// let a=window.location; //return the current page address
// let b=window.location.href;  //returns the URL of the page
// let c=window.location.hostname;
// let d=window.location.pathname;
// let e=window.location.protocol;
// let f=window.location.port;
// console.log(a);
// console.log(f);
location.reload(); //reloads the page

//location.assign("https://www.jiocinema.com/");
//new document/page will open when we exceute this line
*/

// Window History
/*if we opened so many pages in a same tab than by 
using symbols -> and <- in the browser we navigate 
backward and forward here using
history.back() and history.forward() we can navigate
length:how page page opened


let a=window.history;
console.log(a);
let x=history.back()
let y=history.forward()

console.log(x) //if there is a page behind than it will navigate there
*/

//JS popup alert
//window.alert("hi");

/*window confirm
function myFunction(){
let text;
if(window.confirm("Press a button")){
    text="You pressed Ok";

} else{
    text="You pressed cancell";
}
console.log(text)

document.getElementById("demo").innerHTML=text;

}  */

/*window prompt
function myFunction(){
let text;
let people=window.prompt("What is your name?","Deekshith");
if(people==="" || people===null){
    text="User cancelled the prompt";
} else {
    text="Hellow "+people+" how are you today?";
}

document.getElementById("demo").innerHTML=text

}
*/




