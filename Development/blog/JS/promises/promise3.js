// immeidately resolved: 

var p = Promise.resolve("foo");

p.then((res) => console.log(res))

// asynch: 

var p = new Promise(function(resolve, reject) {  
    console.log("a")
    console.log('b')
    setTimeout(() => resolve(4), 2000);
    console.log('c')
 });

 p.then((res) => {  
    res += 2;  
    console.log(res);
  });

  // still gets 4
p.then((res) => console.log(res));

 
// setTimeout is a function call that takes 2 arguments: 
// a callback and a time
// after the time has passed, the function is invoked:
setTimeout(
    function() {
        console.log("yeah")
    }, 2000)

// in es6 terms
setTimeout(
    () => {
        console.log("wow")
    }, 2000
)
