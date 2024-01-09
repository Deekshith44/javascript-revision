//Day3

/*
mainHeading should store the <h1> element

secondAdvantage should store the second (!) <li> element (<li>Available</li>)

advDiv should store the <div> with the id advantages
*/
/*

const mainHeading = document.querySelector("#overview :first-of-type");
const secondAdvantage = document.querySelector('ul li:nth-of-type(2)');
const advDiv = document.getElementById("advantages");

console.log(mainHeading);
*/


/* Exploring and Changing DOM property

const h1=document.querySelector('h1');

h1.textContent        //return the content
h1.className          //return the classname if exist
h1.className="title"  //it assighn the className as title
h1.style.color="red"
h1.style.fontsize="29px"
h1.textContent="ABCX DDDD"   //change the text content


*/


/* Attributes vs property

const input= document.querySelector('input');

input.id="newid";  //input.id is a property
input.className="newclass";

input.value="new content";  //assigning a new content

//now changing attribute using setAttribute

input.setAttribute('value','I again changed the content');
//this is not directly going to change as input.value did
//1stly we have to get the attribute value

input.getAttribute('value');
//now assign this to input.value

input.value=input.getAttribute('value');  */

/* select multiple item

const storevalue=document.querySelectorAll('li');

for(const item of storevalue){
    console.log(item)
}

//method 2
const storevalue2= document.getElementsByTagName('li')


for(const item2 of storevalue2){
    console.log(item2)
}
*/


//day 3 

/*  
document.querySelectorAll('li')  //select all and return the node list array object

document.querySelector('li')  //select the 1st matching element
*/


/*
<body>
<header></header>
    <h1>Second heading</h1>
    <ul class="main_list">
        <li class="item" >Item1</li>
        <li class="item" >Item2</li>
        <li class="item" >Item3</li>
    </ul>
    <input id="id_name" class="class_name" value="My Text"/>
</body> */

//from above example we have to access the 2nd li element

/* old method

const output=document.querySelector('ul li:nth-of-type(2)');
console.log(output)
*/

/* 2nd method using children property
const output =document.querySelector('ul')
console.log(output.children[1])  //return only child elements
console.log(output.childNodes)  //return nodelist of array object including text and everything
*/

/* Parent element/node and closest()

//const li=document.querySelector('li');

//li.closest('ul');  //parent
//li.closest('body'); //ancestor

*/

/* selecting the sibling

//const li=document.querySelector('li')
//const ul=li.parentElement;
//console.log(ul)

//previous sibling
ul.previousSibling  //u will get a #text its a space
ul.previousElementSibling //we will get a previous element siblin

ul.nextSibling
ul.nextElementSibling
*/

/* DOM traversal vs query method

//now we are traversing from body to li
const ul=document.body.firstElementChild.nextElementSibling

const li=ul.firstElementChild;

//problem is if we cahneg the code later by add <section> above the <ul>, we get the wrong result
*/

//Styling DOM element

//const section=document.querySelector('section');
//const button=document.querySelector('button');

/* button.addEventListener('click',()=>{
    if(section.className==="bg_color visible"){
        section.className="invisible"
        //console.log("Hi")
    } else {
        section.className="bg_color visible";
        //console.log("bi")
    }
})  */

/*updated version of above

button.addEventListener('click',()=>{
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
});

*/

/* Creating and inserting an Element */

//innerHtml

//const ul=document.querySelector('ul');
//ul.innerHTML="<p>Hi</p>"; //this method delete/replace all the old elements with the new

/* right method 1
ul.innerHTML=ul.innerHTML+"<p>Hi<p>"; */

/* right method 2
ul.insertAdjacentHTML('afterend','<li>afterend</li>');
ul.insertAdjacentHTML('beforeend',"<li>beforeend</li>");
ul.insertAdjacentHTML('afterbegin',"<li>afterbegin</li>");
ul.insertAdjacentHTML('beforebegin',"<li>beforebegin</li>")
*/

//createElement

/* const ul=document.querySelector('ul');
const newList=document.createElement('li');
newList.textContent="Item 4";
ul.appendChild(newList); */

//Inserting DOM element
//append
//const ul=document.querySelector('ul');
//ul.append('hi guys'); //append is  used to add the text

//before,after,replacewith

/* Day 04 Practicing basics */

/*const items=document.getElementById("main_list2");
const items2=document.getElementsByClassName("main_list");
console.log(items);
console.log(items2);

const z=items.childNodes[1];
console.log(z); */

//const list=document.querySelectorAll('li');
//console.log(list)

/*
const input=document.querySelector('input');
input.setAttribute('type',"my type"); //Adding new attribute
*/

/* Replacing the existing attribute content
input.setAttribute('value',"new value");
input.getAttribute('value');
input.value=input.getAttribute('value');
*/








