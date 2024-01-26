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

/* for in   and   for of */
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










