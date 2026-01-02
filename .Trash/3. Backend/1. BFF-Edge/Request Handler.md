- Description: The function that contains the core logic for handling a specific request.
- Details:
    - Accessing request data (`req` object).
    - Generating the response (`res` object).
    - Interacting with databases, etc.
    - **Express:** Example handler functions.
    - **Next.js (Pages Router):** Explanation of page components and API route handlers.
    - **Next.js (App Router):** Explanation of page components and Route Handlers.
- Links: `[[API Request Handler]]`, `[[Page Request Handler]]`, `[[Data Fetching]]`


Two kinds: 
[[API handler]]

[[Page handler]]

9. **Request Handler Execution:**
    
    - **Page Request Handler:** This is where the method of rendering comes into play. There are three main approaches:
        
        - **Traditional Server-Side Rendering (SSR):**
            
            - The server fetches any necessary data.
            - The server uses a template engine (e.g., Pug, EJS, Handlebars in a plain Node.js/Express app) to combine the data with an HTML template, generating the _complete_ HTML for the page.
            - The server sends the complete HTML to the browser.
            - _Example:_ A PHP, Ruby on Rails, or basic Node.js/Express application without a frontend framework.
        - **Next.js (Server-Side Rendering - SSR):**
            
            - The server fetches data (using `getServerSideProps` in the Pages Router, or `fetch` within a Server Component in the App Router).
            - The server _renders the React component(s) to HTML_. This is different from traditional templating; it's executing React code on the server.
            - The server sends the complete HTML to the browser.
            - The browser receives the HTML _and_ the necessary JavaScript for the page.
            - _Hydration:_ The JavaScript code then "hydrates" the HTML, attaching event listeners and making the page interactive. This is where React takes over on the client-side.
        - **Next.js (Static Site Generation - SSG):**
            
            - The server fetches data and renders the React components to HTML _at build time_ (when you deploy your application), _not_ on each request.
            - The server stores the pre-rendered HTML files.
            - When a request comes in, the server simply sends the pre-rendered HTML file (very fast).
            - Hydration occurs on the client-side, just like with SSR.
        - **Client-Side Rendering (CSR) - Pure SPA:**
            
            - The server sends a _minimal_ HTML file, typically just a basic HTML structure with a `<div id="root"></div>` (or similar) and a `<script>` tag that loads the application's JavaScript bundle. The HTML _does not_ contain the actual content of the page.
            - The request handler is simple, serving the same small HTML file every time
            - The browser receives this minimal HTML and starts executing the JavaScript.
            - The JavaScript code (React, Angular, Vue, etc.) is responsible for:
                - Fetching data (usually via API calls).
                - Rendering the UI _in the browser_ by manipulating the DOM. The entire application is built dynamically on the client-side.
            - _Example:_ A React application created with `create-react-app` (without server-side rendering).
    - **API Request Handler:** Fetches or manipulates data (usually interacting with a database), and prepares a JSON response. No HTML rendering is involved.
        

**Corrected Summary Table (Including CSR):**

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|**Rendering Method**|**Server Role in Initial Request**|**Client Role in Initial Render**|**Subsequent Navigation**|**SEO**|**Performance**|
|**Traditional SSR**|Fetches data, renders _complete_ HTML using a template engine.|Receives and displays the complete HTML.|Full page reloads.|Good|Slower initial load, slower navigations.|
|**Next.js SSR**|Fetches data, renders React components to _complete_ HTML.|Receives complete HTML, then _hydrates_ it with JavaScript (React takes over).|Client-side navigation (usually).|Excellent|Faster initial load than traditional SSR (due to optimizations), fast navigations.|
|**Next.js SSG**|Serves pre-rendered HTML files (generated at build time).|Receives complete HTML, then hydrates it with JavaScript.|Client-side navigation (usually).|Excellent|Fastest initial load, fast navigations.|
|**Pure CSR (SPA)**|Serves a _minimal_ HTML file (basically an empty shell) and a link to the JavaScript bundle.|Receives minimal HTML, then JavaScript fetches data and _renders the entire UI in the browser_.|Client-side navigation.|Can be challenging (requires workarounds).|Slower initial load (blank page until JS loads and executes), fast subsequent navigations.|


Response


8. **Response Generation:** The server constructs the HTTP response:
    
    - **Status Code:** (e.g., 200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error)
    - **Headers:** (e.g., `Content-Type: text/html` for HTML, `Content-Type: application/json` for JSON)
    - **Body:** The content of the response (HTML, JSON, image data, etc.)
9. **Response Transmission:** The server sends the response back to the client over the TCP connection.

---
See also: [[ORM]]