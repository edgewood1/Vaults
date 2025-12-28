, an execution context is an abstract concept of an environment where the Javascript code is evaluated and execute

- global
- functitonal
- eval function

Execution stack - callilng stack - is LIFO structure

- ussed to store the EC created during  code execution
- GE crerated first and pushed to ES
- eaech function invocation creaertes a new EC and pushes i t to the top of the stack
- engine inishes thp conntext, poppos it off, then goes to the n below.

EC craerted in tases

creatiton phase

- lexcialEnvironment component created- associates an Identfier to a variable / function.  It associates the name to a ffuunction /arrary object or primitive value
- variableEnv componsent created

```
ExecutionContext = {
  LexicalEnvironment = <ref. to LexicalEnvironment in memory>,
  VariableEnvironment = <ref. to VariableEnvironment in  memory>,
}
```

A *lexical environment* is a data structure that holds **identifier-variable (name-value) mapping**. (here **identifier** refers to the name of variables/functions, and **the variable** is the reference to actual object [including function object] or primitive value).

This is what a lexical environment conceptually look like:

```
LexicalEnvironment = {
  Identifier:  <value>,
  Identifier:  <function object>
}
```

 

```
var a = 20;
var b = 40;function foo() {
  console.log('bar');
}
```



So the lexical environment for the above snippet looks like this:

```
lexicalEnvironment = {
  a: 20,
  b: 40,
  foo: <ref. to foo function>
}
```

Each Lexical Environment has three components:

1. Environment Record	
   1. **Declarative environment record —** As its name suggests stores variable and function declarations. The lexical environment for function code contains a declarative environment record.
   2. **Object environment record —** The lexical environment for global code contains a objective environment record. Apart from variable and function declarations, the object environment record also stores a global binding object (window object in browsers). So for each of binding object’s property (in case of browsers, it contains properties and methods provided by browser to the window object), a new entry is created in the record.
2. Reference to the outer environment,
3. This binding.



Creation Phase / Variable Env

- stoores variable var bindings only

Execution Phase

- assignments finsihed and code executed
- 

https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda



https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0

 

https://stackoverflow.com/questions/2485423/is-using-var-to-declare-variables-optional

