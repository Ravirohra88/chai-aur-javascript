let Arr = [0 , 1 ,2,5 ,6, true ,"ravi"]
// console.log(Arr[1]);
 
// const character = ["yamato","ichigo",]

const arr2 = new Array(1,3,45,6,6)
// console.log(arr2);


//  Array method 
arr2.push(55)//adds at back
// arr2.pop() //removes the last element

// arr2.unshift(9) //add element at the start
// arr2.shift()
 console.log(arr2.indexOf(6 ));
 

  const newArr = Arr.join()
console.log(newArr);
console.log(Arr);

// slice and splice

const myArr = Arr.slice(1,3)
console.log(myArr);


const myArr1 = Arr.splice(1,3)
console.log(myArr1);

console.log(Arr)



