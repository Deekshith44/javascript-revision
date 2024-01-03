
/*======   async, defer =====

document.getElementById("exm").innerHTML= "HiBro";  */

/*===== let and var

function func(){
    var a=10, b=20;
    if(a>0 && b>0){
        let c=a+b;

        console.log(c);
    }
console.log(a)
console.log(b)
//console.log(c)  c is defined with let so not accessible outside of the scope
}



func();  */

/*===== parseInt and parseFlot =====
let y=parseInt(10);

console.log(y)

*/

/*===== truthy and falsy
if(-90)
{
    console.log("Hi")
} else{
    console.log("bi")
}

*/

/*=============First class function==================

function abcd(a){

    a();
    
}

abcd(function(){
    console.log("hello")
})

*/

/*const a=[10, 3, 100,7,8,-1]

const b=["adhish","Hi","Sharath","manoj","hjos","shradha","leo","Zomya"];

//creating a array using new keyword

const c=new Array(70,60,1,0,186,34,87); */

/* a.pop();
a.push(-5);
a.shift();
a.unshift(-9);  *?=/

/*delete array element?
delete a[2]; using index number
*/

/*let d=a.concat(c);
console.log(d)*/

/*flat method

const e=[[10,2],[90,50,100],[3,7,9]];
const f=[['a','b','c'],['d','e','z']];

const d=f.flat()

console.log(d)
console.log(f)  */

/*===== Splicing

a.splice(3,0,-7,0)
a.splice(2,3,65,33,20);
a.splice(5,0,11,12);
a.splice(1,0,3,4,5,6,7,8)
a.splice(4,0,888,999)
a.splice(2,3)  just to remove elelmnt from the array
=====*/
/*===== Slicing
let y=a.slice(3);
let y=a.slice(1,4);
let y=a.slice(2,3)
=====*/

/*===toString()method   b.toString()
let z=b.toString();
let zz=a.toString();

console.log(zz)
document.write(z)

*/

/*=====reverse the array=====

let y=c.reverse()

document.write(y)
console.log(y)
*/

/*===== SORT=====

//Assending order

ascendFunc=(a,b)=>{ 
    return a-b;
}
let d=c.sort(ascendFunc)


//Descending order of alphabetical sort

const names=["ADithya","aaradhana","ZoYa","yash","kat","Leo","Virat"]
let e=names.sort(function(a,b){
  // return a.localeCompare(b)
  return b.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase())
})

//Descending order

let f=a.sort((a,b)=>{
   return b-a;
})



console.log(d);
document.write(e)
console.log(f)

*/

/*===== Find MAX and MIN in an Array

 using index

const a=[89.1,7,0,99,134,-1];

let b=a.sort((a,b)=>{
    return a-b;
})

document.write(b)

//smallest number
let c=a[0];
document.write(" <br> smallest number is "+c)

//largest number
let d=a[a.length-1]
document.write("<br><br> largest number is "+d)


===== using math.Max  keyword =====

const numbers=[6,-2,90,55,12,298,66]
document.getElementById("exm").innerHTML="Max number is "+ myArr(numbers);
 function myArr(arr){
    return Math.max.apply(null,arr)
   //return Math.max(arr)  you will ge a error NaN just by using it
}


 ===== Using and Math.MIn =====

const number=[9,6,1,0,66,-1,2,98];
document.write("Minimun number in an array is " +myArr(number));

function myArr(elem){
    return Math.min.apply(null,elem);
}

*/

//===== Sorting an object array

/* const people=[{
    name:"Dixith",
    year:2000
},
{
    name:"Zoya",
    year:1999
},
{
    name:"Adish",
    year:1989
},
{
    name:"tiger",
    year:2012
},
{
    name:"manish",
    year:1699
},

];   */

/*-----We can sort this by year and by name */
/* Sorting using year
let sortYear=people.sort(sortYearFunch);

function sortYearFunch(a,b){
    return a.year-b.year;
}

console.log(sortYear);
console.log(people)
*/

//Sorting using name

/*   METHOD 1
let sortName=people.sort((a,b)=>{
    let x=a.name.toLowerCase();
    let y=b.name.toLowerCase();

    if(x<y){
        return -1;
    }
    if(x>y){
        return 1;
    }
    return 0
}) */

/* METHOD 2
let sortName=people.sort((a,b)=>{
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
})

console.log(sortName)

*/


/*===== forEach() in Js =====*/

/* const num=[3,77,12,60,2,0,8,34];

num.forEach(function(val){
    console.log(val+10) ;
})  

num.forEach((val)=>{
    console.log(val*val)
})  */

/* const students=[
{
    name:"Manish",
    age:23,
    course:"BCA",
    DateOfBirth:"09/09/2000"
},
{
    name:"Radhika",
    age:18,
    course:"BSC",
    DateOfBirth:"01/01/2004"
},
{
    name:"Zoya",
    age:25,
    course:"MCOM",
    DateOfBirth:"30/01/1998"
},
{
    name:"Rithik",
    age:19,
    course:"BCA",
    DateOfBirth:"15/12/2003"
},
{
    name:"Kshama",
    age:23,
    course:"MSC",
    DateOfBirth:"28/01/2000"
}
];  */

