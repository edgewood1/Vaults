DOM

<div>
    <p id="userchoice-text"></p>
    <p id="computerchoice-text"></p>
  </div>


1.	Find a DOM element (by id, tag name, etc)
a.	var userChoiceText = document.getElementById("userchoice-text");
2.	Changing the HTML content / attribute
a.	document.getElementById(id).innerHTML = new HTML
i.	--- this is used combines “find” with “add”
b.	userChoiceText.textContent = "You chose: " + userGuess;
c.	document.getElementById("myImage").src = "landscape.jpg";



accepted
Differences between textContent/innerText/innerHTML on MDN.
And a Stackoverflow answer about innerText/nodeValue.
Summary
1.	nodeValue is a little more confusing to use, but faster than innerHTML.
2.	innerHTML parses content as HTML and takes longer.
3.	textContent uses straight text, does not parse HTML, and is faster.
4.	innerText Takes styles into consideration. It won't get hidden text for instance.




DOM

 There’s the HTML code, and there’s the DOM, which is a tree of objects.  Every element, attribute, and piece of text in the HTML is represented by its own DOM node.  

Document nodes represent the entire page. 

Then you find an element on this page, then you access its text and attribute nodes. 

Each node is an object with methods and properties. 

If we change the DOM tree , its reflected in the browser. 

 it defines HTML elements as objects so that we mght get, change, add, and delete them using JS

Method – You can perform an action – like adding and deleting an element
Property - You can get  / set a value, like the content of an element

innerHTML property – changes the content of HTML emlement. 

