# Next.js


**When to Create a Dedicated API Route**
 1. To handle interactive requests from the client-side. This is for any action a user takes in their browser after the page has loaded, such as submitting a search query, filtering a list, or saving a form.
 2. To receive webhooks from third-party services. External services like Stripe (for payments) or GitHub need a stable endpoint to send your application information.
 3. To expose a public API for other applications. If you have a mobile app or another backend service that needs to consume your data, an API route provides a standard, reusable interface.

**When to Fetch Data Directly**
For initial page loads within Server Components (like a page.tsx file), you should import your data-fetching logic (your "query function") and call it directly within the component.
The data fetched on the server is then used to render the page's initial HTML. You can also pass this data as props down to Client Components for hydration and further interactivity.

**Pages Router (`pages/api`):**
   
	**Routes** 
    - `pages/api/users.js` creates an endpoint at `/api/users`.
    - `pages/api/users/[id].js` for `/api/users/:id`).

Handlers

    - You export a _single_ default function (usually named `handler`).
    - Arguments: req, res - These are standard Node.js HTTP request and response objects, extended by Next.js.
    - You manually check the `req.method` to handle different HTTP methods (GET, POST, PUT, DELETE, etc.).

- **App Router (called Route Handlers):**
    
    - Route Handlers are defined in a special file named `route.js` _inside_ a folder that represents the route segment. 
    - The `route.js` file is _required_ within the folder.
    - app/api/users/route.js` creates an endpoint at `/api/users`.
    - (e.g., `app/api/users/[id]/route.js` for `/api/users/:id`).

Handlers

    - You export _named_ functions, one for each supported HTTP method. The function names are the uppercase HTTP method names (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS).
    - These functions receive a `Request` object (which is the standard Web `Request` object, _not_ the Node.js `req`object) and a `context` object. The context contains parameters in `context.params`.
    - You return a `Response` object (also the standard Web `Response` object) or a `NextResponse` object (a helpful extension from Next.js).

API —— 

        
   Contrast: JavaScript
    
    ```
    // pages/api/products.js
    export default async function handler(req, res) {
      if (req.method === 'GET') {
        // Handle GET request
      } else if (req.method === 'POST') {
        // Handle POST request
      } else {
        res.status(405).end(); // Method Not Allowed
      }
    }
    ```
    

    JavaScript
    
    ```
    // app/api/products/route.js
    import { NextResponse } from 'next/server';
    
    export async function GET(request, context) {
        //context.params contains the route parameters
      // Handle GET request
      return NextResponse.json({ message: 'Hello from GET' });
    }
    
    export async function POST(request) {
      // Handle POST request
      const data = await request.json(); // Use request.json() to parse JSON body
      return NextResponse.json({ message: 'Hello from POST', data });
    }
    
    // No default export needed!
    ```
    

**3. Request and Response Objects:**

- **Pages Router:** Uses Node.js's built-in `http.IncomingMessage` (for `req`) and `http.ServerResponse` (for `res`), extended by Next.js. These have methods like `req.query`, `req.body`, `res.status()`, `res.json()`, `res.send()`.
    
- **App Router:** Uses the standard Web Fetch API's]([https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)%27s](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)%27s)) `Request` and `Response` objects. This is a more modern and standardized approach. You use methods like `request.json()`, `request.text()`, `request.formData()`, and create responses using `new Response()` or `NextResponse.json()`, `NextResponse.redirect()`, etc.
    

**5. Streaming:**

- **Pages Router:** Streaming is not directly supported.
- **App Router:** Supports streaming responses using the Web Streams API, making it possible to send data to the client incrementally.

**6. Edge Runtime:**

- **Pages Router:** By default, API routes run in a Node.js environment. You _can_ opt-in to the Edge Runtime using the `config` export, but it's not the default.
    
    JavaScript
    
    ```
    // pages/api/edge-function.js
    export const config = {
      runtime: 'edge',
    };
    
    export default async function handler(req, res) { ... }
    ```
    
- **App Router:** You can choose between the Node.js runtime and the Edge Runtime _per route_ using the `runtime`export. The Edge Runtime is often preferred for its performance benefits (lower latency, closer to the user), but it has limitations on available APIs.
    
    JavaScript
    
    ```
    // app/api/edge-route/route.js
    export const runtime = 'edge'; // or 'nodejs'
    
    export async function GET(request) { ... }
    ```
    ‘

**7. Data Fetching (Within the Route Handler):**

- **Pages Router:** You can use any method to fetch data (e.g., `fetch`, `axios`, database clients) within your handler function.
    
- **App Router:** You can _also_ use any method, but Next.js extends the `fetch` API to provide automatic request deduping and caching. This is a significant performance improvement, especially when multiple components on a page might need the same data.
    

**8. Mutability (POST, PUT, DELETE):**

- **Pages Router**: Typically you would use req.body to get the data
- **App Router:** `request.json()`, `request.text()`, `request.formData()` all are available to read the request.
Summary


|                  |                                          |                                                                   |
| ---------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| **Feature**      | **Pages Router (pages/api)**             | **App Router (Route Handlers)**                                   |
| Directory        | `pages/api`                              | `app/.../route.js`                                                |
| Function Exports | Single default `handler` function        | Named functions per HTTP method (GET, POST, etc.)                 |
| Request Object   | Node.js `req` (extended)                 | Web `Request`                                                     |
| Response Object  | Node.js `res` (extended)                 | Web `Response` / `NextResponse`                                   |
| Middleware       | `next-connect` (or similar library)      | `middleware.js` file                                              |
| Streaming        | Not supported                            | Supported                                                         |
| Runtime          | Node.js (default), Edge (opt-in)         | Node.js or Edge (per-route)                                       |
| Recommendation   | For existing projects, gradual migration | **Recommended for new projects**                                  |
| HTTP methods     | if/else checking of `req.method`         | Individual functions per method. `export async function GET() {}` |
| Mutability       | `req.body`                               | `request.json()`, `request.text()`, `request.formData()`          |
| Parameters       | `req.query`                              | `context.params`                                                  |

App router 

Absolutely! That line:

```js
import { NextRequest, NextResponse } from "next/server";
```

is part of a **Next.js** application, specifically when you're working with **middleware** or edge functions.

Here’s what it does:

### 📦 `NextRequest`
- A special class provided by Next.js that extends the standard `Request` object from the **Web Fetch API**.
- It gives you helpful extras like:
  - `nextUrl`: a parsed version of the request URL with easy access to pathname, searchParams, etc.
  - `cookies`: to read cookies sent with the request
  - `geo`: geolocation data (when supported)
  - `ip`: visitor’s IP address (when available)

### 📤 `NextResponse`
- A class to **construct responses** from your middleware.
- It extends the standard `Response` object, adding methods like:
  - `NextResponse.redirect(url)`: for URL redirects
  - `NextResponse.rewrite(url)`: to internally rewrite the request to a different path
  - `NextResponse.next()`: to continue to the next middleware or route handler

### 🛠️ When is this used?
This is most often used in a `middleware.ts` or `middleware.js` file where you might want to:
- Redirect users based on authentication
- Modify request/response headers
- Localize content based on location
- Add feature flags, A/B testing, etc.

If you want a real-world example or want to write a sample middleware, I’ve got you covered!



