```
const object = {
  One_A: true,
  One_B: true,
  One_C: {
    Two_A: true,
    Two_B: {
      Three_A: true,
    },
  },
}

const newObject = {
  ...object,
  One_C: { ...object.One_C, Two_B: { ...object.One_C.Two_B } },
}
newObject.One_A = false
newObject.One_B = false
newObject.One_C.Two_A = false
newObject.One_C.Two_B.Three_A = false

console.log("newObject: ", newObject)
console.log("object: ", object)
```



And FINALLY:

```
newObject:  {
  One_A: false,
  One_B: false,
  One_C: { Two_A: false, Two_B: { Three_A: false } }
}
object:  {
  One_A: true,
  One_B: true,
  One_C: { Two_A: true, Two_B: { Three_A: true } }  
}
```



As you can see, it starts to get quite messy the more levels of nested objects you have. Fortunately, there are several JavaScript libraries such as [Immer](https://immerjs.github.io/immer/) that make deep-cloning nested objects fairly intuitive. But if you find yourself having to rely on only using the spread operator, going step-by-step through the layers is the best way to avoid mistakes. Ask yourself:

First, which objects do I want to protect?

```
object, One_C:, Two_B:
```



Next, set up the nesting structure with curly braces:

```
{ object, One_C: { , Two_B: {} } }
```



Finally add the spread operators, making sure you access each object:

```
const newObject = {
  ...object,
  One_C: { ...object.One_C, Two_B: { ...object.One_C.Two_B } }
}
```



Remember that the top level is protected by the spread operator. `...object` protects level 1, `...object.One_C` protects level 2, and `...object.One_C.Two_B` protects level 3.
