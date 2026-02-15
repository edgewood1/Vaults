

Declare-hoist-assign

**Basics**

```
var x = 5
```

var	- 	declarative keyword

var x	-	declaration: a statement that describes scope, use, hoisting functionality

x 		- 	variable / identifier? a named space that stores a value in your code

5 		- 	value / literal

= 5		- 	expression? // initialization



**Keywords for declaring variables;**

| criteria          | var      | let   | Const                         |
| ----------------- | -------- | ----- | ----------------------------- |
| scope             | function | block | Block                         |
| Mutability        |          |       | not objects / only properties |
| global assignment | window   | not   | Not                           |
|                   |          |       |                               |



**global assignments**

```
const a = 5;
var b = 5;
console.log(window.a); // undefined
console.log(window.b); // 5
```

**Initializiing**





**Memory allocation**



**Variable** - a named space that stores a value in your code

Identifier - the name of the variable of the 

```
let myNumber = 23;
```

Above, we declare a variable clalled myNumber and initialize it with a value of 23.

Effect of above code, behind the scene

- create a uniquer identifier for your variable
- allocate an address in memory (assigned at run-time)
- store a value at the address allocated(23)

![img](https://miro.medium.com/max/700/1*IiejRUFbks-TaOzJJvdoVw.jpeg)