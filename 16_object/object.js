// singleton
// Object.create();


// Object literals 

const sybol1 =Symbol("ravi ")
const obj = {
    name:" ravi",
    "father name": "sunilkumar Rohra",
    age :19,
    [sybol1] : "ravi ",
    email: "ravirohra88@gmail.com ",
    login: false ,
    activity: ["monday","tuesday"]
}

console.log(obj.email);
console.log(obj["email"]);
console.log(obj["father name"  ]);
console.log( typeof  obj[sybol1]    );

 obj.login = true  
//  Object.freeze(obj)
console.log(obj);

obj.greeting = function () {
    console.log(`hello user ${this.name}` )
}
 console.log(obj.greeting());
 