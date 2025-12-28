function overloading, which is the ability of a single function to have multiple signatures. A function signature is made up of the function name plus the number and type of parameters the function expects. Thus, a single function can have one signature that accepts a single string argument and another that accepts two numeric arguments. The language determines which version

(Page 23). 

function overload

overload signatures specifiy a function that can be called in differen t ways

f a(x: number): Date
f b(m: string)
f c(a: num, d?:num) { body }  // implementation signature - not called directly

we call a or b

signature used to write the body canbt be seen from the outside
overaload + implementation signatures must be compatible

if b takes only a string, c can't be onloy a boolean


stp 68