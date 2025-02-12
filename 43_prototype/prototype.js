// let myName ="ravi     "
// let mysurname = "rohra  "
// console.log(myName.truelength);


let heros  = ["sakthiman", "blackpather"]

let heropower = {
    sakthiman: "controversy",
    blackpanther: "vibrenium",

    blackpantherpower: function () {
        console.log(`blackpanther power is ${this.blackpanther}`);
        
    }
}
console.log(heropower);

Object.prototype.ravi  = ()=>{
    console.log(`ravi is watching you`);
    
}

Array.prototype.badepappaji = ()=>{
    console.log(`ravi is in arrAY`);
    
}

heros.badepappaji()
heros.ravi()
// heropower.badepappaji()
  


// inheritance
  const User = {
    name : "ravi",
    email: "ravirohra88@gmail.com"

  }
  

  const company = {
    makeDeals : true,

  }
const hr = {
    hiresupport :true,
 __proto__ :company
}
const employ = {
    works: false
}
// __proto__
//modern syntax 
Object.setPrototypeOf(employ,hr)



let username = "ravirohra      "
String.prototype.truelength = function                    (){
    console.log(`${this}`);
    console.log(`truelength is: ${this.trim().length}`);
    
    
}

username.truelength()
"ravi".truelength()