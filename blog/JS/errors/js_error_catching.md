The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.

---------------------------------

try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
}

try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}

--------------------------------------


try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
} 
finally {
    Block of code to be executed regardless of the try / catch result
}