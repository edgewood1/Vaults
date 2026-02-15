// DESTRUCTURING
// nested objects

const person = {
    first: 'Wes',
    last: 'Bos',
    friends: { 
      best: "John", 
      freakiest: "Wilma"
      }
};

// Dimension 1
  const { friends, last } = person;
  console.log(friends) // Wes

// Renaming

  let {first: f, last: l} = person;
  console.log(f)

// Dimension2: // go to object.property then pick out the key there. 
  const { best } = person.friends;
  console.log(best) // John

// ARRAYS
// we can assign any name, but order matters:

  const numbers = [1, 2, 3, 4, 5, 6]
  var [a, b, c] = numbers;
  console.log(a); // 1

  // mixture (an array inside an object.)

  const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: ['a', 'b'],
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
  };


  const { twitter, facebook } = wes.links.social;
  console.log(twitter[0], facebook); // logs the 2 variables 

  // object in an array

var obs = {
  a: 7, 
  b: 3
}

  var arr = [1, 2, obs]

  var [a, b, c] = arr

  

  // does it matter side? var des = [a, b, c]
  
 
  console.log(b)

 let [t] = ['a']  // ??? 
 console.log(t)


//  http://2ality.com/2015/01/es6-destructuring.html


//  http://exploringjs.com/es6/ch_destructuring.html#sec_overview-destructuring

**destructure**

**objects**

var luke = { occupation: "Jedi", father: "Anakin" };

list keys of object, and they become variables whose value remains:

var { occupation, father } = luke;

now, occupation = Jedi

---

- create an object - a string variable becomes a key; its value remains
  const x = "a"
  const y = {x} // variable = string becomes key: value
  console.log(y) // {x: "a"}

**extract the value**
const {x: z}
console.log(z) // gets "a"

**used as default values**
const divide = (a = 4, b = 2) => a / b;
console.log(divide()); // 2
**arrays**

var racers = ["Anakin", "Gasgano", "Aldar Beedo", "Ebe E. Endocott"];

[one, two] =racers;

console.log(two) // Gasgano



Destructuring

A JS expression that allows us to extract data from data structures into their own variable. 

const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
};
const first = person.first;
const last = person.last;

instead of making multiple such variables, we could destructure them onceas so with destructing syntax.

const { first, last } = person;

This grabs the variable first and last and take it from the person object
