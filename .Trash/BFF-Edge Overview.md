# BFF & Edge Overview

This section covers topics related to the "Backend for Frontend" (BFF) and Edge computing layer, which is responsible for handling the HTTP request/response cycle.

## Definitions

*   **BFF (Backend for Frontend):** A server layer that acts as a middleman between the client (e.g., a web browser) and downstream services (like a core server or database). It shapes data specifically for the frontend's needs.
*   **Edge:** A global network of servers (CDNs) that are physically closer to users. Edge Functions allow you to run backend code on these servers, reducing latency.

## Example Flow (Next.js API Route)

A typical request flow for a Next.js API Route operating as a BFF on the Edge might be:

1.  **Request:** The client sends a request to an API endpoint (e.g., `/api/users`).
2.  **Validation:** The API Route (`route.ts`) receives the request. It uses a library like Zod to validate the incoming data against a schema.
3.  **Processing:** If validation passes, the route executes its logic. This often involves calling a database (e.g., using Prisma) or another downstream service.
4.  **Response:** The API Route sends back a JSON response (e.g., a "200 OK" with the requested data, or an error).