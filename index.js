// console.log("hello");

// let myName = "Shehbaz khan ";
// console.log(myName);

// alert("this is me");         // for alert
// console.error("this is an error");   // i am error
// console.warn("this is warning ");
// document.write("hello i am document dot write");

// Pratice set 1

// console.log(1+"20");
// console.log(9-"20");           //bug in javascript 
// console.log("Java"+"Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("Shehbaz" - "khan");
// console.log(true + true);//here true =1 false = 0
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);



// ******🥋 Interview Question 1 🥋 ************
// Difference between null vs undefined

// Sol
// let iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
//////         /////  //////2nd javascript bug
// let iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));



// ******🥋 Interview Question 2 🥋 ************
// what is NaN?

// Sol
// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number

// ******🥋 Interview Question 3 🥋 ************
// What is difference between == vs === ?

// sol
// let n1=4;
// let n2='4';

// console.log(typeof(n1));
// console.log(typeof(n2));
// console.log(n2);

// console.log(n1 == n2);      //true
// console.log(n1 === n2);    //false

// == for check value are equal 
// === for check value are equal AND it's type. 






//  //****😀😀 for check user enter a valid number in form 😀😀*****

// sol
// let myphonenumber = 9892342423;
// let myName = "Shehbaz khan";
// console.log(isNaN(myphonenumber));
// console.log(isNaN(myName));
// if (isNaN(myName)) {
//     console.log(" Please Enter a valid name ");
// }


// 3:Challenge time
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));


// Section 3 Expresssions and Operator

// var x = 5;
// var y = 5;
// console.log('Is both the x and y are Equal or not : ',x==y);
// console.log(`Is both the x and y are Equal or not : ${x==y}`);



// //*********Swap two number ***********

// sol
// var a = 5;
// var b = 10;
// var c = 0;                       
// c=b                     // a=b
// b=a                     // b=c
// a=c                     // c=a
// console.log(a,b)

// // ******Swap two number without any third variables *********

// sol
// var a = 5;
// var b = 10;
// a=a+b;   //a =15
// b=a-b;   //b=5
// a=a-b    //a=10
// console.log(a,b);



// //section:-4 Challenge Time 
// // WAP that works out whether if a given year is leap year or not ?

let a = 1988;
debugger;
if (a % 4 == 0) {
    if (a % 100 == 0) {
        if (a % 400 == 0) {
            console.log("the year is " + a + " a leap year");
        } else {
            console.log("the year is " + a + " not a leap year");
        }
    }else{
        console.log("the year is " + a + " a leap year");
    }
}else{
    console.log("the year is " + a + " not a leap year");
}




let year = 1988;
debugger;
if (year%4==0) {
    if (year%100==0) {
        if (year%400==0) {
            console.log(`the year is ${year} a leap year`)
        }else{
            console.log(`the year is ${year} Not a leap year`)
        }
        
    }else{
        console.log(`the year is ${year} a leap year`)
    }
}
else{
    console.log(`the year is ${year} Not a leap year`)
}


// function checkyear(year) {
//     if (year%4==0) {
//         return true;
//     }
//     if (year%100==0) {
//         return false;
//     }
//     if(year%400==0) {
//         return true;
//     }
//     return false
// }
// year =1988;
// console.log("the year",checkyear(year)?"leap year":"not a leap year");






// 👀 what is truthy and falsy values in javascript ? 👀

// we have total 5 falsy values in javascript 
// 👀 0 ,"", undefined ,null, NaN, false** is flase anyway 👀


// if (score = 0){  // score = 0 is flase value so writen second value
//     console.log("OMG, we lose the game");
// }else{
//     console.log("Yay, we won the game");
// }



// 🟢🟡🟠🟨🟧🟪🟦⚪✔💲✔➕➖©®🕐🔲🔳🔷🔶
// 👁‍🗨👁‍🗨❔⁉💯❓❕⭕🚫💚💛🧡❤🤍💖💗



// 🚫💚 Cond
// conditional (ternary) Operator

// The conditional (ternary) Operator is the only javascript Operator
// that takes three Operands

