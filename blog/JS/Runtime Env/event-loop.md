Parts

1. event loop
2. call stack
3. render





Asynch – flow of program determined by events – clicks, presses, etc – streams of incoming requests

Queue-Loop: 
When node recieves a request, rquest is placed in event queue
Event loop is always running, and grabs an event from this queue
If request is non-blocking operation, node will process and respond
If request is blocking operation, node delegates to worker thread in thread pool – this operation is probably related to a callback function – when operation complete, the worker thread prepares respond and sends it back to the event lop, which runs callback function, and sends response to client. 
Blocking – database, network, filesystem.

The Event model – 

You can use events, like onclick, that responds to interactions by adding a new job to the back of the job queue.  Doesn’t execute until event fires, and when it does, it has context.  When clicked, its fucntion added to job queue and executed when all other jobs are complete. 

 

 

Eco-structure

JS v8

single-threaded
- one task at a time

callstack 
- what's running
- current function and all the other functions it calls.  
- begins with main

web-apis
- settimeout(3000) > after 3 secs, function placed in task-queue

(1) task queue

(2) rendering (steps)
- style calculation
- layout (render tree)
- painting (pixel data)

(3) queue microtasks
- promises
- mutation events

eventloop
- recursion through these steps
