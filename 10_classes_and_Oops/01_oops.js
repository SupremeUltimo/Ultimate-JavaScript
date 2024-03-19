// const user = {
//     username : "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails : function(){
//         // console.log('Got user Details from dataSet');
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.getUserDetails());



function User(username,loginCount,loggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = loggedIn ;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}


const Userone = new User("Shehbaz",6,true);
const UserTwo = new User("Salman",10,false);



console.log(Userone.constructor);
console.log(UserTwo);







