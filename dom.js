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









