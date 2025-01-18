// let pubgUser = new Object() //singleton (constructor method)
const pubgUser = {}
pubgUser.id = 1234567890
pubgUser.username = "ravirohra2802"
pubgUser.isloggedin = true

// console.log(pubgUser);

const freefire = {
    uniqueId : 1123456789,
    username:{
        name: "ravisr88",
    }
}
// console.log(freefire.username.name);

const  object1 = { 1:"ravi", 2:"rohra"}
const object2 = {3:"rohit", 4:"rohra" }
const object3 = { }

const  object4 = Object.assign( {}, object1, object2 )
// let object4 = {...object1 , ...object2}
console.log(object4);



// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


const bgmiuser =  [
    { uniqueId : 1123456789,
        username:"ravisr88"
       
        },      
    { uniqueId : 123456789,
        username:"ravisr88"
             
        },
    { uniqueId : 1123456789,
        username:"raisr88"
             
        }
]
console.log(Object.keys(pubgUser));
console.log(Object.values(pubgUser));
console.log(Object.entries(pubgUser));
console.log(Object.entries(pubgUser));
console.log(pubgUser.hasOwnProperty("id"));

