[[Network]]


1. **User Action:** User types `www.example.com` into the browser's address bar and presses Enter (or clicks a link to that URL). This elicits an HTTP request

2. **HTTP Request:** The browser sends an HTTP GET request to the server. The request includes:
    
    - **Method:** `GET`
    - **URL:** `/` (the root path)
    - **Headers:**
        
        HTTP
        
        ```
        Host: www.example.com  (Tells the server *which* website is being requested)
        User-Agent: ... (Information about the browser)
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,... (Specifies the content types the browser can accept)
        Accept-Language: ...
        ... (and other headers)
        ```
        
    

4. **Client Receives and Processes:**
    
    - The browser receives the HTTP response.
    - It parses the response based on the `Content-Type` header.
    - **If HTML:** The browser parses the HTML, constructs the DOM (Document Object Model), and _makes additional requests_ for any linked resources (CSS, JavaScript, images) specified in the HTML.
    - **If JSON:** The browser (or JavaScript code running in the browser) parses the JSON data.
    - The browser renders the page (for HTML) or processes the data (for JSON).

**Example HTTP Response (HTML):**

HTTP

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: ...
Date: ...
Server: ...

<!DOCTYPE html>
<html>
  ... (HTML content) ...
</html>
```

**Example HTTP Response (JSON):**

HTTP

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: ...
Date: ...
Server: ...

{
  "message": "Hello, world!"
}
```

**Possible Initial Responses (Content-Types):**

- `text/html`: (Most common for initial page requests)
- `application/json`: (Common for API requests, less common for initial page load)
- `application/xml`: (Less common)
- `text/plain`: (Simple text responses)
- `application/pdf`: (Direct link to a PDF)
- `application/octet-stream`: (Generic binary data, usually triggers a download)
- _Redirects (3xx status codes)_: These responses tell the browser to make a _new_ request to a different URL.


What are the other ways of calling other servers? 

* web sockets?