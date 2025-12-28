|| && ?. ??


__Logical OR - ||__

1. check left-side,
2. if true, use it
3. if false, use right

true || false; // Output: true
false || true; // Output: true
false || false; // Output: false

If the first operand is truthy, the second operand is not evaluated

true || (someFunction()); // Output: true

If the first operand is falsy, the second operand is evaluated
false || (someFunction()); // Output: result of someFunction()

// Example with non-boolean values
0 || 5; // Output: 5
'hello' || 'world'; // Output: 'hello'

__Logical AND__

- if first is false, the result of operation false, and second operand not evaluated
- if first is true, the operation evaluates the 2nd operand, the second operand runs to see what the over all operation results as.

Comparison
true && somFunc() // someFunc evaled
false && someFunc() // not evaled
true || someFunc() // someFunc not evaled
false || someFunc() // someFunc() evaled and return

__optional chaining__

if obj is undefined or obj.prop is undefined
undefined is return rather than an error.

const obj = { prop: null }
obj.prop // error
obj?.prop // no error

const obj = null
obj.prop// error
obj?.prop //

https://www.codeisbae.com/typescript-optional-chaining-nullish-coalescing/

__nullish coalescer - ??__

- used to provide a default value

const result = null ?? 'default';
console.log(result); // Output: 'default'