// let vote =64;
// (vote>=18)?console.log("you can vote"):console.log("you can't vote");
// console.log((vote>=18)?"you can vote":"you can't vote");

// javascript one sort TPT 3:15:23 




// 👁‍🗨 Section 5   Function in javascript 👁‍🗨

// ******** Function Definition *******

// before we use a function , we need to define it.
// A function definition (also called a function declaration , or function statement )

// consists of the function keyword , followed by:

// A list of parameters to the function , enclosed in parantheses and separated by commas.

// the javascript Statement that define the function , enclosed in curly brackets,{ .... }.


// function Sum(a,b) {
//     // let a =33, b=31;
//     let sum = a+b;
//     console.log(sum)
// }

// Sum(2,4);

// /******* Imp interview Question ************

// What is the Difference Between 
// Function Parameter vs Function Arguments ?

// Function Parameter are the names listed in the function's definition.

// function argument are the real values passed to the function  

// What is function ?

// A function is a group of code of reuseble code which can be called anywhere in your program. this eliminates the need of writing the same code again and again.  

// DRY --> Do not repeat yourself


// function expressions 
// "Function expression simply means 
// create a function and put it into the variable "


// function Sum(a,b) {
//     // let a =33, b=31;
//     let sum = a+b;
//     console.log(sum)
// }

// let funexp = Sum(2,4);



// function Sum(a,b) {
//     return  total =a+b
    
// }

// let funexp = Sum(2,4);
// console.log(funexp);


//6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax
// as a function declaration One can defined "named"
 

// let funexp = function(a,b) {
//     return  total =a+b   
// }
// let sum =funexp(2,214)
// console.log(sum);



// ********💚🧡💚💚🧡💚💚🧡💚💚🧡💚********
// ******** ECMA Script **********

// 💚Now its Time for morden Javascript 💚

// 🤚🏼 Feactures of ECMASCript 2015 also known as ES6


// 1️⃣ LET vs CONST vs VAR

// var => function Scope
// let and const => Block Scope


// 2️⃣ Template literalss (template Strings)

// javaScript program to print table for given number(8)?

// for(let num=1 ;num<=10;num++){
//     let tableOf = 12;
//     // console.log(tableOf +" * "+num + " = " +tableOf*num );
//     console.log(` ${tableOf} * ${num} = ${tableOf*num} `);
// }


// 3️⃣ Default parameter 

// function mult(a,b=5){
//     return a*b
// }
// console.log(mult(54))



// 6️⃣ Fat Arror Function

//  Normal Way of Writing function 

// console.log(sum());
// function sum() {
//     let a=5;b=6;
//     let sum = a+b;
//     return `sum is ${sum}`;
// }

// how to convert in  into fat arrow function

// const sum = () => `sum is ${(a=5)+(b=6)}`;
// console.log(sum());


// ********💚🧡💚💚🧡💚💚🧡💚💚🧡💚********
// ********* Array in Javascript********* 

// Array in Js we can store multiple datatype in array

// let myfriend = ['Sham',21,"sundar",33,"pisha",21,true];

// store multiple value in single array varible


// In Javascript ,we have an array class,and 
// array  are the prototype of this class. 

// let myfriend1 = ['Sham',21,"sundar",33,"pisha",21,true];



// 1️⃣ Array subsection 1 ➡️ Traversal in array
// navigate through an array 

// if we to get the Single data at a time and also 
// if we want to change the data 

// let myfriend1 = ['Sham',21,"sundar",33,"pisha",21,true];

// for(let i =0;i<myfriend1.length; i++){
//     console.log(myfriend1[i])
// }
// console.log(myfriend1[myfriend1.length -1])

// for check length
// console.log(myfriend1.length)


// loop with array 
// let myfriend2 = ['Sham',"sundar","pisha"];
//******** for in loop print index number *********
// for(let i in myfriend1){
//     console.log(i)
// }


//********* for in loop print element ********

// for(let elements of myfriend1){
//     console.log(elements)
// }



// Array.prototype.forEach()
// calls a function for each element in the array.

// let myfriend2 = ['Sham',"sundar","pisha","man"];


