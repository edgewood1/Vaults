Css 

1.	Keyframes
2.	Transitions
3.	Variables
4.	Gradients
5.	Units
6.	Rounded cordners 
7.	Border images
8.	Gradients 
9.	Shadows
10.	Text effects
11.	2d transforms
12.	3d transforms
13.	Transitions
14.	Animations
15.	Tolltips
16.	Style images
17.	Object-fit
18.	Buttons
19.	Pagination
20.	Multi columns
21.	UI
22.	Variables
23.	Box-sizing
24.	Flexbox
25.	Media queries
26.	Viewport
27.	Grid view
28.	Frameworks
29.	Css grid
30.	Css referneces




VARIABLES (custom properties)

1.	Define the variable 
2.		Scope definition preceded by ‘:’ --  @ root (global) or to a particular selector
3.		Variable name preceeded by “—”

	:root { --mel: coral; }
	.className { --mel: coral;}  only applicable to the defined class and its children.

1.	Apply variable: var(--varname)
2.		Use keyword ‘var’
3.		--variable name as argument
	
	#whatever {background: var(--mel)}


React

An Element: 

Var x = “<div> hello </div>”

A Component: 

Function Test() {
	Return (<div> hello </div>)
}

The difference? We can accept inputs on the component so, 

function Test(props) { 
    return(<div>hello {props.value}</div>
      )}

ReactDOM.render(<Test value="mary"/>, document.getElementById("root"))

Component is a class or a function - They take the props as their input, and return the elements as their output.

In a component, “this” refers to the whole of the component – whether it is a the whole class or function – the whole object. 

React Element – a basic DOM element, an HTML element, a Node, a Box on a tree. 


Element – a plain object describing a component instance / DOM node and properties.  It contains info about the component type (like a button), its properties (its color) and its children.

1.	HTML webpage
2.	DOM Tree – can be viewed as a “document tag – tree” or as a document object
3.	Document – holds the whole page, a series of nodes: 
4.		Element nodes – tags
5.		Attribute notes
6.		Text nodes
7.	HTML element – a string containing start tag, attributes, text, end tag
8.	Element nodes contain or offer access to attributes and text
9.	If I were to access a particular element I would say: 
10.	Document.getElementById(“#root”)
11.	This would bring up <div id=”#root”> </div>
12.	I could create an element: var x = document.createElement(“li”)
13.	And addit to an existing node called “EL”: EL.appendChild(x)
14.	


Window object – access to the browser
Visual Data presented to user
DOM tree – the series of tags tha tpop up in the console.  Each tag is a node, etc
Document object – this is attached to the window. (window.document)
Accessible via: console.dir(document) – an actual object with properties such as ‘body’, which has childNodes, children, classList, className, firstChild, innerText, 



Two ways of sending html

Res.sendFile …. 

Html = <div>hello<div>

Res.send(html)

SQL ? 

app.get("/attitude-chart/:att", function(req, res) {
  connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err, result) {









