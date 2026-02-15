### File 5: Classes vs. Prototypes
*Merges: `0.fnc-ctr-class.md`, `9.func-v-class.md`*

**Path:** `1. Client/Logic/JS_Core_Concepts/05_Classes_and_Prototypes.md`

```markdown
# Classes vs. Function Constructors

JavaScript classes are primarily "syntactic sugar" over the existing Prototype-based inheritance.

## 1. ES5: Function Constructors
```javascript
function Car(brand) {
  this.brand = brand;
}
// Methods added to Prototype to save memory (shared by all instances)
Car.prototype.drive = function() {
  console.log(this.brand);
}
2. ES6: Class Syntax
JavaScript

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  // Automatically added to Prototype
  drive() {
    console.log(this.brand);
  }
}
3. Class Fields & Arrow Methods
A common pattern in React to avoid manual binding.

JavaScript

class Component {
  constructor() {
    this.count = 0;
  }
  
  // Property Initializer Syntax
  // This function is created on the INSTANCE, not the Prototype.
  // It has 'this' auto-bound because it is an arrow function.
  handleClick = () => {
    console.log(this.count);
  }
}
```

### 4. Manual Binding (The "Old" Way)
Before Class Fields (Arrow functions in classes) became standard, we had to manually bind methods in the constructor to ensure `this` referred to the instance.

```javascript
class Component {
  constructor() {
    this.count = 0;
    // Creates a new function bound to 'this' instance
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.count);
  }
}
Trade-off: Instance methods use more memory than Prototype methods, but they are safer for event handlers.