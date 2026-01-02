# Middleware

## 1. Definition
Middleware is the "plumbing" of your backend. It refers to functions that execute *during* the request lifecycle, before the final request handler sends a response.

## 2. Process Flow & Examples
When a request arrives, it passes through configured middleware functions before it reaches the router or a final request handler. If a middleware handles the request (e.g., by returning static assets), the process may end early.

Common middleware tasks include:
- **Static Asset Handling:** Checks if the request is for a static file (image, css). If so, the file is sent immediately.
- **CORS Handling:** Checks if the request is allowed from the client's origin.
- **Authentication/Authorization:** Checks if the user is logged in and has permission.
- **Request Logging:** Logs information about the request for debugging.
- **Body Parsing:** Parses JSON or form data in the request body (for POST/PUT requests).

If the request passes all middleware, it proceeds to the **Router**.

## 3. Configuration (Next.js Example)
*   **middleware.ts (or .js):** In Next.js, this is a single file placed at the project root (or inside `src/`) used to run code before a request is completed. It's a central part of the "Request Pipeline."

*Next Step:* [[2. Routing]] or [[Router]]