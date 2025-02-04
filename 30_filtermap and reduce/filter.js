// const lang =[ "sindhi ","hindi ", "marathi"]
//   const val = lang.forEach(   (item)=> {
//     // console.log(item);
//     return item;
    
// })
// console.log(val);


const nums = [1,2,3,5,67,89,0]

// const newnums = nums.filter((num)=> {
//      return num < 9
// })
// // console.log(newnums);

// const numbers = []
// nums.forEach((num) => {
//     if (num<10) {
//         numbers.push(num)
//     }
    
// });
// console.log(numbers);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let usergallary =  books.filter( (fav) => fav.genre === 'Fiction')

    usergallary  = books.filter( (fav)=> {
        return fav.publish <=2005 && fav.genre === 'H istory'
    })
  console.log(usergallary);
  
