event-loop

- update async in response to OBSSERVED property changes
- changes are batched: if prop changes after update requested but before update starts, all of the changes are captured in same update? 

- set prop
- is update needed? then request one
- perform update by processing props and rendering element
- resolve a promise, indicating update complete

single thread: 

Parts of JS: 

1. function execution stack: 
    stack - manages function - call a function, it gets thrown on stack, next function called, it gets thrown, when last one gets resolved, its removed.  heap - memory allocation

2. browser -  multi-threaded / it can run multiple web apis at once.  a web api is like: dom, ajax, settimeout.  

3. run-time is the run env, which is single threaded

4. event-loop > all events pending to get executed. 

5. event queue > tracks all events that runs next

- line executed
- gets thrown on stack
- fires web api
- gets off stack
- web api places callback in event que
- at right time, callback put on stack.