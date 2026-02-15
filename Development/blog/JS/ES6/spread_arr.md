**spread / arrays —** 

combine two arrays

var x = [1, 2, 3]
var y = [4, 5, 6]

var z = […x, ….y]

copy an array and change an item
arrays are reference
so chaanging one item will changein all

so copy it

var z = […x]

now changing z won’t change x

3. spread into a function - iterate through each item in an array, pushing each one

x.push(…y)

also — 

const name = [‘wes’, ‘bos’]
function sayHi(first, last) {
…
}

sayHi(…name)

this will pass wes as first argument and bos into second.. 

**spread**

spread out an array inside another, then add an extra item or two:
--- used to create new arrays

racers = [...racers, "Sebulba"];