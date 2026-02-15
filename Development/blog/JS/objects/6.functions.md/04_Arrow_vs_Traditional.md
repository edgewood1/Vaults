### File 4: Arrow vs. Traditional Functions
*Merges: `5.fat-trad-functions.md`, `fat_arrows.js`*

**Path:** `1. Client/Logic/JS_Core_Concepts/04_Arrow_vs_Traditional.md`

```markdown
# Arrow Functions vs Traditional Functions

## 1. Syntax
```javascript
// Traditional
function add(x) { return x + 1; }

// Arrow (Implicit return if one line)
const add = x => x + 1;
2. The this Difference (Lexical Scoping)
This is the most critical difference.

Traditional: Defines its own dynamic this based on invocation.

Arrow: Does not have its own this. It "inherits" this from the parent scope (Lexical Scoping).

Why Arrow Functions are great for Callbacks
JavaScript

const obj = {
  id: 42,
  run() {
    // Traditional function would fail here because 'this' would be window
    setTimeout(function() { console.log(this.id); }, 100); // undefined

    // Arrow function works because it looks up to 'run()' scope
    setTimeout(() => { console.log(this.id); }, 100); // 42
  }
}
3. Other Differences
No arguments object: Arrow functions cannot access the dynamic arguments keyword.

No Constructor: You cannot use new with an arrow function.