
The getBoundingClientRect returns coordinates relative to the viewport. It means that it doesn't take window (body) scroll position into account.

Properties other than width and height are relative to the top-left of the viewport.

For example, if the window is scrolled down by 10px, you have to add 10 to the returned top value to get the element top-left corner coordinates relative to the document top-left corner.

Maybe your window was scrolled and that messed up your calculations.

If you use jQuery, you can use its offset method, which returns coordinates relative to the document top-left corner, and by the way, uses getBoundingClientRect internally (at least newer versions).

updating css with js

https://css-tricks.com/updating-a-css-variable-with-javascript/