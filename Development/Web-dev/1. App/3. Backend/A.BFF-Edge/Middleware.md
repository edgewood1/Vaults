
🥈 Support Systems Notes
This layer is the "backend" infrastructure that supports your app.

Note 3: Project Root (Config & Middleware)
This note consolidates all the top-level files that configure your project's environment, dependencies, and request pipeline.
 * Middleware:
   * middleware.ts (or .js): A single file at the root (or inside src/) used to run code before a request is completed (e.g., for auth, redirects). This is part of the "Request Pipeline."

Returns [[static assets]]

Or goes to [[Router]]

**Middleware Processing:** The request passes through any configured middleware functions. This is where things like:
    
    - **Static Asset Handling (`express.static` in Express):** Checks if the request is for a static file. If so, the file is sent, and the process skips to step 10 (Response).
    - **Authentication/Authorization:** Checks if the user is logged in and has permission.
    - **Request Logging:** Logs information about the request.
    - **Body Parsing:** Parses JSON or form data in the request body (for POST/PUT requests, not relevant for this initial GET).
    - **CORS handling**
    