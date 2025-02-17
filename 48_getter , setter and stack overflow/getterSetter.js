class user {
    constructor(email , password)    {
       this.email = email
       this.password = password  
    }


    
    get email(){
        return this._email.toUpperCase()//return setter  everytime
    }
    set email(value){
              this._email = value//never return setter
    }//use value in set

    
    get password(){
        return this._password.toUpperCase()//return setter  everytime
    }
    set password(value){
              this._password = value//never return setter
    }//use value in set
}
const hitesh = new user("ravirohra@gmail.com" , "abc")
console.log(hitesh.email,hitesh.password);
