// https://hackernoon.com/5-techniques-to-iterate-over-javascript-object-entries-and-their-performance-6602dcb708a8

var arr = ['a', 'b', 'c', 'd']

var obj = {
    w: "one", 
    x: "two", 
    y: "three"
}

// iterate through an array

arr.forEach((el, i) => console.log(el, i));

// iterate through object keys.

for (x in obj) {
    console.log(x)
}

// get values
for (x in obj) {
    console.log(obj[x])
}

// returns an array of [key, value} pairs]

var x = (Object.entries(obj))
console.log(x[0][0]) // returns  the key
console.log(x[0][1]) // returns the value

// since you've converted an object into an array, you can iterate via forEach: 

x.forEach((e, i) => {
    let key = e[0];
    let val = e[1];
    console.log(key, val)
})

// tech 2: object.keys returns an array of keys

// tech 3: object.values returns an array of values

// tech 4: for in loop mentioned above-- FASTEST (tech 1 SLOWEST)

// tech 5: Object.getOwnPropertyNames - same as Object.entries but it also lists all NON_ENUMERABLE properties, such as those inherited from prototype chain
// middle ground. 






////

// arrays vs. objects: 
// use array if order is important - if 1 must come before 2 so that you can pop 1 off before 2
// it also looks easier to use if all of same type.
// array extends Object and provides properties like length and methods like push, pop.
// object if of different types and you need reference property names and order irrelevant.
// object is like a hash table / map, not just a list

// an array consists of lines that can be split up
var z = "yes"
var zz = [1, 2, 3]
var zzz=[z, zz]

// an object keeps its lines together - its a single set of grouped values
var zzz = {
    z: "yes",
    zz: [1, 2, 3]
}

