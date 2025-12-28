

- **API Routes**
    
    - API endpoints are created within the `pages/api` directory.
        
- **Middleware**
    
    - The recommended method for API routes is to use a library, such as `next-connect`, to wrap the route handler.


**Pages Router (`pages/api`):**

- File Name
    
    - `pages/api/users.js` creates an endpoint at `/api/users`.
    - `pages/api/users/[id].js` for `/api/users/:id`).

* **Handler** Function
    
    - You export a _single_ default function (usually named `handler`).
    - Arguments: req, res - These are standard Node.js HTTP request and response objects, extended by Next.js.  req.method =>  (GET, POST, PUT, DELETE, etc.).
    - Return ? 
