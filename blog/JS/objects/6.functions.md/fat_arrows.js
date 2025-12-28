// fat arrows 

function circleArea1(r) {
    var pi = 3.14; 
    return pi*r*r
}

let circleArea2 = (r) => {
    const pi = 3.14; 
    return pi*r*r
}

// if you only have one parameter, you don't need parenthesis
// if you don't need multiple statements, you don't need curly brackets / return

let circleArea3 = r =>  3.14*r*r

console.log(circleArea1(7));
console.log(circleArea2(7));
