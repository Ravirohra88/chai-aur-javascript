let family = {
    rr: "ravi rohra",
    dd: "daya didi ",
    gr : "gunjan rohra"

}

for (const value in family) {
   console.log(`${value} short form of ${family[value]}`);
   
}

const lang = [ "sindhi", "punjabi", "hindi "]
for (const key in lang) {
  console.log(lang[key])
} 

// map is not iteratable in forin loop