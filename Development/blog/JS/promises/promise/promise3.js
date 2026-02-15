// ONE
// our slow api
// i must pass in the resolve callback as an argument.
// i use it to return value rather than 'return'


// define the callback.  this:
// 1. uses resolve and reject
// 2. calls our slow api

var callback = function(resolve, reject) {
  later(resolve);
};

//TWO
// create a Promise Object
var p1 = new Promise(callback);

// THREE
// our Promise Object(p1) stores the value
// when ready, value passed on to the argment contained
// in the function passed into "then"
p1.then(function(x) {
  console.log(x);
});


// or

// create promise
var p1 = new Promise(function(resolve, reject) {
  later(resolve)
});

// call promise
p1.then(function(x) {
  // use the data
})

  function later(resolve) {
    setTimeout(function() {
      // finished? call resolve
      resolve(2);
    }, 2000);
  }
)
  //
 
  // 
  // You can create a promise using the new keyword

// 
// the promise takes a function that it will run
// this function takes two arguments, resolve or reject
// the function body is run and will return resolve or reject
// so we call call our target function, passing in resolve
// we can call the resolve method, passing in a value
// this value is passed to the Promise itself, (p1)
// the then method will pass it to the argument of a second function 
// in this body, it can be used. 
// at anytime we could call the reject method, and pass in an error value
// above, our promise is called "p1"
// we "call" our promise
