# object methods

## **The most important Object methods for algorithms in JavaScript include:** 
* Object.keys(): This method returns an array of a given object's own enumerable string-keyed property names. It is useful for iterating over an object's keys, which is often a first step in processing object data within an algorithm. 
| const myObject = { a: 1, b: 2, c: 3 };<br/>    const keys = Object.keys(myObject); // ['a', 'b', 'c'] |
|-------------------------------------------------------------------------------------------------------|

* Object.values(): Similar to Object.keys(), this method returns an array of a given object's own enumerable string-keyed property values. It is helpful when an algorithm needs to process only the values of an object. 
| const myObject = { a: 1, b: 2, c: 3 };<br/>    const values = Object.values(myObject); // [1, 2, 3] |
|-----------------------------------------------------------------------------------------------------|

* Object.entries(): This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. It is highly versatile for algorithms that require simultaneous access to both the keys and values of an object, enabling destructuring and more complex iterations. 
| const myObject = { a: 1, b: 2, c: 3 };<br/>    const entries = Object.entries(myObject); // [['a', 1], ['b', 2], ['c', 3]] |
|----------------------------------------------------------------------------------------------------------------------------|

* Object.assign(): This method copies all enumerable own properties from one or more source objects to a target object. It returns the target object. Object.assign() is essential for creating shallow copies of objects or merging properties from multiple objects, which is common in algorithms involving data aggregation or transformation. [<u>[1](https://dev.to/hy_piyush/10-important-javascript-object-methods-everyone-must-know-in-2023-398k)</u>, <u>[2](https://docs.vultr.com/javascript/standard-library/Object/assign#:~:text=The%20Object.%20assign()%20method%20in%20JavaScript%20is,dealing%20with%20object%20manipulation%20and%20state%20management.)</u>] 
| const target = { a: 1 };<br/>    const source = { b: 2, c: 3 };<br/>    Object.assign(target, source); // target is now { a: 1, b: 2, c: 3 } |
|----------------------------------------------------------------------------------------------------------------------------------------------|

* Object.freeze(): This method freezes an object, preventing new properties from being added to it, existing properties from being removed, and the enumerability, configurability, or writability of existing properties from being changed. It is valuable for ensuring object immutability within algorithms, which can prevent unintended side effects and improve predictability. 
| const myObject = { data: 'initial' };<br/>    Object.freeze(myObject);<br/>    // myObject.data = 'new'; // This assignment will be ignored in non-strict mode, or throw an error in strict mode |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

* Object.create(): This method creates a new object, using an existing object as the prototype of the newly created object. It is fundamental for implementing inheritance patterns and creating objects with specific prototype chains, which can be relevant in certain advanced algorithmic designs. [<u>[3](https://iabu94.medium.com/7-most-important-object-methods-in-javascript-you-should-know-in-2022-68e9727504bc)</u>] 
| const prototypeObject = { greet: function() { console.log('Hello'); } };<br/>    const newObject = Object.create(prototypeObject);<br/>    newObject.greet(); // 'Hello' |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


*AI responses may include mistakes.*
[1] <u>[https://dev.to/hy_piyush/10-important-javascript-object-methods-everyone-must-know-in-2023-398k](https://dev.to/hy_piyush/10-important-javascript-object-methods-everyone-must-know-in-2023-398k)</u>
[2] <u>[https://docs.vultr.com/javascript/standard-library/Object/assign](https://docs.vultr.com/javascript/standard-library/Object/assign#:~:text=The%20Object.%20assign()%20method%20in%20JavaScript%20is,dealing%20with%20object%20manipulation%20and%20state%20management.)</u>
[3] <u>[https://iabu94.medium.com/7-most-important-object-methods-in-javascript-you-should-know-in-2022-68e9727504bc](https://iabu94.medium.com/7-most-important-object-methods-in-javascript-you-should-know-in-2022-68e9727504bc)</u>


