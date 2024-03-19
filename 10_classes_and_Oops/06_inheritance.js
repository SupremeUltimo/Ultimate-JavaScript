class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username} `);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email
        this.password = password
    }

    AddCourse(){
        console.log(`Add New Course was Added by ${this.username}`);
    }
}

const meobject = new Teacher("SHEHBAZ","SHEHBAZ@gmail.com","23324");

meobject.AddCourse();

