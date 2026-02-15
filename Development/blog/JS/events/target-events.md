Target.event 

Events are “things” that happen to HTML elements as a result of the broswer’s or the user’s actions. 

An event might be: 
1.	Web page is finished loading (browser action)
2.	Input field is changed (user action)
3.	Button is clicked (user action)

You can “listen” for such an event via an event handler.

HTML EVENTS (HTML inline)

The significant drawback with inline events is that unlike event listeners described above, you may only have one inline event assigned. Inline events are stored as an attribute/property of the element[doc], meaning that it can be overwritten.


<element event="some JavaScript">

<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button


<button onclick="displayDate()">The time is?</button>

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

HTML DOM EVENTS (Javascript)

document.getElementById("myBtn").onclick = displayDate;

EVENT LISTENER

document.getElementById("myBtn").addEventListener("click", displayDate);

 attaches an event handler to an element without overwriting existing event handlers.

https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick


The target event property returns the element that triggered the event.
The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.

<body onclick="myFunction(event)">

<p>Click on a paragraph. An alert box will alert the element that triggered the event.</p>

<p><strong>Note:</strong> The target property returns the element that triggered the event, and not necessarily the eventlistener's element.</p>

<script>
function myFunction(event) { 
    alert(event.target.nodeName);
}
</script>

Using the event.target property together with the element.tagName property to find out which element triggered a specified event:
var x = event.target.tagName;
event.target returns the DOM element, so you can retrieve any property/ attribute that has a value; so, to answer your question more specifically, you will always be able to retrieve nodeName, and you can retrieve href and id, provided the element has a href and id defined; otherwise undefined will be returned.
However, inside an event handler, you can use this, which is set to the DOM element as well; much easier.
$('foo').bind('click', function () {
    // inside here, `this` will refer to the foo that was clicked
});


Event.type - reveals the type of event

