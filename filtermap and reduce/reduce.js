const numb = [1,2,3]
// const total = numb.reduce( function (acc , currentvalue){
//   console.log( `acc:${acc} currentvalue: ${currentvalue}`);
  
//     return acc + currentvalue
// },10  )

const total = numb.reduce( (acc, currentvalue) => acc+currentvalue,0)

console.log(total);

const shopcart = [
    {
        item : "milk", 
        price :30
    },
    {
        item : "bread",
        price :40
    },
    {
        item : "parle g", 
        price :10

    }
]

let totalbill = shopcart.reduce((acc,item)=>acc + item.price,0)
console.log(totalbill);
