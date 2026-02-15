function later(x) {
    return new Promise(function(resolve, reject) {
        x=x+2;
        resolve(x)
    })
  
  }
  
  function next(x) {
    x=x+2;
    return new Promise(function(resolve, reject) {
        
        resolve(x)
    })
  }

  function last(x) {
    return new Promise(function(resolve, reject) {
        x=x+2;
        resolve(x)
    })
  }
 
 later(2).then(function(data){
     console.log(data);
     next(data);
 }).then(function(data){
     console.log(data)
 }).catch(function(error) {
     console.log(error)
 })