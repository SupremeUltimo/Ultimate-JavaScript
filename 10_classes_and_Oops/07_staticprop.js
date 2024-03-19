class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username} `);
    }
    // static keyword prevint the f
    static createId(){
        return "23s4ssd54erd"
    }
}

const meUser = new User('shehbaz');
// console.log(meUser.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());