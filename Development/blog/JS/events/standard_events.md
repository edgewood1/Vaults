Events

1.	Mouse events basics
Mouse event types
We can split mouse events into two categories: “simple” and “complex”

Simple events
The most used simple events are:

mousedown/mouseup
Mouse button is clicked/released over an element.
mouseover/mouseout
Mouse pointer comes over/out from an element.
mousemove
Every mouse move over an element triggers that event.
…There are several other event types too, we’ll cover them later.

Complex events
click
Triggers after mousedown and then mouseup over the same element if the left mouse button was used.
contextmenu
Triggers after mousedown if the right mouse button was used.

Click-related events always have the which property, which allows to get the exact mouse button.
•	event.which == 1 – the left button
•	event.which == 2 – the middle button
•	event.which == 3 – the right button
https://javascript.info/mouse-events-basics
dblclick
Triggers after a double click over an element.
Complex events are made of simple ones, so in theory we could live without them. But they exist, and that’s good, because they are convenient.

2.	Moving: mouseover/out, mouseenter/leave
3.	Drag'n'Drop with mouse events
4.	Keyboard: keydown and keyup
5.	Scrolling
6.	Page lifecycle: DOMContentLoaded, load, beforeunload, unload
7.	Resource loading: onload and onerror