/* ===== ForEach =====
students.forEach((std)=>(console.log(std.DateOfBirth))  )  */

/* ===== map() =====

const xyz=[10,3,4,20,1,90];
xyz.map(function(val){
    console.log(val*10)
})   */

/* tricky map example 


const output=students.map((elem)=>{
    return elem.name+" "+elem.age;
})

document.write(output)  */

/*===== flatMap() method ===== 

const title=[[12,13],[1,2],[90,88],[34,65]];
const title1=[['a','b'],['c','d'],['e']];
const title2=["apple","banana"];

const output= title.flatMap((num)=>{
    return num;
})

const output1=title1.flatMap((word)=>{
    return word;
})

const output3=title2.flatMap((word)=>{
    return word.split('')
})


console.log(output3); */

/*===== filter() method ===== */

/* const xyz=[10,3,4,20,1,90];

const result=xyz.filter((elem)=>{ return elem>17});
console.log(result);  */

//we are taking the students array for example

/* const output=students.filter((stud)=>{
       return stud.age>=20;
})

console.log(output) */

/* filter out only BCA students

const result=students.filter((stud)=>{
    return stud.course=="BCA"
});

console.log(result)

//same example method 2

const result2=students.filter((stud)=>{
    if(stud.course==="BCA"){
    return true;
    }
})
console.log(result2)

//method 3

const out3=students.filter((stud)=>(stud.course==="BCA"))

console.log(out32``)

*/

//===== reduce() method

//const arr=[60,45,10,55,20,76];

/*const output=arr.reduce((total,num)=>{
    return total+num;
})

console.log(output) */

//FindMax number in an array using reduce

/*  VVVVVVIMP
const result=arr.reduce((max,cur)=>{
     if(cur>max){  //current element means array element, if that is greater than 0(accumulator)
        max=cur;
     }
     return max;
},0);

console.log(result)
*/

/* we have an array object, we have to find how many people have a same age
 {23:3,18:2,25:1}


const students=[
    {
        name:"Manish",
        age:23,
        course:"BCA",
        DateOfBirth:"09/09/2000"
    },
    {
        name:"Radhika",
        age:18,
        course:"BSC",
        DateOfBirth:"01/01/2004"
    },
    {
        name:"Zoya",
        age:25,
        course:"MCOM",
        DateOfBirth:"30/01/1998"
    },
    {
        name:"Rithik",
        age:18,
        course:"BCA",
        DateOfBirth:"15/12/2003"
    },
    {
        name:"Kshama",
        age:23,
        course:"MSC",
        DateOfBirth:"28/01/2000"
    },
    {
        name:"Dishan",
        age:23,
        course:"MSC",
        DateOfBirth:"02/06/2000"
    }
    ];

    const output= students.reduce((acc,cur)=>{
            if(acc[cur.age]){
                 acc[cur.age]=++acc[cur.age]
            } else {
                acc[cur.age]=1;
            }
            return acc;
    },{});

    console.log(output)

*/

/* ===== map chaining
problem : have to return the array element whose 
 age is less than 20 and should extract only its 
 first name only 

const students=[
    {
        firstName:"Manish",
        secondName:"poojary",
        age:23,
        course:"BCA",
        DateOfBirth:"09/09/2000"
    },
    {
        firstName:"Radhika",
        secondName:"bhat",
        age:18,
        course:"BSC",
        DateOfBirth:"01/01/2004"
    },
    {
        firstName:"Zoya",
        secondName:"poojary",
        age:25,
        course:"MCOM",
        DateOfBirth:"30/01/1998"
    },
    {
        firstName:"Rithik",
        secondName:"shetty",
        age:18,
        course:"BCA",
        DateOfBirth:"15/12/2003"
    },
    {
        firstName:"Kshama",
        secondName:"acharya",
        age:23,
        course:"MSC",
        DateOfBirth:"28/01/2000"
    },
    {
        firstName:"Dishan",
        secondName:"poojary",
        age:18,
        course:"MSC",
        DateOfBirth:"02/06/2000"
    }
    ];



    const result= students.filter((stud)=>(stud.age<20)).map((elem)=>(elem.firstName))

    console.log(result)
*/

/* solving above same issue using reduce method 

const students=[
    {
        firstName:"Manish",
        secondName:"poojary",
        age:23,
        course:"BCA",
        DateOfBirth:"09/09/2000"
    },
    {
        firstName:"Radhika",
        secondName:"bhat",
        age:18,
        course:"BSC",
        DateOfBirth:"01/01/2004"
    },
    {
        firstName:"Zoya",
        secondName:"poojary",
        age:25,
        course:"MCOM",
        DateOfBirth:"30/01/1998"
    },
    {
        firstName:"Rithik",
        secondName:"shetty",
        age:18,
        course:"BCA",
        DateOfBirth:"15/12/2003"
    },
    {
        firstName:"Kshama",
        secondName:"acharya",
        age:23,
        course:"MSC",
        DateOfBirth:"28/01/2000"
    },
    {
        firstName:"Dishan",
        secondName:"poojary",
        age:18,
        course:"MSC",
        DateOfBirth:"02/06/2000"
    }
    ];
    

    
        
const outputlist = students.reduce((names, user) => {
    if(user.age < 20){
         names.push(user.firstName); //can also use names.unlist(user.firstname);
    }
    return names; 
}, []);
   

console.log(outputlist)
*/


