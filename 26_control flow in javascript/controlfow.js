
// // conditional code if/else

// let temp = 59

// if (temp<40){
//  console.log("it is cool now ");
 
// }
// else{
//     console.log("it is hot outside");
    
// }

// const score = 200 
// if (score > 100) {
//     const power = "smash"
//     console.log(`power: ${power}`);
 
// }
// console.log(power);


// const money = 1000 
// if (money <100) console.log(`your money is less than ${1000}`);


// if (money< 500){
//      console.log("less than 500" );
     
// }
//  else if (money<600) {
//     console.log("money is less than 600");
    
//  } else {
//     console.log(`money in your acc is ${money}`)
//  }


let userloggedin = true 
let netBanking = true;
let loggedinfromgoole = false
let loggedinfromyahoo = true 
if (userloggedin && netBanking) {
    console.log("allow user for shopping");
    
    
} if (loggedinfromgoole || loggedinfromyahoo) {
 console.log("allowed for shopping");
    

} else {
console.log("not allowed for shopping");
  
}