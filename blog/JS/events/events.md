**Events**

1. a "target" dispatches an "event"

2. the event moves along the ancestral chain until it reaches top-most, then it returns

3. on one of these nodes, a "listener" is placed, which will "handle" the event.

   <hr></hr>

   

   ​															**Creating an event**

**Event Dispatcher: Built-in**

HTMLElement is a DOM API.  Such APIs have properties, methods, and events.  Events auto-dispatched includespointer, input, animation, and transition events.  These may be listened for, either on the target itself or an ancestor.

Different events only fire when certain criteria is met.  For example, the input event is fired when the value of <input>, <select>, or <textarea> has been changed. 

the input tag <input> is accessible through the HTMLInputElement, which inherits from HTMLElement.

**Event Dispatcher: Custom**

Event constructor

```js
el.dispatchEvent(new Event('build'));
```

Event w/ custom data

- takes a second argument:  `detail` object 

```jsx
el.dispatchEvent(new CustomEvent('build', { detail: elem.dataset.time }));
```

**Event Naming Convention**

- prefix with library name

- Use lowercase

- Kebab-case

  <hr></hr>

  ​								**The event itself**

Event objects are "dispatched".  They carry information about the dispatch

props: 

- currentTarget - which HTMLElement is the listener attached to?  

- target - ref to object of which the event was fired upon regardless of eent that listend to event; tells us which HTMLelement on which the event occured.  If I click a button, an event object is fired from that button, which moves up tree.

- EventTargets are Objects that fire events. EventTargets usually expose an onevent property for each event where you can assign a Function to be called when the event fires. You can also use addEventListener() to hook up multiple listeners to the same even

- The element "fires" an event object, which lands on a target div, located higher up the tree.

  **The event object has a few props:** 

  target - identifies the element that fired the event

  currentTarget - identifies the element that heard the event.

  **target element**

  this is the most nested element

  the element where it happens

  we can check event.target

  other event object props

  target - above

  currentTarget - the elemen that handles the event ( the one with the handler)

  eventPhase - the curent phase 1, 2, 3

  Where to place the event listner / handler? 

  Ideally, place onclick on the button to be clicked, since it will have lots of info on that.

  Further up, we lose the context of the target.

<hr></hr>

**Event Listener**

We can add a "listener" further up the tree.

this.input.addEventListener('input', func) // addEventListner ~ allows removal of handler code + multiple lisnters of same type to elements.

this.input.onInput = func; // event handler property

**Event Handler**

The function that handles the fired event.  In the instance, func

const func = (e) => { console.log(e)}



**Listeners / Handlers**

addEventListener(event, handler) > this only runs on teh 2nd and 3rd phase.  It doesn't run on bubbling.

to catch an event on the capturing phase, we need to set the handler `capture` option to `true` 

```jsx
elem.addEventListener(..., {capture: true}) 
// or, just "true" is an alias to {capture: true} 
elem.addEventListener(..., true)
```

are events fired from the outer rim, and seek out its "target"?

they simply don't trigger handers on the capture phase. 

also, if all 3 phases are included, the target phase will trigger twice - one for arriving (during capture) and then for departing (bubble)



 <hr></hr>





**Phases**



```
<div>
	<p>
		<a></a>
	</p>
<div>
```

Capturing

- we click on <a></a>  -- this is the "target"
- the browser goes to the elements outer-most ancestor: <html></html>
- does that have any registered handlers? if so, run them.  If not, go to the next element inside... eventually we get to <div> and <p> which is the direct parent of element clicked (the target).

Target phase

- does the target property have an event handler? 

Bubbling phase - this can be turned off.

- moves up the the ancestral tree, checking for handlers, until <html> is reached.



stopPropagation()

- first handler is run, but the event doesn't bubble up so other handlers are not run



**modifying in capture / bubbling**

If we click on an element, then an event is dispatched from 

the upper layer (window) to that element > capture phase

from element back to window > bubbling phase



if you place a listener in between, could you 

have it get the event obejct, modify its detail

so that its used by event target



https://javascript.info/event-delegation

