// const promiseOne = new Promise((resolve, reject) => {
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



const promise4 = new Promise((resolve, reject) => {
      setTimeout(() => {
    let error =false;
    if(!error){
        resolve({username: "ravi" ,email: "ravirohra88@gmail.com"})
    }else{
        reject("Error: something went wrong")
    }
   }, 2000); 
})
async function promiseFour() {
 try {
    const response =   await promise4
 console.log(response);
 } catch (error) {
    console.log(error);
    
 }
    
}

promiseFour()

// async function getalluser() {
//     try {
//         const response = await fetch('https://api.github.com/users/Ravirohra')
//         const data =  await response.json()
//         console.log(data);
        
//     } catch (error) {
//        console.log(error);
       
//     }
// }

// getalluser()



fetch('https://api.github.com/users/Ravirohra') 
.then((response)=> {
 return response.json()

}).then((data)=>{
  console.log(data);
  
})
.catch((error)=>{
    console.log("e:", error);
    
})