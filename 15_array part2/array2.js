let arr = [1,2,3,4,5,6,7,]
let arr2 = [7,8,9,0]
// arr.push(arr2)
// console.log(arr);

// allInOne = arr.concat(arr2)
// console.log(arr);

// oneforall = [...arr,...arr2]
// console.log(oneforall);

allforOne = [1,2,3,4,5,6,7,8,9,0,[1,3,4,5,6,[1,3,4,5,6,7]]]
console.log(allforOne.flat(Infinity));

console.log(Array.isArray("ravi"));
console.log(Array.from("ravi"));
console.log(Array.of(arr,arr2));
