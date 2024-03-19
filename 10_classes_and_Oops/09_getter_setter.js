class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase();
        return `r4df65x4c${this._password}sdf3dc`;
    }
    set password(value){
        this._password = value 
    }
}


const shehbaz = new User("Ultimo@gmail.com","3sd24f5dg");
console.log(shehbaz.password); 
console.log(shehbaz.email); 