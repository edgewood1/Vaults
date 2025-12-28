<h2>DOM API</h2>

**What are APIs**

APIs - constructs (objects and their methods + properties) that allow you to interact with a denser level of code

**Two general kinds of APIs**

Browser APIs - built into browser and expose data from teh broswer and surrounding cput environment and does useful complex things with it.  EG, Web Audio API allows use to change audio, altering its volume, adding effects, etc.  

Third-part API - not built into the browser, so you have to retrieve their code from somewhere in Web.  EG: Twitter API allows you to do things like display latests tweets.

**Common Browser APIs**

- document manipulators: DOM API allows you to change HTML and CSS
- fetch data from server: Fetch API
- drawing graphics: Canvas and WebGL allows you to update pixel data contained in an HTML <canvas> element to create scenes.
- Audio and video APIs - HTMLMediaElement, WebAudio, WebRTC
- Device APIs - grab and change data from a modern device hardware- Notifications or Vibration API
- Client-side storage APIs - Web Storage (simple name-value storage) &

**Document Manpulator**

An HTML document - a tree of nested HTML elements

```html
<body>
  <div>
    hello
  </div>
</body>
```

The browser parses this into a document of interconnected nodes (DOM) that represents the structure of a webpage so that it can be changed by a script.



DOM API - the set of objects, methods, props by which we can change the DOM structure

- the DOM tree itself + the means of getting, editing, deleting, adding (CRUD) nodes on the tree.

**DOM tree**

- each object on the tree is called a "node".
- nodes are also called interfaces
- Examples: <table> </table> has teh corresponding Node type HTMLTableElement, which has methods like createCaption + insertRow
- each object can have event handlers attached to them

**Node object types vs interfaces**

NOTs: 

- *DOCUMENT_NODE* (e.g. *window.document*)
- *ELEMENT_NODE* (e.g. *<body>*, *<a>*, *<p>*, *<script>*, *<style>*, *<html>*, *<h1>* etc...)

These are properties that return a numerical value that identifies type

Equivalent Interface / Constructor (sometimes referred to as data types)

- HTMLDocument
- HTMLElement

Other DOM interfaces:

- Document, DocumentFragment, Element, Event, EventTarget, MutationObserver, Node, NodeList, Window, Worker

HTML? 

**Inheritence**

These Interfaces / Nodes exist in a hierarchy: 

- *Object* < *Node*(contains methods for traversing) < *Element* < *HTMLElement* < (e.g. *HTML\*Element*)
- *Object* < *Node* < *Attr* (This is deprecated in DOM 4)
- *Object* < *Node* < *CharacterData* < *Text*
- *Object* < *Node* < *Document* < *HTMLDocument*
- *Object* < *Node* < *DocumentFragment*



https://www.holisticseo.digital/technical-seo/dom/#Document-Object-Model-DOM-Level-0



<h3>Qualities of HTML elements</h3>



**Attributes**

Attributes are the equivalent of properties

- Global - used with all HTML elements (class, hidden, id...)

- Local - used with particular elements, so `accept` belongs to `<input>` 

**Events**



