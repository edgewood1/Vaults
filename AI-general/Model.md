The model is stored as large, specialized binary files containing trillions of numbers.

These numbers are called “parameters” or “weights”. 

They represent all the patterns learned during training.

Each number defines the strength of a tiny connection or the likelihood of one thing leading to another.  

Besides numbers, the files might include
* info about hte model’s structure
* A list of words or word pieces it knows and how it converts them to numbers it can process. 
* The process of converting text into a number is called “tokenization”

Each number does not hold an isolated meaning, it’s more like a tiny adjustment on one connection point within the larger langauge engine.  It contributes, with all the others, to the overall calculation.  

When the word “the” is discovered, all teh numbers make it likely that the engine will output an adjective next, and “yellow” will be one of the words considered probable, depending on the context provided. 

A token is often smaller than a whole word.  It could be a word, but also a part of the word (ing), a punctuation, or just a space. 

How it’s broken down depends on the tokenizer used for that LLM.  

The specific way text is broken down depends entirely on the **tokenizer** used for that particular LLM. Different models use different rules and vocabularies.

**Example:**

Let's take the sentence: **"LLMs tokenize text powerfully!"**

A specific model's tokenizer might break this down into the following tokens:

`["L", "L", "Ms", " token", "ize", " text", " powerful", "!"]`

- Notice "LLMs" might be split into "L", "L", "Ms".
- "tokenize" is split into " token" (with a leading space likely included) and "ize".   
    
- "text", " powerful", and "!" might be single tokens (again, notice the space might attach to " powerful").

**Each unique token in the model's vocabulary has a corresponding unique ID number.** So, the sequence above would be converted into a list of numbers like:   

`[76, 76, 1234, 5678, 9101, 1112, 1314, 99]` (These numbers are just illustrative examples).

This sequence of numbers is what the model actually processes.

**Are they stored as arrays?**

Yes, in the sense that when a piece of text is processed:

1. It's broken down into a **sequence of tokens**.
2. This sequence of tokens is converted into a **sequence of their corresponding ID numbers**.
3. This sequence of ID numbers is typically represented and processed as an **array** (or list, or more technically a "tensor" which is like a multi-dimensional array) of integers.

So, for our example `"LLMs tokenize text powerfully!"`, the input to the model would be an array like `[76, 76, 1234, 5678, 9101, 1112, 1314, 99]`.

Inside the model, these numbers are then usually converted into more complex arrays (vectors called "embeddings") that represent the meaning of the tokens in a richer way, but the initial tokenized sequence is indeed handled as an array of IDsthe

A separate program reads these files to use those learned patterns when generating text

