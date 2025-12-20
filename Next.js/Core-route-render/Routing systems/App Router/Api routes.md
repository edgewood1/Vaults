

**App Router (called Route Handlers):**

* Filename
    
    - File: `route.js` 
    - Folder:  represents the route segment.  (users)
    - app/api/users/route.js` creates an endpoint at `/api/users`.
    - (e.g., `app/api/users/[id]/route.js` for `/api/users/:id`).

```jsx

import { NextResponse } from 'next/server'; // what is this? 

Export async function GET(request, context) {
	// context .params holds route parameters - what is that? 
	Return  NextResponse.json({ message: ‘hi’})
}

Export async function POST(request) {
	Const data = await request.json(); // use this to parse json body
	Return Next Response.json({message: data})
}

```

- **Handler**
    
    - You export _named_ functions, one function for each HTTP method.  The function names are the uppercase HTTP method names (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS).
    - Arguments: Request & context.  Request: the standard Web `Request` object, _not_ the Node.js `req`object. context contains parameters in `context.params`.
    - Return:`Response` object (also the standard Web `Response` object) or a `NextResponse` object (a helpful extension from Next.js).


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

 

How do each use request and response objects? 

App Router Perks
* supports streaming responses using the web streams API. 


What is Edge Runtime? Why use it? How different from Node runtime? 

