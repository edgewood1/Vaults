


**Document.js**

* _document.js: An optional file to customize the server's <html> and <body> tags.
* Where outer html lives - it wraps our pages. 
* 1. _document.js (Server Only): This runs once on the server to spit out the initial HTML. It is "dead" static HTML. You cannot use React hooks (useEffect, useState) here because the browser never sees this code; it only sees the result.


**App.js**
* _app.js: A required file to wrap your entire application. Used for global state, styles, and layouts.
*  app.js is where we define the App tag that is used inside document.js?
* _app.js (Server + Client): This code is sent to the browser. It is "alive." This is why you put your Global CSS and Context Providers here—because they need to be interactive and persist as the user clicks around.

This is document.js file - it contains HTML and the APP. 
What is Main? 

```html
<Html>  <-- _document.js starts here
  <Head />
  <body>
    <Main>
       <App>  <-- _app.js file.  
          <Provider>
             <Component />  <-- Your specific page (e.g., index.js) goes here
          </Provider>
       </App>
       
    </Main>
    <NextScript />
  </body>
</Html>
```
🧱 The Architecture: _document vs _app

Document: 

* the shell that controls the <html> and <body> tags
* Runs server-side only 

• Use for: lang="en", fonts, external scripts.

• Note: Instead of importing App, it uses the <Main /> tag as a placeholder for your app.

**The Logic (_app.js):**

* It persists layouts and state when navigating
* Runs: Server and Client.
* Use for: Global CSS, Context Providers, Layout components.