 
const old = [
  {a: 6, b: 3},
  {a: 1, b: 1},
  {a: 3, b: 3}, 
  {a: 1, b: 3}, 
  // {a: 5, b: 5}
]
 

const scrape = [
  {a: 1, b: 1},
  {a: 5, b:5}, 
  {a: 2, b: 4}
]
 
 

///

var good
// stringify items in arr1
var old1 = old.map(e => JSON.stringify(e));
// iterate through arr2, comparing to stringified items from arr2
good = scrape.filter(e=> !old1.includes(JSON.stringify(e)))
console.log(good)
