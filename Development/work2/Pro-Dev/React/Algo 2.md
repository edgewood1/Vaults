# Algo 2


**JavaScript Algorithms & Data Structures Study Sheet for Interviews**
**Page 1: Foundations & Essential Data Structures**

**1. Introduction to Algorithms**
* **What is an Algorithm?** A step-by-step procedure or formula for solving a problem. In programming, it's a set of instructions to accomplish a specific task.
* **Why are they important for interviews?****Problem-Solving:** Demonstrates your logical thinking and ability to break down complex problems.
* **Efficiency:** Shows you can write code that is not only correct but also performs well, especially with large datasets.
**2. Big O Notation (Time & Space Complexity)**
Big O notation describes the performance or complexity of an algorithm. It tells you how the runtime or space requirements grow as the input size (n) grows. We're interested in the *worst-case scenario* and the *dominant term*.
* **Time Complexity:** How many operations an algorithm performs as n increases.
* **Space Complexity:** How much memory an algorithm uses as n increases.
| Notation                                                           | Name                                                               | Characteristics                                                    | Example Operations                                                 |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| O(1)                                                               | Constant                                                           | Runtime/space doesn't change with input size.                      | Accessing an array element by index.                               |
| O(log n)                                                           | Logarithmic                                                        | Halves the input size each step. Very efficient.                   | Binary Search.                                                     |
| O(n)                                                               | Linear                                                             | Runtime/space grows proportionally with n.                         | Iterating through an array once.                                   |
| O(n log n)                                                         | Log-linear                                                         | Efficient for sorting large datasets.                              | Merge Sort, Quick Sort (average).                                  |
| O(n²)                                                              | Quadratic                                                          | Runtime/space grows squared with n. Avoid for large n.             | Nested loops (e.g., Bubble Sort).                                  |
| O(2ⁿ)                                                              | Exponential                                                        | Grows very rapidly. Often recursive solutions without memoization. | Naive Fibonacci.                                                   |
| O(n!)                                                              | Factorial                                                          | Extremely slow. Avoid whenever possible.                           | Permutations.                                                      |

