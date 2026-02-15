
Path: 1. Client/Logic/JS_Core_Concepts/01_Execution_Context.md

Markdown

# Execution Context & The Call Stack

## 1. The Execution Stack (Call Stack)
JavaScript is single-threaded. The **Execution Stack** is a LIFO (Last In, First Out) structure that tracks where the engine is in the code.
1.  **Global Execution Context (GEC):** Created when the script starts.
2.  **Function Execution Context (FEC):** Created *every time* a function is invoked. It is pushed to the top of the stack.
3.  **Pop:** When a function finishes, it is popped off the stack, and control returns to the context below it.

## 2. The Two Phases of Context Creation
Every time a context is created, it goes through two phases:

### Phase A: Creation Phase (Hoisting)
Before line 1 of the function is executed, the engine scans the code and sets up memory.
1.  **VariableEnvironment:**
    * `var` variables are initialized as `undefined` (Hoisting).
    * Function declarations are placed entirely into memory.
2.  **LexicalEnvironment:**
    * Stores `let` and `const` bindings (uninitialized).
    * Creates the **Outer Reference** (Scope Chain).
3.  **`this` Binding:** The value of `this` is determined.

### Phase B: Execution Phase
The engine runs the code line-by-line, assigning actual values to variables and executing function calls.



## 3. Lexical Environment (The Scope)
A Lexical Environment is a map of **Identifier-Variable** bindings. It determines what you can access.
```javascript
LexicalEnvironment = {
  Identifier: <value>,
  OuterEnv: <reference to parent environment>
}
```

#### Environment Records
The Lexical Environment consists of an **Environment Record** (the actual storage) and a reference to the outer environment.
1.  **Declarative Environment Record**: Stores variable and function declarations (used in function scopes).
2.  **Object Environment Record**: The global scope binding (e.g., `window` in browsers).

### Identifier Resolution (The Scope Chain)
If the engine cannot find a variable in the current Environment Record, it looks at the `OuterEnv`. It continues up the chain until it hits the Global Execution Context. If not found there, it throws a `ReferenceError`.
Identifier Resolution (The Scope Chain)
If the engine cannot find a variable in the current Environment Record, it looks at the OuterEnv. It continues up the chain until it hits the Global Execution Context. If not found there, it throws a ReferenceError.