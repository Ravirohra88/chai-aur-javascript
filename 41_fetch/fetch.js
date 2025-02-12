fetch('https://api.github.com/users/Ravirohra') 
.then((response)=> {
 return response.json()

}).then((data)=>{
  console.log(data);
  
})
.catch((error)=>{
    console.log("e:", error);
    
})