// myfriend2.forEach(function(element,index,array){
//     console.log(element +" index : "+index+ " "+ array);
// } );



// myfriend2.forEach((element,index,array)=>{
//     console.log(element +" index : "+index+ " "+ array);
// })


// 2️⃣ Array subsection 2 ➡️ Searching and filter in an array

// Array.prototype.indexOf()

// let myfriends = ["man",'Sham',"sundar","pisha","man"];

// index of Show the first index number 
// console.log(myfriends.indexOf("man"))
// console.log(myfriends.indexOf("man",6))



// Array.prototype.lastIndexOf()
// console.log(myfriends.lastIndexOf("man"))
// method returns the index (position) of the last occurrence of a specified value in a string or array.


// *************************************************************
// 4️⃣ Array subsection 2 ➡️ Perform CRUD

// Array.prototype.push()
// the push() method adds one or more element to the end of an array and returns the new length of the array.

//  const animals = ['pigs','goats','sheep'];

// let count1 = animals.push('chicken','cats','cow')
// console.log(animals)
// console.log(count1)

// ******* Array.prototype.unshift()  *********
// the unshift() method adds one or more element to 
// the beginning of an array and returns the new length of the array.

// const animals = ['pigs','goats','sheep'];
// let count2 = animals.unshift('chicken','ram')
// console.log(animals)
// // console.log(count2)

// // 2nd example
// const myNumber = [1,2,3,5];
// myNumber.unshift((4,6))
// console.log(myNumber); 


// ******** Array.prototype.pop()  ********

// the pop() method removes the last element from an returns that element. the method change the length of the array.

// const bro_ = ['bro','bhai','para','Gale','tom'];

// console.log(bro_); 
// console.log(bro_.pop())
// console.log(bro_); 


// ****** Array.prototype.shift() *******
// shift() method removes the first element from an array  and returns 
// that removed element. this method change the length of a array.

// const bro_ = ['bro','bhai','para','Gale','tom'];

// console.log(bro_); 
// console.log(bro_.shift())
// console.log(bro_); 



// 😄8: challange time 🤍

// ****** Array.prototype.shift() *******
// Adds and/or removes elements from an array.

// 1:  Add Dec at the end of an array? 
// 2:  What is the return value of splice method?
// 3:  Update march to March (update)?
// 4:  Delete june form an array?
// splice(start,delete,update);
// splice(1,1,"March")

// const month = ['Jan','march','April','june','july'];

// sol1:
// const newMonth = month.splice(month.length,0,"Dec");
// console.log(month)

// sol2:
// console.log(newMonth)

// sol3:
// const updateMonth = month.splice(1,1,"March")
// console.log(updateMonth)

// const indexOfMonth = month.indexOf('march');
// if(indexOfMonth!= -1){
//     const updateMonth = month.splice(indexOfMonth,1,"March")
//     console.log(month)

// }else{
//     console.log('No Such data found');
// }

// // Sol4:
// const month = ['Jan','march','April','june','july'];

// const indexOfMonth = month.indexOf('june');
// if(indexOfMonth != -1){
//     const updateMonth = month.splice(indexOfMonth,1);
//     console.log(month);
//     console.log(updateMonth);

// }else{
//     console.log('No Such data found');
// }




// // Sol5:
// const month = ['Jan','march','April','june','july'];

// const indexOfMonth = month.indexOf('April');
// if(indexOfMonth != -1){
//     const updateMonth = month.splice(indexOfMonth,Infinity);
//     console.log(month);
//     console.log(updateMonth);

// }else{
//     console.log('No Such data found');
// }


// 5️⃣ Array Subsection 4 ➡️ MAp and Reduce Method

// Array.prototype.map()

// let newArray = arr.map(callback(currentValue[,index[,array]])){
    //return element for newArray, after executing Something 
// }[,thisArg]);

// Returs a new array containing the results of calling a 
// function on every element in this array.

// const array1 = [1,4,9,16,25];

// let newArr = array1.map((currEle,index,arr)=>{
//     return currEle>9;
// })
// console.log(array1);
// console.log(newArr);





 
// javascript one sort TPT 6:00:23  





