# Router

The Router maps the request's **URL** and **HTTP Method** to the appropriate **Request Handler**.

## 1. Routing Logic
If the request wasn't handled by middleware (e.g., it's *not* for a static asset), the server's router determines which function should process the request. The router distinguishes between:

*   **Page Requests:** Requests for HTML pages (usually GET requests).
*   **API Requests:** Requests for data (GET, POST, PUT, DELETE requests to URLs often starting with `/api/...`).

## 2. Implementation Examples

*   **Express:** Uses `express.Router()`, `router.get()`, `router.post()`. See [[Express Router]].
*   **Next.js (Pages Router):** File-system based routing in `pages/` and `pages/api/`. See [[Next.js Pages Router]].
*   **Next.js (App Router):** File-system based routing in `app/`, using `page.tsx` for UI and `route.ts` for API endpoints. See [[Next.js App Router]].

*Next Step:* [[Request Handler]]