/*===== every,some,find,findIndex, lastIndexOF method
const x=[10,55,8,99,2,5,15,99];

//every

const output= x.every((elem)=>{
    return elem>17
});

console.log(output)

//some

const someOutput=x.some((elem)=>{
    return elem>17
});

console.log(someOutput)

// indexOf()

let y=x.indexOf(90)

console.log(y)

//lastIndexOf

let z= x.lastIndexOf(99)
console.log(z);

//find()
let a=x.find((elem)=>{
    return elem>60;
})

console.log(a)

//findIndex()

let output6=x.findIndex((elem)=>{
    return elem>50;
})
console.log(output6)
*/

/* ===== Array includes

const num=[2,4,6,1,0,9];

const result= num.includes(10);
const result1=num.includes(0);
const result2=num.includes(2);
const result3=num.includes(0,4); //0 in 2nd position of index -true
const result4=num.includes(6,3); //number 6 in 3rd index -false
const result5=num.includes(4,2)  //4 in 2nd index false


console.log(result,result1,result2,result4)
console.log(result5)
*/

//for in and for of for array

//const arr=[1,6,3,9,8,2];
/* 
for(let i of arr){
    console.log(i)
} */

/*
for (let item in arr)
{
    //console.log(item)  // we will only get a index
    console.log(arr[item])
}
*/

/* ===== for in for object

const students={
        name:"Manish",
        age:23,
        course:"BCA",
        DateOfBirth:"09/09/2000"
    }
    


    for( var key in students){
       // console.log(key)
       // console.log(students[key])
        console.log(key,students[key])
    }
*/


/*  Day 2   */

//this Keyword

/*
const person={
    firstname:"Deekshith",
    secondname:"poojary",
    age:22,
    fullname:function(){
        return this.firstname +' '+this.secondname;
    }
    
};
console.log(person.fullname());
*/

/*
let counter={
    count:0,
    increment:function(){
        counter.count++;
    }
}

counter.increment()
counter.increment()
counter.increment()

console.log(counter)
*/

/*  by creating a factory function same problem

let counter=createCouter();
let counter1=createCouter() //creating new object for the same function

function createCouter(){
    return{
        count:0,
        increment:function(){
            this.count++;
        }
    }
}

counter1.increment()
counter1.increment()
counter1.increment()
console.log(counter1)


counter.increment();
console.log(counter);
*/

/* no object only function

var count=0;
function increment(){
    this.count++;
    console.log(this);
}

increment();
increment();
increment();

console.log(count);

*/

/* this keyword with constructor

function Car(name){
    this.name=name;
    this.start=function(){
        console.log(this.name+' started ')
        console.log(this);
    }
}


//creating onject using new
let swift= Car('swift');
//swift.start();
console.log(this)
*/


// global object (this keyword in global space)

//console.log(this);

/*In a global space this keword is going to refer the global object, in browser it is 
window object and in node.js it is global 
*/


/* inside the function
"use strict"

console.log(this);  //this will work in stict mode as well

function x(){
    console.log(this)
}

x();  */
/* value of the this keyword in function is undefined if we are using strict mode
but there is a thing called this substitution,if the value of the 
this keyword is undefined or null it wil replace it with globalobject if it
is non-strict mode*/

/* this keyword value depends on how function is called
"use strict"
function x(){
    console.log(this);
}
x();
window.x(); */
/* this keyword value depends on how the function is called,
if we are just calling x() in a strict mode than value will be undefined
but if we call it by using any refernce or any object reference (here it is
    window.x() ) than we will get a value for this as globalobject in strict mode too */

/* this inside the object method

"use strict"
const obj={
    a:10,
    x:function(){
      console.log(this)
    }
}
obj.x();  */
/* if we are creating a function as a part of object than ("x") will be
called as a method .
Note: it is in strict mode, and we are calling it using object reference
*/

/* simple call method

const student={
    name:"Deekshith",
    age:20,
    printName:function(){
        console.log(this.name)
    }
};

const student2={
    name:"Dev",
    age:20,
    
}

student.printName()
student.printName.call(student2);  */

/* this keyword inside the arrow function
"use strict"
const obj={
      a:10,
      x:()=>{             //Enclosing Lexical Context for this arrow is obj and that is present in global space, so it is globalOblect
        console.log(this)
      }
}

obj.x();

const obj2={
    a:20,
    x:function(){
        const y=()=>{     //Enclosing Lexical Context for this arrow is FUNCTION  and that is present inside the obj2, so it is refer to obj2
            console.log(this)
        }
        y();
    }
}

obj2.x();  */
/* arrow function not works similar to other functions, arrow function will
be Enclosed with Lexical Context.
lexical context : how it will be written in a code
(here where the obj is lexically present in a code)

in the 1st example , obj is present in global space , so this keyword
refers to the globalObject
*/








