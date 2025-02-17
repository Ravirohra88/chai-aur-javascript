// class user{
//     constructor(username, email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }


//     passwordEncrypt (){
//         return`${this.password}ravi`
//     }
//     lowercase (){
//         return `${this.username.toLowerCase()}`
//     }
// }

// const ravi = new user("Ravi","ravirohra@88gmail.com" ,"123456" )
// console.log(ravi.passwordEncrypt());
// console.log(ravi.lowercase());

//BTS
 function user(username, email , password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    user.prototype.lowercase= function () {
        return `${this.username.toLowerCase()}`

    }
    user.prototype.passwordEncrypt= function () {
        return`${this.password}ravi`

    }
     const ravi = new user("Ravi","ravirohra@88gmail.com" ,"123456" )
console.log(ravi.passwordEncrypt());
console.log(ravi.lowercase());
