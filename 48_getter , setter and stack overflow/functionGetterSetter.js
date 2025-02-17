function user(email , password) {
    this._email = email;
    this._password = password
       
    Object.defineProperty(this,'password',{
        get: function () {
            return this._password.toUpperCase()
        },
        set:function (value) {
            this.password = value
        }
    })
       
    Object.defineProperty(this,'email',{
        get: function () {
            return this._email.toUpperCase()
        },
        set:function (value) {
            this.email = value
        }
    })

}
const ravi=  new user("ravirohra88@gmail.com", "123abc")
console.log(ravi.password);

