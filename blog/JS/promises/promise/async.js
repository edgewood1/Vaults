var y = 2.5
var x;
console.log ("1")
async function wait(y) {
  
    result =setTimeout(async function() {
        console.log('2')
        console.log(y)
        x=3;
        console.log(x)
        return  + await x
    }, 2000) 
    console.log("result", result)
    return result
};

//1. call the function, passing in a callback

wait(y) 
    .then(function(result) {
        console.log(result) // this must wait
    })
    .catch(function(error){
        console.log(error)
    })
