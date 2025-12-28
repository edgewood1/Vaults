

info disclosure

revealing file name / path
source code files
api kiys, IPs database credentials 
__** api keys were uploaded to github solarwinds hack__

mentioneing database table or column names in error messages

attacks---

directory traversal - reveal path names, a person can get to your files
sql injection --

need token to access api > how to get token?

imporoper error handling
- don't give them too much info! stack traces
- overly info error message messaging
- database dumps 
- don't show error code, its already sent back
- 
__** are these error messages for apps that aren't used by customers?__

good
- what do we need?
- return something useful, but not revealing show cause.

current implementation
__- nonunified errors__

try / catch 

exception handling 