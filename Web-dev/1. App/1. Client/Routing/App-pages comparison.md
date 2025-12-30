
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
 

