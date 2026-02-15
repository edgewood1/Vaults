var arr1 = ['a', 'b', 'c', 'd']
var arr2 = ['a', 'b', 'c', 'd']
var arr3 = arr1+arr2; // saves as a string
var arr3 = []
arr3.push(arr1)
arr3.push(arr2)
console.log(arr3) // creates two sets of arrays within one.

var arr3 = [...arr1, ...arr2]
// var meats = ['bacon', 'ham'];
// var food = ['apples', ...meats, 'kiwi', 'rice'];
console.log(arr3)  // creates 1 array within another

var obj = {
    w: "one", 
    x: "two", 
    y: "three"
}

