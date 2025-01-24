// IMMEDIATEDLY INVOKED FUNCTION EXPRESSION (IIFE)
(function num(num1 ,num2) {
    console.log(num1 +num2);
    
})(1,2);
( (num1,num2) =>{
    console.log(num1+num2)
    console.log( `hello guys the ans is ${num1 +num2}`)
}  )(11,23) 