**How to Analyze:**
* Ignore constants and lower-order terms (e.g., O(2n + 5) is O(n)).
* Look at loops: a single loop iterating n times is O(n). Nested loops are O(n²), O(n³), etc.
* Divide and Conquer: Algorithms that repeatedly halve the problem often lead to O(log n) or O(n log n).
**3. Fundamental Data Structures**
**A. Arrays (Lists)**
* **Concept:** An ordered collection of elements, indexed starting from 0. Elements are stored in contiguous memory locations.
* **Characteristics:****Pros:** Fast random access by index (O(1)).
* **Cons:** Insertion/deletion in the middle is O(n) (requires shifting elements). Fixed size in some languages, but dynamic in JS.
* **Common JavaScript Operations:**arr[index]: Access (O(1))
* arr.push(el) / arr.pop(): Add/remove from end (O(1))
* arr.unshift(el) / arr.shift(): Add/remove from beginning (O(n))
* arr.splice(start, deleteCount, ...items): Add/remove anywhere (O(n))
* arr.slice(start, end): Create shallow copy (O(n))
* arr.indexOf(el) / arr.includes(el): Search (O(n))
* arr.map(), arr.filter(), arr.reduce(): Iteration/transformation (O(n))
**B. Strings**
* **Concept:** An immutable sequence of characters.
* **Characteristics:****Immutable:** Operations that appear to modify a string actually create a new string.
* Similar to arrays for character access and length.
* **Common JavaScript Operations:**str.length: Get length (O(1))
* str[index]: Access character (O(1))
* str.indexOf(sub) / str.includes(sub): Search substring (O(n*m))
* str.substring(start, end) / str.slice(start, end): Extract substring (O(n))
* str.split(delimiter): Convert to array (O(n))
* arr.join(delimiter): Convert array to string (O(n))
* str.toLowerCase(), str.toUpperCase(): Change case (O(n))
**C. Objects (Hash Maps / Hash Tables / Dictionaries)**
* **Concept:** A collection of unordered key-value pairs. Keys are unique.
* **Characteristics:****Pros:** Average O(1) time complexity for insertion, deletion, and lookup (accessing values by key).
* **Cons:** Keys are typically strings or Symbols (pre-ES6). Iteration order is not guaranteed (though modern JS engines often preserve insertion order for string keys). Collisions can lead to O(n) worst-case for poorly distributed hash functions (rare in practice with good JS engines).
* **Common JavaScript Operations:**obj[key] = value / obj.key = value: Add/update (O(1) average)
* obj[key] / obj.key: Get value (O(1) average)
* delete obj[key]: Delete (O(1) average)
* key in obj / obj.hasOwnProperty(key): Check existence (O(1) average)
* Object.keys(obj), Object.values(obj), Object.entries(obj): Get keys/values/pairs (O(n))
**D. Sets (ES6)**
* **Concept:** A collection of **unique values**. No duplicates allowed.
* **Characteristics:****Pros:** Fast O(1) average time complexity for adding, deleting, and checking for the presence of a value.
* **Cons:** No direct indexed access.
* Maintains insertion order.
* Iterable.
* **Common JavaScript Operations:**new Set(): Create
* set.add(value): Add unique value (O(1) average)
* set.has(value): Check existence (O(1) average)
* set.delete(value): Delete value (O(1) average)
* set.size: Get number of unique values (O(1))
**E. Maps (ES6)**
* **Concept:** A collection of **key-value pairs**, where keys can be **any data type** (objects, functions, primitives).
* **Characteristics:****Pros:** O(1) average time complexity for insertion, deletion, and lookup. Keys can be arbitrary data types (unlike plain objects). Maintains insertion order.
* **Cons:** No direct indexed access to values.
* Iterable.
* **Common JavaScript Operations:**new Map(): Create
* map.set(key, value): Add/update pair (O(1) average)
* map.get(key): Get value by key (O(1) average)
* map.has(key): Check key existence (O(1) average)
* map.delete(key): Delete pair (O(1) average)
* map.size: Get number of pairs (O(1))



**Page 2: Advanced Data Structures & Recursion**

