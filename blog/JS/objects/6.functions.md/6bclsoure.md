# JavaScript Execution Context



1. js engine executes a scrpt
2. creates a global exec context



creation phase: create the GEC

1. create a gobal object
2. create the this object and bind it to global
3. create a memory heap for storing variables and function references
4. store function declarations in the heap + variables within the GEC as undefined
   1. store x, y, timesTen() in GEC
   2. initalize x + y as undefined

GEC

- Global Object: window
- this: window
- x: undefined
- timesTen: function() {}
- y: undefined

Execution phase

JS engin executes line-ling, assigns values, executes calls

for each function call, a new function execution context created.

- similar to GEC, but instead of creating global object, it creates teh arguments object tha tis a reference to all the parameters in the function

GEC

- timesTen(x)
  - FEC (Creation)
    - global object: arguments
    - this: window
    - a: undefined



on execution, it returns a value to the GEC.

it tracks all the ECs via the call stack

https://www.javascripttutorial.net/javascript-execution-context/

how can we check scope



https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly



https://www.javascripttutorial.net/javascript-call-stack/