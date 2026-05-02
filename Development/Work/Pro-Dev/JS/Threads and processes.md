# Threads and processes


JS is single-threaded.  

It is event-driven
events fire sequentially. 

If an event takes a while, it will block the system. 

To prevent this, JS tosses such an event in the event loop and continues down its sequence. 

When the delayed event completes, it jumps back into the sequence, later, “out of order”. 



——————————

Python and ruby are multi-threaded



——

Definintions

thread - a chain of events

concurrent execution - (python doesn’t do this)

process


[ ](https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input)


process is an instant of a program

processees spawn threads (sub-processes) - to handle subtasks like reading keystrokes, etc. 

threads live inside processes. 

numBa
numPy - python library - supports large multi-dimension arrays and matrices, 

spawn process has to boot
fork process -


GPU - graphics processing unit

mulitprocessing

- seperate memory space


ping to a server
ssh session start one. 

couldn’t do anything on other threads until ssh session complete. 

THREADING

- shared memory
- not cpu-bound

test connectivity -

spawned  10 workers thread - waits for instruction, etc
spawn a watchre thread - would load queue and tell worker threadsd to die if app closed

a thread can process 10K records. 
each thread assigned one server.
4 tests - 1 per thread. 


GIL-atina

Python's GIL is intended to serialize access to interpreter in
ternals from different threads. On multi-core systems, it means that multiple threads can't effectively make use of multiple cores. (If the GIL didn't lead to this problem, most people wouldn't care about the GIL - it's only being raised as an issue because of the increasing prevalence of multi-core systems.) If you want to understand it in detail, you can view <u>[this video](https://www.youtube.com/watch?v=ph374fJqFPE)</u> or look at <u>[this set of slides](http://www.dabeaz.com/python/GIL.pdf)</u>. It might be too much information, but then you did ask for details :-)
Note that Python's GIL is only really an issue for CPython, the reference implementation. Jython and IronPython don't have a GIL. As a Python developer, you don't generally come across the GIL unless you're writing a C extension. C extension writers need to release the GIL when their extensions do blocking I/O, so that other threads in the Python process get a chance to run.

multi-thread

[https://www.tutorialspoint.com/python/python_multithreading.htm](https://www.tutorialspoint.com/python/python_multithreading.htm)

[https://developer.nvidia.com/how-to-cuda-python](https://developer.nvidia.com/how-to-cuda-python)

