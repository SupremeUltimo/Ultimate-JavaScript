// let name = "Shehbaz        ";
// let mychanel = "Chai   ";

// console.log(myName.trueLenght);



let myHeros = ["Superman","Batman"]

let heroPower = {
    Superman:"light",
    Batman : "SuperSpeed",

    getBatmanPower: function() {
        console.log(`Batman power is ${this.Batman}`)
    }
}

Object.prototype.shehbaz = function() {
    console.log("Shehbaz is present in all subject")
}

Array.prototype.heyShehbaz = function() {
    // 7:48
    console.log(`Shehbaz says hello`);
}

// console.log(heroPower.getBatmanPower());

myHeros.shehbaz();
// heroPower.shehbaz();


myHeros.heyShehbaz();
// heroPower.heyShehbaz();



// =======================================
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()