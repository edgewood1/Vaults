creation of installation files, 
- 
json

dump - write serialized object into a file (does this also serialize?)
dumps - serializes an object
load - read serialized object from file AND deserializes?
loads - deserializes an object


json.loads() turns a JSON string into a python dictionary

json.dumps() convert a python object into a json string

Syntax: json.dumps(dict, indent) 

Parameters:

dictionary – name of dictionary which should be converted to JSON object.
indent – defines the number of units for indentation

# Data to be written
dictionary ={
  "id": "04",
  "name": "sunil",
  "department": "HR"
}
    
# Serializing json 
json_object = json.dumps(dictionary, indent = 4)
print(json_object)

===

json.dump() method can be used for writing to JSON file.

Syntax: json.dump(dict, file_pointer) 

Parameters:

dictionary – name of dictionary which should be converted to JSON object.
file pointer – pointer of the file opened in write or append mode.

# Data to be written
dictionary ={
    "name" : "sathiyajith",
    "rollno" : 56,
    "cgpa" : 8.6,
    "phonenumber" : "9976770500"
}
  
with open("sample.json", "w") as outfile:
    json.dump(dictionary, outfile)


update() - updates dictionary with items from another

scheduler notess
    - windows task scheduler can run a script every day, etc