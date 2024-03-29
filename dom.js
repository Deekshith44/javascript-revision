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

/* children vs childNodes
const list=document.querySelector('ul');
console.log(list.childNodes);
console.log(list.children);

const list=document.querySelector('ul');
console.log(list.childNodes[1]);
console.log(list.children[1]);

*/

/*  accessing parentelement using closest()

const list=document.querySelector('li');
const output=list.closest('section'); //section is a ancestor of li 
const output1=list.closest('ul'); //ul is a direct parent of ul
const output3=list.closest('h1'); //output is null bcz h1 is not a parent nowhere connected to li
console.log(output);

const list=document.querySelector('header');
const output=list.closest('body'); 
console.log(output);
*/

/* without using closest()
const li=document.querySelector('li');
console.log(li.parentElement)
*/


/* selecting sibling elements 

//const ul=document.querySelector('ul');

//const output=ul.previousSibling;  // #text will return as output bcz there is a space
//console.log(output);

//const output1=ul.previousElementSibling;  //null bcz there is section just behind the ul
//console.log(output1)

 const section= document.querySelector('section');

const output2=section.nextSibling;
const output3=section.nextElementSibling;
console.log(output2);
console.log(output3); */


/* Traversing in DOM

//const list=document.body.firstChild; //returns #text bcz of the space
const list=document.body.firstElementChild.nextElementSibling;

const x=list.previousElementSibling;
console.log(x);  */

//creating and inserting elements

//const h1=document.querySelector('h1');
//h1.innerHTML='<p>Hay its me new line</p>'; //If we just write only these much than new element replace with the old one
//h1.innerHTML=h1.innerHTML+'<p>Hay its me new line</p>'; //if we want both line ,if we want to keep the old elements as it is

/* 2nd method 

// const ul=document.querySelector('ul');

// ul.insertAdjacentHTML('beforeend', '<p>beforeend</p>')
// ul.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
// ul.insertAdjacentHTML('afterend', '<p>afterend</p>')
// ul.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');

*/

/*
ul.insertAdjacentHTML('after','<p>after</p>'); //NOTE : after and before These 2 are not works
ul.insertAdjacentHTML('before','<p>before</p>');
*/

/* Creating new Element 
const ulList=document.querySelector('ul'); //Adding to ul
const newLi=document.createElement('li'); //creating new element li
ulList.prepend(newLi);  //prepend adds at the top
newLi.textContent="Item4";
//before 
ulList.lastElementChild.before(newLi); //adding new Li just before the last element

//after
const newLi2=document.createElement('li');
newLi2.textContent="Item5";
ulList.append(newLi2);
ulList.firstElementChild.after(newLi2); 

//insertBefore
const newLi3=document.createElement('li');
ulList.append(newLi3);
newLi3.textContent="Item6";
ulList.insertBefore(newLi3,ulList.children[1]); //insert before the 2nd element 


//replacewith
const newLi4=document.createElement('li');
newLi4.textContent="Item7";
//ulList.firstElementChild.replaceWith(newLi4);
ulList.children[2].replaceWith(newLi4);

//replace child
const newLi5=document.createElement('li');
newLi5.textContent="Item8";
ulList.replaceChild(newLi5,ulList.children[3]);
*/

/* Cloning Node

const list=document.querySelector('ul');
const newLi=document.createElement('li');
newLi.textContent="Item10";
//list.append(newLi);
const cloneUl=newLi.cloneNode(true);
//document.body.append(cloneUl); //we can copy/clone it and use anywhere
list.append(newLi,cloneUl); //same list added again
*/

/*Removing Elements

const list=document.querySelector('ul');
//list.remove();  //Method 1

//list.parentElement.removeChild(list); //method 2

*/












