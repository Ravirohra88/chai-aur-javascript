const promiseOne = new Promise((resolve, reject) => {
//     //do an async tasks 
//     //db calls ,network , cryptography
//     setTimeout(() => {
//         console.log("async task ");
//         resolve()
//     },1000 ); 
// })


// promiseOne.then( function () {
//     console.log("promise completed");
    
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async task rvi");  
//         resolve()
        
//     }, 1000);
// }).then(()=>{
//     console.log("async ravi");
    
// })


// const promise2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve({username: "ravi" ,email: "ravirohra88@gmail.com"})
//   }, 1000);  
// })
// promise2.then((user)=>{
// console.log(user);

// })



// const promise3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     let error = true;
//     if(!error){
//         resolve({username: "ravi" ,email: "ravirohra88@gmail.com"})
//     }else{
//         reject("Error: something went wrong")
//     }
//    }, 2000); 
// })
// promise3.then((user)=>{
// console.log(user);
// return user.username

// }).then((username)=>{
//     console.log(username);  
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("promise is rejected or completed");
    
// })
