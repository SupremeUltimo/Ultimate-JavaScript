const User ={
    _email : "salmon@gmail.com",
    _password:"12dsd",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }

}

const tea = Object.create(User);
console.log(tea.email);