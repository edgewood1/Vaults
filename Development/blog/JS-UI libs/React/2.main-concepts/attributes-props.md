

Attribute vs. properties

you can define attributes on your HTML elements

<div hidden> </div>
<input type="text" value="Name:">

has 2 attributes (type and value).

When browser parses the HTML, 
it creates a DOM object: 
HTMLInputElement 
this will contain dozens of properties like: accept, accessKey, align, alt, attributes, autofocus, baseURI, checked, childElementCount, childNodes, children, classList, className, clientHeight, etc.
 

__Template tags__
- intercept and parse literals before they output. 

- analyze literals and only update their mutable parts.  Both React and Lit  result in reactive UI updates.  