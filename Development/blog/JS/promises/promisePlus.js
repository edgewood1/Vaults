// why promise? 

var msg;

function delay() {
  setTimeout(function(){
    msg = "your response"
    return msg;
  }, 2000)
  return msg
}

// var x = delay()

// console.log(x)



// two ways to fix: 


function delay1() {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      msg = "your response"
      resolve(msg)
    }, 2000)
    
  })

}

// delay1().then(function(x){

//   console.log(x)
// })


// or - 

var p = new Promise(function(resolve, reject) {
  setTimeout(function(){
    msg = "your response"
    resolve(msg)
  }, 2000)
})
// p is not a function, but a promise object
// it has various methods > .then
console.log(p)
// p.then(function(x) {
//   console.log(x)
// })

//async await

// call our slow function, which doesn't return a promise
var x
// inter returns object
async function inter() {
  // but delay must return an object
  x = await delay1()
  return x
} 

inter().then(function(data) {
  console.log(data)
})
  

// if delay1 must return a promise, 
// what is the point of creating the intet await
// 

