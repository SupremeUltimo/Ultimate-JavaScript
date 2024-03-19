const user ={
    name : "shehbaz",
    price : 199,

    wecomeMessage : function () {
        console.log(`my name is ${this.name} and pizza prise is ${this.price}`);
        console.log(this);
    }
}

// user.wecomeMessage()
// console.log(this);


// function chai(){
//     let username = "SHEHBAZ";
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1,num2)=> (num1+num2)


const addTwo = ()=> ({name:"shehbaz"})

console.log(addTwo ());




