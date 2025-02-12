function addusername(username) {
    this.username = username
    console.log("called");
    
}
function newuser(username , email , password) {
    addusername.call(this,username)
    this.email = email
    this.password = password
}

const ravi = new newuser("ravi", "ravi@mail.com","1234567")
console.log(ravi);
