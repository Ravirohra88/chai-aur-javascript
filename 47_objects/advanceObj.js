const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
console.log(Math.PI)
// Math.PI = 5 ;
// Object.defineProperty(Math , "PI",{
//     writable:true,
//     enumerable: true,
//     configurable: true
// })
   let math = Math.ceil(Math.PI)
   console.log(math);
   let papad = {
    name:"masalapapad",
    price: 180,
    available:true,

    function () {
        console.log(`masala papad is spicy`);
        
    }

   }
   console.log(Object.getOwnPropertyDescriptor(papad, "name"));
   Object.defineProperty(papad, "name" ,{
    enumerable: false,

   })
   for (const [key ,value] of Object.entries(papad)) {
if (typeof value !== "function") {
    console.log(`${key} : ${value}`);

}    
   }