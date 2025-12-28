// var greetingPromise = sayHello();
// greetingPromise.then(function (greeting) {
//     console.log(greeting);    // 'hello world’
// });
// // console.log(greetingPromise)

// function sayHello() {
//  
//  return "hellow world"


// symbols used as property keys

let my_key = Symbol();
let obj = {}

obj[my_key]= 123;


 
const x = Symbol("x")
var y = {};

y = {
    x: x
}

y.x = 5;
 
console.log(y.x)
console.log(typeof(y.x))


var z = String(5)
 
    
 

// var x = 5 
console.log(typeof(z))

z = 5;
console.log(typeof(z))


// https://www.phpied.com/3-ways-to-define-a-javascript-class/https://www.phpied.com/3-ways-to-define-a-javascript-class/


var collection = {}

collection['a'] = 123; 
collection[333] =" hellow"



collection[333] = "wow"; 

// overwritten above -- 

// how to not overwrite? 
let sym = Symbol("oh")
collection[sym] = "here";
let sym2 = Symbol("oh")
collection[sym2] = "here";
console.log( sym === sym2)
console.log("here --- ", collection[sym] === collection[sym2])

 


collection[sym] = " xx here";

for (var g in collection) {
    console.log(collection[g])
}
// you can't enumerate a symbol -- 
// console.log(Object.keys(collection))
// so you have to use: -- only access sybmol vlaues
console.log(Object.getOwnPropertySymbols(collection))


// to get ALL

console.log(Reflect.ownKeys(collection))


// if not found, it will create one: 

// console.log("new " + Symbol.for('sym'))

// you can't access symbols explicitly 
// you can't converty / use sybmol as if it were a string -
// var foo = Symbol('foo')
// "it is " + foo; // error 
// youd  have to do this: 
// var x = 'hello' = String(foo) -- but not a pure conversion



console.log(collection)


var sym3 = Symbol() 
var sym4 = Symbol() 
 
console.log(sym3 === sym4) // false  
 
var obj2 = {}
obj2.sym3 = 5
obj2.sym4 = 5
console.log(obj2.sym3  === obj2.sym4)

