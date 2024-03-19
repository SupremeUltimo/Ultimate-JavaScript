
// function multiplyBy5(num) {
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(num));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);



function CreateUser(Username,score) {
    this.Username = Username,
    this.score = score
}

CreateUser.prototype.increment = function() {
    this.score++
}
CreateUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`)
}

const chai = new CreateUser("Shehbaz",20);
const Tea = new CreateUser("Shehbaz",200);

chai.printMe();







