code

const c = [1, 2, 3]

const newArray = c.map(a => {
  let x = [];
  arr(a)
  function arr(b) {
    if (Array.isArray(a)) x.push(b)
    if (!Array.isArray(a)) arr(b)  
   }

  return x
})


// const b = newArray(c)
console.log(c, newArray)


====

const a = {
  name:'mel',
history: {
  birth: 'happy'
}
}

const b = Object.assign({}, a)

b.history.birth = "jay"
console.log(a);

let c
let d = [
  c, 1, 2
];

d = d.filter(e => e)

console.log(d)

====

class x {
  constructor() {
    this.name = 'mel'
  }
  static get prop() {
    const abc = 'hello';
    return `hello ${abc} ${x.constructor.name}`;

  }
}

console.log(x.prop);

=====


type oz = {
  name: string
}
type az = {
  age: number
}
type c = {
  hobby: string
}

let a: oz;
let b: oz;
a = { name: 'mel', age: 3 } as (oz & az);

b = { name: 'mel', age: 3 } as (oz | az);

===

https://stackoverflow.com/questions/34780416/access-constructor-var-in-static-method-es6

https://stackoverflow.com/questions/47984971/is-it-possible-to-access-variables-and-functions-inside-static-methods-of-class

youtube


The Node.js Event Loop: Not So Single Threaded

How to Set Up a Proxy in Windows 10

----

https://medium.com/@kennethrohde/a-bit-about-lit-html-rendering-2964c50ee56c

====
open-wc 
====

https://open-wc.org/docs/development/lit-helpers/

typescript 

https://www.valentinog.com/blog/this/

https://exploringjs.com/tackling-ts/ch_typescript-essentials.

https://dev.to/shakyshane/type-assertions-vs-declarations-the-dangers-of-as-in-typescript-1caf

recursive  

https://www.javascripttutorial.net/javascript-recursive-function/

behind scenes --

https://levelup.gitconnected.com/what-does-create-react-app-actually-do-73c899443d61

scripts


class Main {
  pay(price){}
}

class Master extends Main {
  pay(price){
    console.log('master:', price)
  }
}

class Visa extends Main {
  pay(price) {
    console.log('visa', price)
  }
}

class Manage {
  constructor(payType) {
    this.payType= payType;
  }
 pay(price){
    return this.payType.pay(price);           
 }
}
  
function dopay(obj){
  if (obj.value == "Master") {
    var paymanager = new Manage(new Master())
    paymanager.pay(100)
  }
}
  
const obj = {value:'Master'}

dopay(obj)
  
const obj1 = {
	a: 43,
	getA: function() {	
		console.log(this.a)
	},
    getA2: () => {
      console.log(this.a)
    }
    
}
obj1.getA()
obj1.getA2()

function jay(mel) {
  this.mel = mel
}

console.log(jay)

note s--- 

wesbos

frontendmasters - hardcore functional programming - 

udemy - js algo and data / colt steele 

https://javascript.info/currying-partials

pTYx-1E8

pTYx-1E8

Markham77!

Mel DeJesus (a704676)

https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/

concepts

static 

cli with node

https://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor

js

https://medium.com/swlh/making-objects-iterable-in-javascript-252d9e270be6


git 

https://devconnected.com/how-to-remove-files-from-git-commit/

