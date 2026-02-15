

- requires a polyfill


http://www.javascriptkit.com/javatutors/requestanimationframe.shtml

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

what is repaint and reflow?

painting - synonym for layout and rendering

parts of browser: 

1. UI
2. browser engine - tranform HTML docs / other resource into an interactive visual representation
3. rendering engine - 


steps

1. browser parses HTML to create a DOM tree (each HTML tag has a coresponding node whose root is documentElement (<html>)).
2. browser parses CSS, starting with user-agent (default) sheets, then personal sheets, then style attributes.
3. create a "render tree" from both CSS & HTML - if a page hides a node or loops through a single node - it might be seen as an instance of the dome tree.  each node in the render tree is called a frame or box (as in the box model).  Each node has box properties - width, height, border, margin.  t
4. when render tree is built, broswer can then paint the render tree nodes on the screen. 
   
painting

1. reflow/layout - revalidate/calculate node dimensions. there's always at least one reflow - the initial one.  user-blocking operation.  reflowing one element means reflowing its ancestors. how to improve reflow time? 
   
2. repaint/redraw - update parts of the screen due to changes in node style / properties -repaint triggered by changing an elements visiblity, outline, background. an expensive op due to need to check all other dom nodes

- these slow the UI 


login 
align
patient name last 
interpreation scroll - 4675

   egghead.io - dev tools

