let  date = new Date()// date object
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toLocaleTimeString());
console.log(date.toString());
console.log(date.toJSON());
console.log(typeof date);

// let birthdate = new Date(2025 , 1 , 28)
// console.log(birthdate.toString());//months start with index0
let birthdate = new Date("1-17-2025");
console.log(birthdate.toLocaleString());

let timestamp = Date.now()


console.log(timestamp);
console.log(birthdate.getTime());
console.log(Math.round(Date.now()/1000)) //to conert it into seconds

let datee = new Date()
console.log(datee.getDate());

// console.log(`${datee.getDate()} that is the date of today`)

datee.toLocaleString('default',{
   day:"numeric" 
})


console.log(datee.toLocaleString());



