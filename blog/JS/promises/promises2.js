 
// creates a promise
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(5);
  }, 300);
});

// returns a promise
function promise2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(7)
    }, 300);
  })
}

// this returns an object whose status is pending.
// when finished, its status will be resolved, and it will contain a value
// that we can retrieve via .then (see below)
console.log("premature - ", promise1);


// p1 is an object which contains a .then method
promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
 
});
// p2 is function that whne called, returns a prom object with a .then
promise2().then(function(value) {
  console.log(value)
  console.log('here')
})

// async / away only works to call functions that return promises. 
// everything in async function is synch
async function delay() {
  // p2 works b/c it is a function that returns a promise object (with .then) 
  // p1 wouldn't work b/c it is a object, and objects can't be called.
  var x = await promise2()
  return x
 }

delay().then(function(data) {
  console.log("async / await")
  console.log(data)
});
//

function slow() {
  return new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(5)
  }, 3000)
})
}
// async will return a promise to inter()
async function inter() {
  // but slow() must also return a promise for 'await'
  var x = await slow()
  return x
}

inter().then(function(data) { console.log(data)})