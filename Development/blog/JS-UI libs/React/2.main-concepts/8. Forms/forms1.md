Components are made with classes or functions (or elements?).  it is function or class that produces HTML to show the user (using JSX) and handles feedback from the user(via event handlers).  Components consists of two possible parts: pure JS part and JSX part (in return()).

JSX – see babeljs.io you can see jsx converted to javascript.  Similar in form to HTML.

Difference jsx / html
1.	Styling
Style = “background-color: red;”
Style = {{ backgroundColor: ‘red’, color: ‘white’}} – an object held in JS braces
2.	Class
a.	ClassName instead of class
3.	Can use JS variables
a.	In a component, you can define a variable BEFORE the return, and use it (in curly braces) inside the return.  You can also use function calls in JSX curly braces. 
b.	JSX can’t represent a whole object, but we can show its property.
c.	for=”name” should be htmlFor=”name”


React knows what a componet is an dhow to make them work together.  What is a component?
ReactDOM knows how to make a component and make is how up in the DOM – how to make component appear on the screen? 

Create-react-app – builds a new project, which contains libraries such as webpack, babel, an dev server

Babel – there are many versions of JS and stylesheets.  Babel will translate all of these to vanilla (ES5) JS so that it can be used by 

Webpack – a bundler system 

Public – static files
Src – source code

Three aspects of a module: 

1.	Import react / reactDOM libraries 
a.	<action> <variable> <from-keyworkd> <name of dependency/or path>

Two module systems
1.	Require – commonJS import 
2.	Import – es15 import

Import React from ‘react’;
Import ReactDOM from ‘react-dom’;

3.	Create a react component (ES6 removes “function” and adds => to other side of ()
Const App = () -> {
	Return <div> Hi There </div>
};

4.	Show comonent on the screen via two arguments: 

ReactDOM.render( <App /, document.querySelecto(‘#root’)


The roads do look pretty good now; I’m the less certain about how they’ll be after class (since I’m coming from Durham), but optimistic.  Will they mostly be working on their projects tonight?  

FORMS

0.	Html forms
a.	Value > initial value for input field
Name > name of variable that will receive input

1.	The form
a.	Form onSubmit={this.handleSubmit}
b.	Input value = {this.state.value} onChange={this.handleChange}

2.	OnChange – fired on every keystroke.  This enables the input value to update to user input.  Otherwise, it will remain the value.  This will point to a handleChange function: 
    handleChange(event) {
    this.setState({value: event.target.value});
    }
3.	OnSubmit will be fired upon click, and will fire the handleSubmit function.
handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }

4.	Constructor
a.	Its argument
b.	Super()
c.	This.state
d.	Bind the two functions to the constructor context, that way, “this” in handleChange refers to constructor().  



  titleStyle = {
    fontSize: "150%",
    marginTop: "5%",
    // marginLeft: '10%',
    textAlign: "center",
    fontWeight: "bold"
  };
  textStyle = {
    fontSize: "130%",
    marginLeft: "5%",
    marginRight: "5%",
    fontFamily: "Garamond"
  };



