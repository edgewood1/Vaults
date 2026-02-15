# JS: Array methods


Const arr = [1, 2, 3]
Const test = []

Iterate
- map: arr.map(n => n+1) // [2, 3, 4] (modify each)
- Filter: arr.filter(n=> n<2) // 1 (only include)
- Reduce: arr.reduce((acc, cur) => { acc + current }, 0) // 6 (2nd argument passed in as acc, current arr item)
- Foreach: arr.forEach(n => test.push(n) // iterates without return. 

const usersFind = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

Search
- find: usersFind.find(n => n.name=== ‘Bob’) // { id: 2, name: ‘Bob’} (returns item)
- FindIndex: usersFind.findIndex(n => n.name===‘Bob’)//1
- Includes: arr.includes(1) // true

Mutates original array
Const arr = [1, 2, 3]
Const removed = arr.splice(0, 1, ‘x’, ‘y’) // go to index 0, remove 1 item, and at index 0, add the remaining arguments // [‘x’, ‘y’, 2, 3] // if no elements deleted, it returns an empty array, else it returns the deleted items. 



====

Okay, here are quick code examples for each array method, demonstrating their core functionality:

JavaScript

// 1. map()
const numbersMap = [1, 2, 3];
const doubledNumbers = numbersMap.map(num => num * 2);
console.log("map():", doubledNumbers); // Output: [2, 4, 6]

// 2. filter()
const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log("filter():", evenNumbers); // Output: [2, 4]

// 3. reduce()
const numbersReduce = [1, 2, 3, 4];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reduce():", sum); // Output: 10

// 4. forEach()
const fruitsForEach = ['apple', 'banana', 'cherry'];
console.log("forEach():");
fruitsForEach.forEach(fruit => console.log(`- ${fruit}`));
// Output:
// - apple
// - banana
// - cherry

// 5. find()
const usersFind = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const bob = usersFind.find(user => user.name === 'Bob');
console.log("find():", bob); // Output: { id: 2, name: 'Bob' }

// 6. findIndex()
const usersFindIndex = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const bobIndex = usersFindIndex.findIndex(user => user.name === 'Bob');
console.log("findIndex():", bobIndex); // Output: 1

// 7. includes()
const colorsIncludes = ['red', 'green', 'blue'];
const hasGreen = colorsIncludes.includes('green');
const hasYellow = colorsIncludes.includes('yellow');
console.log("includes('green'):", hasGreen);   // Output: true
console.log("includes('yellow'):", hasYellow); // Output: false

// 8. splice() - Mutates original array
const arraySplice = ['a', 'b', 'c', 'd'];
const removed = arraySplice.splice(1, 2, 'x', 'y'); // Remove 2 elements from index 1, add 'x', 'y'
console.log("splice() original:", arraySplice); // Output: ['a', 'x', 'y', 'd']
console.log("splice() removed:", removed);     // Output: ['b', 'c']

// 9. push() / pop() - Mutates original array
const stack = [1, 2];
stack.push(3);
console.log("push():", stack); // Output: [1, 2, 3]
const popped = stack.pop();
console.log("pop():", stack);   // Output: [1, 2]
console.log("popped value:", popped); // Output: 3

// 10. shift() / unshift() - Mutates original array
const queue = ['b', 'c'];
queue.unshift('a');
console.log("unshift():", queue); // Output: ['a', 'b', 'c']
const shifted = queue.shift();
console.log("shift():", queue);    // Output: ['b', 'c']
console.log("shifted value:", shifted); // Output: 'a'

// 11. sort() - Mutates original array
const numbersSort = [3, 1, 4, 1, 5, 9, 2];
numbersSort.sort((a, b) => a - b); // Sorts numerically ascending
console.log("sort():", numbersSort); // Output: [1, 1, 2, 3, 4, 5, 9]

// 12. slice() - Creates a NEW array
const arraySlice = ['a', 'b', 'c', 'd', 'e'];
const subArray = arraySlice.slice(1, 4); // Elements from index 1 up to (but not including) 4
console.log("slice() original:", arraySlice); // Output: ['a', 'b', 'c', 'd', 'e'] (unchanged)
console.log("slice() new array:", subArray);   // Output: ['b', 'c', 'd']

// 13. some()
const agesSome = [10, 18, 25, 5];
const hasAdult = agesSome.some(age => age >= 18);
const hasElderly = agesSome.some(age => age >= 65);
console.log("some() has adult:", hasAdult);     // Output: true
console.log("some() has elderly:", hasElderly); // Output: false

// 14. every()
const agesEvery = [22, 28, 30, 25];
const allAdults = agesEvery.every(age => age >= 18);
const allSeniors = agesEvery.every(age => age >= 65);
console.log("every() all adults:", allAdults);   // Output: true
console.log("every() all seniors:", allSeniors); // Output: false


Developed a greenfield medical studies web application using Redux, T ypeScript, and
Lit-Element, contributing to a modern and scalable architecture.
Designed and implemented an admin page for managing critical application settings.
Customized Material UI components to meet specific application requirements, ensuring a
consistent and branded user interface.
Performed code refactoring for version upgrades and strict-mode T ypeScript compliance,
improving code maintainability and reducing potential errors.
Implemented comprehensive unit and integration tests using Mocha and WebdriverIO,
ensuring application stability and reliability