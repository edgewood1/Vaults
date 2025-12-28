https://classroom.udacity.com/courses/ud860/lessons/4138328558/concepts/41366985950923

What does jank mean? What are people complaining about when they say a web page “feels slow”?

Jank - an isolated long pause (tank) during JS-driven animations rather than consistent low ramerate

> Modern browsers try to refresh the content on screen in sync with a device’s refresh rate. 
>
> This rate is 60 times a second, or 60Hz. 
>
> If there is some motion on screen (such as scrolling, transitions, or animations) a browser should create 60 frames per second to match the refresh rate. 
>
> Jank is any stuttering, juddering or just plain halting that users see when a site or app isn’t keeping up with the refresh rate.

If animations are janky, users will eventually interact less and less with your app, thereby negatively impacting on its success. Obviously, nobody wants that.



A frame is a new picture

Device refreshes every second

so we need a frame per second

if browser takes too long to make a frame, it will get missed on the next refresh frame

How to budget task your app performs - each frame needs to render quickly: exactly 60 frames every minute

keep all frame-work under 16 ms, or 10-12 if you consider the extra work needed

**how does browser render a frame?** 

* see Cam and Illya's course

Browser makes GET request to server

server sends html file - a series of nodes (DOM) and CSS

how to combine these two via recalculate styles

this creates the **render tree**

loooks like the dom but some things are missing - this will look exactly like what you'll see.  It removes hidden nodes, etc.

Next, it calculates layout - how much space elements take up on the screen.

turns a tree (looks like a flowchart) into a series of embedded boxes - this looks even more close to what you'll see.  

layout is also called "reflow".

Boxes are just vectors - shapes

but then we need to fill in individual pixels - 

raster is a grid that shape goes into

raster will make a series of calls to fill in the grid.

one call: drawBitMap - takes a jpeg, decodes it into memory, resize

sometimes painting occurs in multiple layers (composite layers)

all this occurs on cpu and then loaded to gpu

Gpu puts pics on screen.

