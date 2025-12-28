https://javascript.info/async-await

// our slow api
function api() {
  return new Promise(function(resolve, reject) {
     setTimeout(function() {resolve(5);}, 2000)
  })
}

// need to call a slow api? wrap it in an "sync" function
// async initiates synchron inside its function
async function here() {
  var y =await api() // we will wait for this to resolve before moving on... 
  now(y); // 1
  return y;  //2
  
}
// 2 approaches 

// 1. wait for the sync function to call you
function now(y) {
  console.log(y)
}

// 2. call the sync function - async returns a promise, so...
here().then(function(data) {
console.log(data)
})
// 
