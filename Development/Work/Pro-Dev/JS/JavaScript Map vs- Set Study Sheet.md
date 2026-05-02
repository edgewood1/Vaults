# JavaScript Map vs. Set Study Sheet

Both Map and Set were introduced in ES6 (ECMAScript 2015) to provide more powerful and flexible ways to work with collections of data compared to traditional JavaScript objects and arrays for certain use cases.
**1. JavaScript Map**
A Map is a collection of **key-value pairs**. It's similar to a plain JavaScript object, but with some significant advantages.
**Key Characteristics:**
* **Key-Value Pairs:** Stores data as [key, value] pairs.
* **Unique Keys:** Each key in a Map must be unique. If you try to set() a value for an existing key, it will overwrite the old value.
* **Arbitrary Key Types:** Unlike plain JavaScript objects where keys are typically strings or Symbols, Map keys can be of **any data type**, including objects, functions, or any primitive value. This is a major advantage.
* **Maintains Insertion Order:** Elements in a Map are iterated in the order they were inserted.
* **Iterable:** You can easily loop through a Map.
**Common Methods & Properties:**
| Method/Property                                                                                              | Description                                                                                                  | Example                                                                                                      |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| new Map()                                                                                                    | Creates a new, empty Map.                                                                                    | const myMap = new Map();                                                                                     |
| map.set(key, value)                                                                                          | Adds or updates a key-value pair. Returns the Map itself.                                                    | myMap.set('name', 'Alice');                                                                                  |
| map.get(key)                                                                                                 | Retrieves the value associated with the key. Returns undefined if the key is not found.                      | myMap.get('name'); // 'Alice'                                                                                |
| map.has(key)                                                                                                 | Returns true if the key exists in the Map, false otherwise.                                                  | myMap.has('name'); // true                                                                                   |
| map.delete(key)                                                                                              | Removes the key-value pair associated with the key. Returns true if an element was removed, false otherwise. | myMap.delete('name');                                                                                        |
| map.clear()                                                                                                  | Removes all key-value pairs from the Map.                                                                    | myMap.clear();                                                                                               |
| map.size                                                                                                     | A property that returns the number of key-value pairs in the Map.                                            | myMap.size; // Returns the count                                                                             |

**When to Use Map:**
* When you need to store collections of data where each item has a unique identifier (key) and an associated value.
* When the keys are not always strings (e.g., using DOM elements or objects as keys).
* When you need to maintain the insertion order of elements.
* When you frequently add, retrieve, or delete items by a key.
**2. JavaScript Set**
A Set is a collection of **unique values**. It's primarily used for storing distinct items.
**Key Characteristics:**
* **Unique Values:** Each value in a Set must be unique. If you try to add() a value that already exists, it will be ignored, and the Set remains unchanged.
* **Arbitrary Value Types:** Values in a Set can be of **any data type**, just like Map keys.
* **Maintains Insertion Order:** Elements in a Set are iterated in the order they were inserted.
* **Iterable:** You can easily loop through a Set.
**Common Methods & Properties:**
| Method/Property                                                                                    | Description                                                                                        | Example                                                                                            |
|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| new Set()                                                                                          | Creates a new, empty Set.                                                                          | const mySet = new Set();                                                                           |
| set.add(value)                                                                                     | Adds a new value to the Set. Returns the Set itself. If the value already exists, nothing happens. | mySet.add('apple');                                                                                |
| set.has(value)                                                                                     | Returns true if the value exists in the Set, false otherwise.                                      | mySet.has('apple'); // true                                                                        |
| set.delete(value)                                                                                  | Removes the value from the Set. Returns true if the value was removed, false otherwise.            | mySet.delete('apple');                                                                             |
| set.clear()                                                                                        | Removes all values from the Set.                                                                   | mySet.clear();                                                                                     |
| set.size                                                                                           | A property that returns the number of unique values in the Set.                                    | mySet.size; // Returns the count                                                                   |

**When to Use Set:**
* When you need to store a list of items where each item must be unique.
* When you need to quickly check for the presence of an item.
* When you need to remove duplicate values from an array or other collection.
* For tasks like tracking visited items or maintaining a list of active users.
**3. Key Differences at a Glance**
| Feature                                           | Map                                               | Set                                               |
|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
| Purpose                                           | Stores key-value pairs.                           | Stores a collection of unique values.             |
| Elements                                          | [key, value] pairs.                               | Single values.                                    |
| Uniqueness                                        | Keys must be unique.                              | Values must be unique.                            |
| Key/Value Types                                   | Keys AND Values can be any data type.             | Values can be any data type.                      |
| Adding Data                                       | Uses map.set(key, value).                         | Uses set.add(value).                              |
| Retrieving Data                                   | Uses map.get(key).                                | Uses set.has(value) (no get for values directly). |
| Size Property                                     | map.size (number of pairs).                       | set.size (number of unique values).               |



