//Revision round 1
/* var let const

function abcd(){
    var age=25;
    if(age>=21){
        let age1=18;
        if(age1>=18){
            console.log("Congrats")
           // console.log(age);
          //  console.log(age1);
        }
       // console.log(age1);
    }
    //console.log(age1);
    
}
abcd();

function xyz(){
    var x=10;
    if(true){
        let b=20;
       // console.log(x)
       //console.log(b)
    }
    //console.log(x)
   // console.log(b)
}


xyz();
*/

//================================================
//return in function
// function abdcd(a,b,c){
//     const add=a+b+c;
//     return add;  //we should return the value else it is undefined
// }

// const result= abdcd(10,10,10);
// console.log(result);


/*================================================*/
//truthy vs falsy

// if(-90){
//     console.log("Hii");
// }
//     else
//   {
//         console.log("bi");
//     }

/*================================================*/
//forEach

// const arr=[10,45,6,2,345];

// arr.forEach((elem)=>{
//     //return elem*10;  //output is undefined bcz forEach doesnot create new array so it doenot retune anything
//     console.log(elem*10);
// });

/*========== for in   and   for of================*/
//for in :Objects
// const yash={
//     name:"yash",
//     age:38
// };

// for( const nam in yash){
//     // console.log(nam);
//     // console.log(yash[nam])
//     console.log(nam,yash[nam])
// }

// //fo in :array
// const arr=[6,3,90,2,55];

// for(const key in arr){
//     console.log(key,arr[key])
// }

//for of :array
// const arr=[6,3,90,2,55];

// for(const key of arr)
// {
//     console.log(key);
// }



/*================================================*/
//Arrays

//const numbers=[[2,56],34,[10,8],[55,44]];

// let x=numbers[2];
// console.log(x);
// console.log(numbers);

// //swapping array element with new number
// numbers[2]=88;
// console.log(numbers);

//flatering
//console.log(numbers.flat())

/* Splicing
const num= [50,3,10,66,12];

//num.splice(2,0,900,800); //[50, 3, 900, 800, 10, 66, 12]
//num.splice(3,2,444,555); //[50, 3, 10, 444, 555]
//num.splice(1,3,100,111,222,444)
console.log(num);


const letter=['a','b','c','z'];
// letter.splice(2,0,'t','r','v');
// console.log(letter)

//using splicing we can remove the element
letter.splice(1,3); 
console.log(letter)

*/

/* slice
const num=[10,30,25,5];

//let x=num.slice(2);  //[25, 5]
//let x=num.slice(3);     //[5]
//let x=num.slice(4);    // []  there is no index exist
// let x=num.slice(1,3);    //[30, 25]
// console.log(x);
 */

/* toString()
const a=['a','p','p','l','e'];
a.toString();  //'a,p,p,l,e'

const num=[9,6,1,4,10];
num.toString();  //'9,6,1,4,10'
*/


/*==================sort==========================
// const num=[100,119,2,1,0,20,1009,4];
// const output=num.sort((a,b)=>{
//   // return a-b;
//   return b-a;
// });

// console.log(output);

const names=["adi","Bhavith","Adith","zoo","ZOMBie","Yana"];
// const output=names.sort((a,b)=>{
// let x=a.toLowerCase();
// let y=b.toLowerCase();
// if(x>y){
//     return 1;
// }
// if(x<y){
//     return -1
// }
// return 0;
// });

// console.log(output)


//method 2
let output=names.sort((a,b)=>{
 return  a.toLowerCase().localeCompare(b.toLowerCase());
})

console.log(output)
*/


/*============sorting array of object===========


const hero=[{
            name:"Yash",
            age:38
            },
            {
            name:"Darshan",
            age:51
            },
            {
            name:"Sudeep",
            age:41
            },
            {
            name:"Virat",
            age:29
            },
 ];


// const output=hero.sort((a,b)=>{
//    // return a.age-b.age;   //sorting acc to the age
//    return b.age-a.age;
// });

//sorting acc to name

//method 1
// const output=hero.sort((a,b)=>{
//    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
// })

//method 2
// const output=hero.sort((a,b)=>{
//     let x=a.name.toLowerCase();
//     let y=b.name.toLowerCase();
//     if(x>y){
//         return 1;
//     }
//     if(x<y){
//         return -1
//     }
//     return 0;
// })

// console.log(output);

*/

/*============Map, filter,reduce,flatmap===========

// const a=[10,50,35,25,5,0,75];
// let b=a.map((elem)=>{
//     return elem+10;
// });
// console.log(b);


// const word=["apple","Deekshith"];
// let result=word.map((elem)=>{
//    return elem.length;
// })
// console.log(result)


//flatMap()
// const word=["apple","Deekshith"];
// let result=word.flatMap((elem)=>{
//     return elem.split('');
// })


// const word=[['Hello','Manish'],'Radhika',['Sharan','Puja']];

// const result=word.flatMap((elem)=>elem);
// console.log(result)



//filter
// const num=[10,4,25,8,99,18,0,2];

// const output=num.filter((val)=>{
//     return val>=17;
// })
// console.log(output);

//reduce

//const num=[10,4,25,8,99,18,0,2];
// const result=num.reduce((acc,curElem)=>acc+curElem);
// console.log(result)

const students=[{name:"Haristsa",
                 age:21,
                course:"BSC"
                },
                {name:"Kavana",
                 age:24,
                course:"MSC"
                },
                {name:"Tripthi",
                 age:19,
                course:"BCA"
                },
                {name:"Kavitha",
                 age:18,
                course:"BSC"
                },
                {name:"Sudesh",
                 age:18,
                course:"BCA"
                }
                     
            ];
// get the info of only BCA students
// const output=students.filter((crs)=>{
//     return crs.course==='BCA';
// });

// console.log(output);  

//reduce()

// const output=students.reduce((acc,cur)=>{
//         if(acc[cur.age]){
//             acc[cur.age]=acc[cur.age]+1;
//         }else{
//             acc[cur.age]=1;
//         }
//         return acc;
// },{})

// console.log(output)


//map chaining

//extract the name  of the student whose age is greater than or equal to 19
//Method-1
// const output=students.filter((val)=>val.age>=19).map((nam)=>nam.name);

// console.log(output)



//Method 2
//Solving same issude using reduce
// const output=students.reduce((acc,cur)=>{
//        if(cur.age>=19){
//          acc.push(cur.name);
//        }
//        return acc;
// },[]);

// console.log(output);

*/


/*============Finding Min and Max===========
const number=[300,5,99,12,789,-2,45];

function myFunc(arr){
    return Math.min.apply(null,arr);
    //return Math.max.apply(null,arr);
}


const output=myFunc(number);
console.log(output);

*/





















