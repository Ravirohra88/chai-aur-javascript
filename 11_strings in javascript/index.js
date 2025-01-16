const name = "ravi "
const postCount = 21;
// old method
// console.log(name + postCount+ " anime");

// // modern method 
// console.log(`hello, my name is ${name} and y post count is ${postCount}`);
// methods
const bgmiId = new String(`ravi-2802`)
console.log(bgmiId[0]);// index

// console.log(bgmiId.__proto__); 

// console.log(bgmiId.length);

// console.log(bgmiId.toUpperCase())
// console.log(bgmiId.toLowerCase())

// console.log(bgmiId.charAt(3)); dispay the character
console.log(bgmiId.indexOf('8'));


// let newString = bgmiId.substring(0,5)
// console.log(newString)
// let anotherString = bgmiId.slice(1,3)
// console.log(anotherString)

let newString1 = "  ravi   "
console.log(newString1);

console.log(newString1.trim())

let url = "https:ravirohra.com/ravi%20rohra"
console.log(url.replace('%20','-'))
// console.log(url.includes('abhimanyu')); boolean check
console.log(bgmiId.split('-'));






