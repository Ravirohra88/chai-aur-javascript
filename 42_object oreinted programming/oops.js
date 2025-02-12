const user1 = {
    username : "Ravi Rohra",
    age: 19,
    signedIN : true,

    userdetail: function() {
        console.log(`username: ${this.username}`);
        
    }
}
console.log(user1.userdetail());


// constructor function
function user(username ,logincount , signedIn){
    this.username = username;
    this.logincount = logincount
    this.signedIn = signedIn
     this.greeting = ()=>{
        console.log(`welcome ${username}`);
        
     }

    return this
}

const Ravi = new user("ravirohra",55 ,true);
console.log(Ravi);
