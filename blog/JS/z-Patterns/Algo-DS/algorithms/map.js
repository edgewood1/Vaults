// map is a data type
// Map constructor 
// it takes an Array of 2-item arrays

// begin with an array of objects
const old = [
  {a: 6, b: 3},
  {a: 1, b: 1},
  {a: 3, b: 3}, 
  {a: 1, b: 3}, 
  {a: 5, b: 5}
]

// turn it into a map

var map1 = new Map(old); 
  
console.log("Map1"); 
console.log(map1); 
 
// JSON>stringigy(value, replacer, space)
// replacerfunction/array to tranfsorm result
// space - how much space to use between brackets? 

//places strings around keys
// this creates an array of 2-item arrays
// now I can use array methods here. 
// const pair = old.map(x => [JSON.stringify(x), true])
// console.log(pair)  // each item is a string
// this turns above into a map "object"
// const map = new Map(pair)
// console.log(map)

// filter through the scrape, keeping only those that match items in map

const scrape = [
  {a: 1, b: 1},
  {a: 5, b:5}
]

// this loops through scrape
// returns an array that contains 2 items: an stringed object and a boolean
// this can now be hash mapped
var ale  = scrape.map(x => [x, true])
ale = new Map(ale)
ale = ale.has(old[0])
// ale  = ale.map(x => console.log(JSON.stringify(x)))

// var map3 = new Map(JSON.stringify(scrape)
console.log(ale)

//this works
var old1 = old.map(e => JSON.stringify(e));
var z = old1.includes(JSON.stringify(scrape[0]))
// console.log(z)
var good
// create an array of
var old1 = old.map(e => JSON.stringify(e));
good = scrape.filter(e=> !old1.includes(JSON.stringify(e)))
// var z = old1.includes(JSON.stringify(scrape[0]))
console.log(good)

///

// const pair = old.map(x => [JSON.stringify(x), true])
// const map = new Map(pair)

// // filter those object does not exist in hash map
// const good1 = scrape.filter(x => !map.has(JSON.stringify(x)))
// console.log(good1)