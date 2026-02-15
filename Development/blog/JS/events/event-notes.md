HTML tags correspond to JS objects, but not always

<div id='x'>  el=doc.qs('#x');

Stop 461?

Registering handler to a target: 3 ways

<div onclick = x>

(x).addEventListner = () => 'click', .... 

(x).onclick = () => { this.handler }  // this refers to the component

handler() {
  this.alice = 5 // this refers to the x tag that contains the function ~ this must be bound in order to work
}

target - the element that has the onclick; event associated with an object, the (html object) source of the event's emission.

type - click, keyup

event typs occur on event targets
an event type is triggered on a target
when this triggering occurs, the handler is invoked

handler - function that handles response to event; handlers are registered with specific objects; 

object - contains details about the event, passed as an argument to handler

e.target
e.type


1. event fires / triggered from a target (elements taht define handler)

3. bubble - its move up the chain
4. capture - way back down
2. propagation - movement up and down teh chain.  this can be stopped at any moment.

DOM - document
BOM - navigator, screen, location, frames, history, etc - objects exposed by web browser

- browser loads window first
- document is the main JS object on window




binding

gridcolumn.boundContainerMenu... 







