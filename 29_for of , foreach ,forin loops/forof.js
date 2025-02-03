// for of 
let arr1 = [1,2,4,5,6,7,8]
for (const arr of arr1) {
    console.log(arr);
    
}

const greeting  = "namaste"
for (const grrt of greeting) {
    console.log(`namaskarm = ${grrt}`);
    
}


//  maps 
const map = new Map()
map.set('rr', "ravi rohra ")
map.set('sr', "sunil rohra")

for (const [key, values] of map) {
    console.log(`${key} ::- ${values}`);
     
}
// we cnnot use forof loop for objects