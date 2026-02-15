23.	Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
24.	thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
25.	x = thisdict["model"]
26.	x = thisdict.get("model")
27.	thisdict["year"] = 2018
28.	for x in thisdict.values():
  print(x)
29.	for x, y in thisdict.items():
  print(x, y)
30.	del thisdict["model"]
31.	dict constructor
32.	thisdict = dict(brand="Ford", model="Mustang", year=1964)
# note that keywords are not string literals
# note the use of equals rather than colon for the assignment
print(thisdict)