// Promise is an object that has a resolve method
// 



// create promise
var p1 = new Promise(function(resolve, reject) {
    later(resolve)
  });
  
  // call promise
  p1.then(function(x) {
    console.log(x)
  })
  
    function later(resolve) {
      setTimeout(function() {
        // finished? call resolve
        resolve(2);
      }, 2000);
    }
  

//     // create promise
// var p1 = new Promise(function(resolve, reject) {
//     later(resolve)
//   });
  
//   // call promise
//   p1.then(function(x) {
//     console.log(x)
//   })
  
    function later2(x) {
        // x=x+3 - this workds too
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                x=x+3
        
        resolve(x);
      }, 2000);
    })}

    function later3(x) {
        // x=x+3 - this workds too
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                x=x+3
        
        resolve(x);
      }, 2000);
    })}

    var y = later2(3)

    y.then(function(data){
        return later3(data)
    }).then(function(data) {
        console.log(data)
    })