**1. Linked Lists**
* **Concept:** A sequence of nodes, where each node contains data and a reference (pointer) to the next node in the sequence. The last node points to null.
* **Types:****Singly Linked List:** Nodes point only to the next node.
* **Doubly Linked List:** Nodes point to both the next and previous nodes (allows bi-directional traversal).
* **Characteristics:****Pros:** O(1) time complexity for insertion/deletion at the beginning or end (if pointers to head/tail are maintained). No shifting of elements. Dynamic size.
* **Cons:** O(n) time complexity for accessing an element by index (must traverse from head). Requires more memory due to pointers.
* **Use Cases:** Implementing Stacks/Queues, efficient insertion/deletion at arbitrary points (if you have a pointer to the node before/after).
**2. Stacks**
* **Concept:** A Linear Data Structure that follows the **LIFO (Last In, First Out)** principle. Think of a stack of plates.
* **Main Operations:**push(element): Adds an element to the top of the stack.
* pop(): Removes and returns the top element.
* peek(): Returns the top element without removing it.
* isEmpty(): Checks if the stack is empty.
* **Implementation:** Can be implemented using Arrays (using push and pop) or Linked Lists.
* **Use Cases:** Function call stack, undo/redo functionality, parsing expressions, balancing parentheses.
**3. Queues**
* **Concept:** A Linear Data Structure that follows the **FIFO (First In, First Out)** principle. Think of a line at a store.
* **Main Operations:**enqueue(element): Adds an element to the rear (end) of the queue.
* dequeue(): Removes and returns the front (beginning) element.
* peek(): Returns the front element without removing it.
* isEmpty(): Checks if the queue is empty.
* **Implementation:** Can be implemented using Arrays (push and shift) or Linked Lists.
* **Use Cases:** Task scheduling, BFS (Breadth-First Search) for graphs/trees, print queue.
**4. Trees (Binary Trees, Binary Search Trees)**
* **Concept:** A hierarchical data structure consisting of nodes connected by edges.
* **Root:** The topmost node.
* **Parent/Child:** A node connected to one or more nodes below it (children).
* **Leaf:** A node with no children.
* **Binary Tree:** Each node has at most two children (left and right).
* **Binary Search Tree (BST):** A special type of Binary Tree where for every node:
* All values in the left subtree are less than the node's value.
* All values in the right subtree are greater than the node's value.
* **Characteristics:****Pros:** Efficient searching (O(log n) average for BST), insertion, and deletion for ordered data.
* **Cons:** Can degrade to O(n) in worst-case (unbalanced tree).
* **Tree Traversal (Visiting nodes):****In-order:** Left -> Root -> Right (useful for getting sorted elements from BST).
* **Pre-order:** Root -> Left -> Right (useful for copying/serializing a tree).
* **Post-order:** Left -> Right -> Root (useful for deleting a tree).
* **Use Cases:** File systems, database indexing, syntax trees (compilers).
**5. Graphs**
* **Concept:** A collection of nodes (vertices) and connections between them (edges).
* **Types:****Directed:** Edges have a direction (A -> B, but not necessarily B -> A).
* **Undirected:** Edges have no direction (A -- B means B -- A).
* **Weighted:** Edges have associated values (e.g., cost, distance).
* **Representations:****Adjacency Matrix:** A 2D array where matrix[i][j] is 1 (or weight) if there's an edge from i to j, else 0. Good for dense graphs. O(V^2) space.
* **Adjacency List:** An array where each index i stores a list of vertices adjacent to i. Good for sparse graphs. O(V + E) space.
* **Use Cases:** Social networks, road networks, routing algorithms.
**6. Recursion**
* **Concept:** A programming technique where a function calls itself directly or indirectly to solve a problem.
* **Key Components:****Base Case:** The condition that stops the recursion. Essential to prevent infinite loops (stack overflow).
* **Recursive Step:** The part where the function calls itself with a smaller (or simpler) version of the problem.
* **Pros:** Can lead to elegant and concise code for problems with self-similar substructures.
* **Cons:** Can be harder to debug. Can lead to stack overflow errors if the base case is not reached or recursion is too deep. Performance can be worse than iterative solutions due to function call overhead (though often comparable or better for specific problems).
* **Example:** Factorial calculation, Fibonacci sequence, tree/graph traversals.



**Page 3: Algorithm Paradigms & Common Techniques**

**1. Sorting Algorithms (Brief Overview)**
* **Purpose:** Arranging elements in a collection in a specific order (ascending/descending).
* **Important Metrics:****Time Complexity:** How efficient it is.
* **Space Complexity:** How much extra memory it uses.
* **Stability:** Preserves the relative order of equal elements.
* **In-place:** Uses a minimal amount of extra space (O(1) or O(log n)).
| Algorithm                                    | Average Time                                 | Worst Time                                   | Space                                        | Stable?                                      | Notes                                        |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|
| Bubble Sort                                  | O(n²)                                        | O(n²)                                        | O(1)                                         | Yes                                          | Simple, but very inefficient. Avoid.         |
| Insertion Sort                               | O(n²)                                        | O(n²)                                        | O(1)                                         | Yes                                          | Good for small arrays or nearly sorted data. |
| Merge Sort                                   | O(n log n)                                   | O(n log n)                                   | O(n)                                         | Yes                                          | Divide & Conquer. Guaranteed performance.    |
| Quick Sort                                   | O(n log n)                                   | O(n²)                                        | O(log n)                                     | No                                           | Divide & Conquer. Fastest in practice (avg). |

