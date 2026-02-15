# Node


Node

<u>**1-General Terms**</u>

**Global Object:** A built-in object available everywhere in your Node.js code. You can access it using the global keyword or simply by using the variable name directly.  It contains many useful properties and methods, including:
* console: Used for logging output to the console.
* process: Contains information about the current Node.js process.
* setTimeout and setInterval: Used for scheduling functions to execute after a certain delay or repeatedly.
* Math: Contains mathematical constants and functions.
* And many more!

**Process Object:** Represents the current Node.js process and its properties and methods.  The process object provides information about the Node.js process itself, such as:
* pid: The process ID.
* argv: An array containing the command-line arguments passed to the process.
* env: An object containing environment variables.
* exitCode: The exit code the process will return when it terminates.
**Methods:** The process object also offers methods for:
* Terminating the process (process.exit()).
* Setting up event handlers for various process events (e.g., process.on('exit', () => {})).

**Buffer Object:** A fixed-size memory block used for efficient binary data handling.
* Buffers are used to store and manipulate binary data efficiently.
* Unlike strings, which are stored as sequences of characters, buffers have a fixed size in memory. This makes them ideal for handling large amounts of data or data that needs to be processed quickly.
* Buffers provide a variety of methods for reading, writing, and manipulating their contents.

<u>**Events**</u>

**Event:** A signal that something has happened, often used for asynchronous communication.
**Event handler/Listener:** a function that is called when a specific event occurs.  Use the on() method of an EventEmitter object, specifying the event name and a callback function that will be executed when the event occurs.
**Event Emitter:** A class that provides methods for emitting and listening for events.  Many objects inherent this. Use the emit() method of an EventEmitter object, passing the event name and any associated data.
**Callback:** A function passed as an argument to another function, typically used for handling asynchronous operations.

<u>**Kinds of events?**</u>

**Standard I/O Events:** Events associated with standard input, output, and error streams.
* **Input and Output Streams:** In Node.js, standard input (stdin), standard output (stdout), and standard error (stderr) are represented as streams.
* **Events:** These streams emit events when data is available for reading or writing. For example, you can listen for the data event on stdin to read user input.
**Event Emitter Events:** Events defined by the EventEmitter class or by you.
* **Built-in Events:** The EventEmitter class itself defines a number of standard events, such as error, close, and change.
* **Custom Events:** You can define your own custom events and event handlers by using the emit() and on() methods

**Event Queue and Loop:** The mechanism by which Node.js handles events in a single-threaded, non-blocking way.
* event placed in queue
* Loop: when it’s turn comes up, it is processed.
* what does this mean: **Non-Blocking I/O:** Because I/O operations are handled asynchronously, the event loop can continue processing other events while waiting for I/O to complete
<u>**2-Terms organized**</u>
**1. File System and Locations**
* **Files:** The foundation, containing code and data.
	* **Location:** Files exist within a hierarchical file system on your computer (or server). They have specific paths that determine their location.
	* **Organization:** Good file organization is essential in Node.js projects (using folders, modules, etc.)
**2. Code:**
* **Stored in files:** (e.g., .js files).
* **Execution:****Node.js Process:** When you run a Node.js file, a process is created. This process loads and executes the code in the file.
	* **Modules:** The require() function loads code from other files (modules) into the current process, making their functionality available.
* **Transfer:** Can be transferred using various methods (FTP, Git, etc.).
**3. Data:**
* **Stored in files:** (e.g., .txt, .json, .jpg, etc.).
* **Processed by code:** Within the Node.js process, your code reads, manipulates, and writes data to files.
* **Transfer:** Can be transferred within the application, over a network, or between processes.
**4. Timing (Async):** Manages the timing of code execution, especially important for operations involving file access and data transfer.
**5. Transfer Mechanisms:** Methods used to move code and data.
* **File Transfer:** Moving files between locations.
	* **Examples:** FTP (File Transfer Protocol), SCP (Secure Copy Protocol), cloud storage services (AWS S3, Google Cloud Storage), etc.
* **Network Transfer:** Sending data over a network.
	* **Examples:** HTTP (Hypertext Transfer Protocol), WebSockets, TCP (Transmission Control Protocol), UDP (User Datagram Protocol), etc.
* **In-Memory Transfer:** Moving data within your application.
	* **Examples:** Streams, buffers, pipes.
* **Inter-Process Communication (IPC):** Exchanging data between different processes.
	* **Examples:** Pipes, message queues, shared memory.
**6. Global Namespace**
* **global object:** Provides a place to store variables, functions, and objects that need to be accessible from anywhere within the *current Node.js process*.
<u>**3-Summary**</u>
Node.js applications start with **files** containing either **data** or **code**. When you execute a Node.js file (e.g., node index.js), you initiate a **process**.
**A process** is like a container for your running application. It includes:
* **Memory:** This is where the code, data, and other information related to your application reside while it's running.
	* **Heap:** Used for dynamic memory allocation (objects, strings, buffers).
	* **Stack:** Used for managing function calls and local variables.
* **Code:** The instructions loaded from your files that define the application's behavior.
* **Resources:** Handles to external resources like files, network connections, and databases.
* **Execution Context:** The environment in which a piece of JavaScript code is executed. It includes the current scope (which variables are accessible), the value of this, and the call stack (the chain of function calls that led to the current code).
**The global object** is a special object within a process's memory. It provides a namespace where globally accessible variables, functions, and objects are stored, such as console, process, and require().
**Data Handling**
* **Loading:** When you load data from files, databases, or network requests, it's typically stored as objects or buffers on the heap.
* **Execution:** The stack manages function calls, and each function call creates a new execution context. Within an execution context, your code can access and manipulate the data loaded into the heap.
* **Transferring:** Data transfer often involves moving data from the heap to another location (another area in the heap, a file, a network socket, or another process).
	* **Asynchronous Operations:** Many data transfers in Node.js are asynchronous. This means that the code doesn't block waiting for the transfer to complete. Instead, it continues executing other tasks, and a callback function is often used to handle the result of the transfer when it's done.
	* **Streams and Buffers:** Streams are efficient for transferring large amounts of data because they process data in chunks, preventing excessive memory usage. Buffers are often used with streams to manage chunks of binary data during transfer.
**Code execution** often involves loading data, processing it, and potentially transferring it to other locations. Asynchronous operations and careful management of execution flow are essential for efficient and reliable data handling in Node.js

