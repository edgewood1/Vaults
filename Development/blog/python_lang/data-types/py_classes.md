object-oriented language is class-based
classes create a template for multiple objects
https://medium.com/@andrea.chiarelli/is-javascript-a-true-oop-language-c87c5b48bdf0
javascript uses constructors

CREATING CLASSES

```python
class Snake: 
  name="python"

snake = Snake()
print (snake.name)
```

or dynamic class
# self - a reference to the current instance of the class (the word 'self' is optional - it just has to be the first parameter)
# __init__ - a constructor function
```py
class Dog: 
  def __init__(self, name, age): 
    self.name = name
    self.age = age
  def getName(self):
    print("Hello " , self.name)

b = Dog("Howie", 4)
```
# READING 
```py
print(b.name)

b.getName()
```

```es6
class Name {
  constructor(name) {
    this.name = name
  }
}
```

 





# UPDATING CLASSES

b.age = 5

# DELETING CLASSES

del b.age
del b