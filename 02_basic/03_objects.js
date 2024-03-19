// singleton 
//object.create


//object Literal
const mysym = Symbol("Key1");

const jsUser = {
    name:"Shehbaz",
    "Last name":"Khan Kamal",
    age:19,
    [mysym] : "key23",
    Location:"Delhi",
    gmail:"iamshehbaz01@gmail.com",
    isLogdin:true,
    LastLogdinDay:["Sunday","Monday"],
    fullname:{
        userFullname:{
            myname:"Shehbaz",
            lname:"khan"
        }
    }
}

// console.log(jsUser.gmail);
// console.log(jsUser["gmail"]);
// console.log(jsUser["Last name"]);
// // console.log(jsUser.mysym); 
// console.log(jsUser[mysym]);


// jsUser.name = "Salman khan";
// // Object.freeze(jsUser);
// // jsUser.name = "khan";

// console.log(jsUser);
// console.log(jsUser.fullname.userFullname.myname);


// jsUser.greeting = function() {
//     console.log(`Hello user name is  ${this.name}`);
// }
// console.log(jsUser.greeting());



// Combine object 
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"C",4:"D"}
// const obj3 = {5:"C",6:"D"}

// const rus = Object.assign({},obj1,obj2,obj3)
// console.log(rus);
// console.log({...obj1,...obj2,...obj3});


const user = [
    {
        id:1,
        email:"iamshehbaz01@gmail.com"
    },
    {
        id:1,
        email:"iamshehbaz01@gmail.com"
    },
    {
        id:1,
        email:"iamshehbaz01@gmail.com"
    },
]

// console.log(user[1].email);


console.log(Object.keys(user));
console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));

// Check object have property or not result Boolean
// console.log(jsUser.hasOwnProperty('age'));




