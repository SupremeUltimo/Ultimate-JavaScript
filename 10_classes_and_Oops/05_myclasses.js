// // ES6

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return  `${this.password}fdssdfddzx`
//     }
//     UserNameUpperCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const meuser = new User("shehbaz","helo@gmail.com","12346");

// console.log(meuser.encryptPassword());
// console.log(meuser.UserNameUpperCase());

// ======================================
// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}


User.prototype.encryptPassword = function(){
    return  `${this.password}fdssdfddzx`
}

User.prototype.UserNameUpperCase = function(){        
    return `${this.username.toUpperCase()}`
}

const tea = new User("Ultimo","ultimo@gmail.com","123");

console.log(tea.encryptPassword());
console.log(tea.UserNameUpperCase());