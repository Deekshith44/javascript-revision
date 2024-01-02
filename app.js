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

const arr=[1,6,3,9,8,2];
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









