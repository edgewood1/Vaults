// spread operator - a way of extracting items from a data structure so that they can be inserted elsewhere

// with objects, you get a shallow copy
var arr = [1, 2, 3, 4, 5]

// instead of 

console.log(arr[0], arr[1], ... )

// we do

console.log(...arr) 

// so it plucks all items from within the array 
// it means: reference each item in the array
// or each item in the string, or object... 

// combine arrays

var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five']; 
// ["one", "two", "three", "four", "five"]

// make 2 arrays into one
var arr3 = [...arr1, ...arr2]
// [ 'two', 'three', 'one', 'two', 'three', 'four', 'five' ]

console.log(arr3)

// CALLING FUNCTIONS
// if you want to pass in each item as an argument
// and do something with each

var nums = [3, 4, 5];
//norm
add(nums)
// or... 
addNumbers(nums[0], nums[1], nums[2])
// spread
addNumbers(...nums)


function add(nums) {
    console.log(nums[0]+nums[1]+nums[2])
}

// spread function - less typing

function addNumbers(a, b, c) {
    console.log( a +b+c)
}