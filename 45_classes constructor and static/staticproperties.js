class user {
    constructor(username) {
        this.username=  username
    }
    login (){
        console.log(`${this.username} just loggedIn `);
        
    }
    static createId(){
    return`123r`
    }
}
const ravi  =new user('ravi')
console.log(ravi);
console.log(ravi.createId()
);

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    
    }
    }


    const ravirohra88 = new teacher("ravi ","Ravi@mail.com");
    ravirohra88.createId()
    