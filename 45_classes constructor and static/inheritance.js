class user {
    constructor(username) {
        this.username=  username
    }
    login (){
        console.log(`${this.username} just loggedIn `);
        
    }
}

class teacher extends user{
    constructor(username,password , email){
        super(username)
        this.email = email
        this.password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}
const ravi = new teacher("ravi " , "ravirohra88@gmail.com", "12345")
ravi.addCourse()

const masalachai = new  user("masalaTea")
masalachai.login()
console.log(ravi instanceof user);
