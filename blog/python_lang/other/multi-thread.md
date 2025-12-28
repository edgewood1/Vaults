PyQt – 

https://riverbankcomputing.com/software/pyqt/intro

PySide – 

https://pypi.org/project/PySide/



A process is an instance of program (e.g. Jupyter notebook, Python interpreter). Processes spawn threads (sub-processes) to handle subtasks like reading keystrokes, loading HTML pages, saving files. Threads live inside processes and share the same memory space.


Multiprocessing

Pros
•	Separate memory space
•	Code is usually straightforward
•	Takes advantage of multiple CPUs & cores
•	Avoids GIL limitations for cPython
•	Eliminates most needs for synchronization primitives unless if you use shared memory (instead, it's more of a communication model for IPC)
•	Child processes are interruptible/killable
•	Python multiprocessing module includes useful abstractions with an interface much like threading.Thread
•	A must with cPython for CPU-bound processing
Cons
•	IPC a little more complicated with more overhead (communication model vs. shared memory/objects)
•	Larger memory footprint
Threading

Pros
•	Lightweight - low memory footprint
•	Shared memory - makes access to state from another context easier
•	Allows you to easily make responsive UIs
•	cPython C extension modules that properly release the GIL will run in parallel
•	Great option for I/O-bound applications
Cons
•	cPython - subject to the GIL
•	Not interruptible/killable
•	If not following a command queue/message pump model (using the Queue module), then manual use of synchronization primitives become a necessity (decisions are needed for the granularity of locking)
•	Code is usually harder to understand and to get right - the potential for race conditions increases dramatically
•	Python's GIL is intended to serialize access to interpreter internals from different threads. On multi-core systems, it means that multiple threads can't effectively make use of multiple cores. (If the GIL didn't lead to this problem, most people wouldn't care about the GIL - it's only being raised as an issue because of the increasing prevalence of multi-core systems.) If you want to understand it in detail, you can view this video or look at this set of slides. It might be too much information, but then you did ask for details :-)
•	Note that Python's GIL is only really an issue for CPython, the reference implementation. Jython and IronPython don't have a GIL. As a Python developer, you don't generally come across the GIL unless you're writing a C extension. C extension writers need to release the GIL when their extensions do blocking I/O, so that other threads in the Python process get a chance to run.
•	Update: Updated link to video to point to Youtube, as the earlier blip.tv link had rotted.

Dynamic Link Library

SSL (Secure Sockets Layer) is a standard security protocol for establishing encrypted links between a web server and a browser in an online communication.
The usage of SSL technology ensures that all data transmitted between the web server and browser remains encrypted.
An SSL certificate is necessary to create SSL connection. You would need to give all details about the identity of your website and your company as and when you choose to activate SSL on your web server. Following this, two cryptographic keys are created - a Private Key and a Public Key.
https://www.instantssl.com/ssl.html


Links

Sources:
Tutorials Point:  Python - Multithreaded Programming
Tuts+: Introduction to Multiprocessing in Python
Medium: Intro to Threads and Processes in Python
Stackoverflow: Multiprocessing vs Threading Python
Demos:
RTP-Python-Meetup Github: multithread-multiprocess


