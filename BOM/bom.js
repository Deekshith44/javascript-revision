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

/*
//open()
//window.open("https://www.youtube.com/","hy");
//close() //close the opened window using open()method of window

//resizeTo() and resizeBy()
//Condition is that this will work only for the tabs that opened using window.open()
// open("https://developer.mozilla.org/en-US/","Deeksh","resizable") //resizable is must here
// resizeTo(100,200) //width, height it sets the new size for that tab
// resizeBy(50,-10)  //it will be relative to current size and changes acc to that , here 50px width increases and -20px height decreases of its current size

// moveTo(100,0) //x,y axix it will move to the coordinate position
// moveBy(10,-20) //x,y axis it will relative to its current position and changes accordingly

// scrollTo(0,100) //x,y axis
// scrollBy(0,200) //relatives to current position
*/