**2. Searching Algorithms**
* **Linear Search:**Iterate through each element of a collection until the target is found.
* Time Complexity: O(n)
* Applicable to unsorted data.
* **Binary Search:****Requires sorted data.**Repeatedly divides the search interval in half. Compares the middle element with the target. If mismatch, search in the half where the target could be.
* Time Complexity: O(log n)
* **Implementation:** Typically recursive or iterative. Requires left, right, and mid pointers/indices.
* **Use Cases:** Searching in sorted arrays, finding boundaries.
**3. Two Pointers Technique**
* **Concept:** Involves using two pointers (indices or references) that traverse a data structure (like an array or linked list) simultaneously.
* **Common Patterns:****Pointers moving towards each other:** One from the beginning, one from the end. Useful for finding pairs, checking palindromes, or reversing arrays/strings.
* **Pointers moving at different speeds:** One fast, one slow. Useful for finding the middle of a linked list, detecting cycles.
* **Use Cases:** Finding pairs with a specific sum, removing duplicates, validating palindromes, reversing strings/arrays.
**4. Sliding Window Technique**
* **Concept:** Used for problems that involve arrays or strings, where you need to find a subarray, substring, or a range of elements that satisfies certain conditions. It's like a "window" of elements that slides over the data.
* **Process:** The window typically grows (expands) and shrinks (contracts) as it moves.
* **Use Cases:** Finding the maximum/minimum sum subarray of a certain size, finding the longest substring with K distinct characters, finding anagrams.
**5. Dynamic Programming (DP)**
* **Concept:** An optimization technique for problems with:
* **Overlapping Subproblems:** The same subproblems are solved repeatedly.
* **Optimal Substructure:** An optimal solution to the problem can be constructed from optimal solutions to its subproblems.
* **Approach:****Memoization (Top-down):** Store results of expensive function calls and return the cached result when the same inputs occur again (often recursive with a cache).
* **Tabulation (Bottom-up):** Solve the problem iteratively by building up solutions to smaller subproblems first, storing them in a table (usually an array or 2D array).
* **Use Cases:** Fibonacci sequence, knapsack problem, longest common subsequence, coin change problem.
**6. Greedy Algorithms**
* **Concept:** Makes the locally optimal choice at each step with the hope of finding a global optimum.
* **Characteristics:** Simple and intuitive, but doesn't always yield the globally optimal solution.
* **Use Cases:** Change-making problem (with standard denominations), Huffman coding, Dijkstra's algorithm (for shortest path in some graphs).
**7. Backtracking**
* **Concept:** A general algorithmic technique for finding all (or some) solutions to computational problems, particularly constraint satisfaction problems. It incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.
* **Analogy:** Navigating a maze. Try a path, if it hits a dead end, go back and try another.
* **Use Cases:** N-Queens problem, Sudoku solver, permutations, combinations, finding all paths in a maze.
**8. Bit Manipulation (Optional but powerful for some problems)**
* **Concept:** Performing operations directly on the binary representation of numbers.
* **Basic Operators:**& (AND), | (OR), ^ (XOR), ~ (NOT)
* << (Left Shift), >> (Signed Right Shift), >>> (Unsigned Right Shift)
* **Use Cases:** Checking if a number is even/odd, swapping numbers without a temp variable, setting/clearing/toggling bits, counting set bits.


**Tips for Interview Practice:**

* **Understand the Problem:** Read carefully. Ask clarifying questions.
* **Example Cases:** Walk through a small example manually. Think about edge cases (empty input, single element, max/min values).
* **Brute Force First:** Don't be afraid to think of the simplest (often inefficient) solution first. This helps clarify the logic.
* **Optimize:** Then, think about how to improve complexity using appropriate data structures and algorithms.
* **Talk Through Your Thoughts:** Verbalize your thought process, even when stuck. Interviewers want to see how you think.
* **Test Your Code:** Mentally (or on paper) trace your optimized solution with your example and edge cases.
* **Practice, Practice, Practice:** LeetCode, HackerRank, AlgoExpert are great resources. Focus on common patterns.
* **JavaScript Specifics:** Be aware of how built-in JS methods (like array methods, Map, Set) can simplify algorithm implementations.
