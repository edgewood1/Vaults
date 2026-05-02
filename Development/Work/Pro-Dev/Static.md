# Static


Static analyzer tool - software that checks JS code without actually running it. 
- checks syntax
- Coding consistency
- We conduct “static code analysis”; ie, we analyzing static code, or non-executing code. 

Examples of SAT
- ESLint - provides a set of rules for formatting, styling, and errors.  Uses rules.
- SonarQube - provides security checks, code coverage
- Prettier - addresses only style and formatting.  Uses ESLint

How it works
- parses JS code into a structured representation (like an AST - Abstract Syntax tree).  This allows for easy analysis. 
- The tool traverses teh AST, applying predefined rules to each node. 

Endpoint organization - 
- group by functionality (/users, /products, /orders)

OpenAPI specs - a standard language agnostic way to describe Restful apis.  Blueprint. 

Swagger - a set of tools that make it easy to work with open api spec. 

Parser - analyzes using AST like Esprima and Acorn. 

Write a script to traverse the AST extract relevant info. And generate open api spec. 


