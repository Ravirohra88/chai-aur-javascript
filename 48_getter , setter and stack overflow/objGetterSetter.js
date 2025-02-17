const User = {
    _email :'ravirohra@88.com',
    _password: 'abx', 



    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
       this._email = value
    }

}
 
const ravi = Object.create(User)
console.log(ravi.email);
