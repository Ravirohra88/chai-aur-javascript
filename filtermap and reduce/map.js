const numb  = [1, 2, 3, 4, 5, 6, 7, 8]

// const number = numb.map( (num)=> { return num +100})
const number  = numb
                  .map((num) => num+10 )
                  .map((num)=> num +11)
console.log(number);
